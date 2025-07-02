"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";
import type {
  OGLRenderingContext,
  Renderer as OGLRenderer,
  Camera as OGLCamera,
  Program as OGLProgram,
  Mesh as OGLMesh,
  Geometry as OGLGeometry,
} from "ogl";

// Type helpers
type MousePosition = { x: number; y: number };
type ParticleColors = string[];

const defaultColors: ParticleColors = ["#ffffff", "#ffffff", "#ffffff"];

const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(hex, 16);
  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255,
  ];
};

// Safe type check for dispose()
function hasDispose(obj: unknown): obj is { dispose: () => void } {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "dispose" in obj &&
    typeof (obj as Record<string, unknown>).dispose === "function"
  );
}

// GLSL shaders
const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));

    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

const Hero3D = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });

  const rendererRef = useRef<OGLRenderer | null>(null);
  const glRef = useRef<OGLRenderingContext | null>(null);
  const cameraRef = useRef<OGLCamera | null>(null);
  const particlesRef = useRef<OGLMesh | null>(null);
  const programRef = useRef<OGLProgram | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      depth: false,
      alpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    rendererRef.current = renderer;
    glRef.current = gl;

    gl.canvas.style.position = "absolute";
    gl.canvas.style.top = "0";
    gl.canvas.style.left = "0";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.zIndex = "0";
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, 20);
    cameraRef.current = camera;

    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current || !glRef.current) return;
      rendererRef.current.setSize(
        container.clientWidth,
        container.clientHeight
      );
      cameraRef.current.perspective({
        aspect: glRef.current.canvas.width / glRef.current.canvas.height,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const particleCount = 1000;
    const position = new Float32Array(particleCount * 3);
    const random = new Float32Array(particleCount * 4);
    const color = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random());

      position.set(
        [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ],
        i * 3
      );

      random.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );

      const col = hexToRgb(
        defaultColors[Math.floor(Math.random() * defaultColors.length)]
      );
      color.set(col, i * 3);
    }

    const geometry: OGLGeometry = new Geometry(gl, {
      position: { size: 3, data: position },
      random: { size: 4, data: random },
      color: { size: 3, data: color },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: 10 },
        uBaseSize: { value: 100 },
        uSizeRandomness: { value: 1 },
        uAlphaParticles: { value: 1 },
      },
      transparent: true,
      depthTest: false,
    });
    programRef.current = program;

    const particles = new Mesh(gl, { geometry, program, mode: gl.POINTS });
    particlesRef.current = particles;

    const speed = 0.5;

    const animate = (time: number) => {

      if (!particlesRef.current || !programRef.current) return;

      programRef.current.uniforms.uTime.value = time * 0.001 * speed;
      particlesRef.current.position.x = -mouseRef.current.x * 1.5;
      particlesRef.current.position.y = -mouseRef.current.y * 1.5;
      particlesRef.current.rotation.x = Math.sin(time * 0.0002) * 0.1;
      particlesRef.current.rotation.y = Math.cos(time * 0.0005) * 0.15;
      particlesRef.current.rotation.z += 0.01 * speed;

      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render({
          scene: particlesRef.current,
          camera: cameraRef.current,
        });
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (gl.canvas.parentNode === container) container.removeChild(gl.canvas);

      if (hasDispose(geometry)) geometry.dispose();
      if (hasDispose(program)) program.dispose();
      if (particles && hasDispose(particles.geometry))
        particles.geometry.dispose();

      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white pt-44 sm:pt-48 pb-28">
      <div
        ref={canvasContainerRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      <div
        ref={contentContainerRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="block">
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
              Enter the
            </span>{" "}
            Third Dimension
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            We Build 3D Realities.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mt-6"
        >
          From interactive product models to immersive web visuals, we bring
          your brand into the 3rd dimension with precision and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full max-w-[250px]"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact-us"
            className="group relative flex justify-between w-full items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white"
          >
            <span className="relative z-10 mr-8">Start Your Project</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-[10px] z-10 transition-all duration-500 group-hover:rotate-45 group-hover:translate-x-1"
            >
              <path
                d="M4.66669 11.3334L11.3334 4.66669"
                stroke="black"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66669 4.66669H11.3334V11.3334"
                stroke="black"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute right-4 w-8 h-8 bg-[white] rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
