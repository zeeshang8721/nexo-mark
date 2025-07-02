"use client";
import { useEffect, useRef, useCallback } from "react";

interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  minFontSize?: number;
}

interface Position {
  x: number;
  y: number;
}

const TextPressure = ({
  text = "Compressa",
  fontFamily = "Compressa VF",
  fontUrl = "https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = "#FFFFFF",
  strokeColor = "#FF0000",
  strokeWidth = 2,
  className = "",
  minFontSize = 24,
}: TextPressureProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spansRef = useRef<HTMLSpanElement[]>([]);

  const mouseRef = useRef<Position>({ x: 0, y: 0 });
  const cursorRef = useRef<Position>({ x: 0, y: 0 });

  const fontSizeRef = useRef(minFontSize);
  const scaleYRef = useRef(1);
  const lineHeightRef = useRef(1);

  const chars = text.split("");

  const dist = (a: Position, b: Position) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: '${fontFamily}';
        src: url('${fontUrl}');
        font-style: normal;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [fontFamily, fontUrl]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
    const newFontSize = containerW / (chars.length / 2);
    fontSizeRef.current = Math.max(newFontSize, minFontSize);
    scaleYRef.current = 1;
    lineHeightRef.current = 1;

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        scaleYRef.current = yRatio;
        lineHeightRef.current = yRatio;
        titleRef.current.style.transform = `scale(1, ${yRatio})`;
        titleRef.current.style.lineHeight = yRatio.toString();
      }
    });

    if (titleRef.current) {
      titleRef.current.style.fontSize = `${fontSizeRef.current}px`;
    }
  }, [chars.length, minFontSize, scale]);

  useEffect(() => {
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [setSize]);

  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const animate = (time: number) => {
      if (time - lastTime >= interval) {
        lastTime = time;
        mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
        mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

        if (titleRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          const maxDist = titleRect.width / 2;

          spansRef.current.forEach((span) => {
            if (!span) return;

            const rect = span.getBoundingClientRect();
            const charCenter = {
              x: rect.x + rect.width / 2,
              y: rect.y + rect.height / 2,
            };

            const d = dist(mouseRef.current, charCenter);

            const getAttr = (distance: number, minVal: number, maxVal: number) => {
              const val = maxVal - Math.abs((maxVal * distance) / maxDist);
              return Math.max(minVal, val + minVal);
            };

            const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
            const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
            const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : "0";
            const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : "1";

            span.style.opacity = alphaVal;
            span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
          });
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha, chars.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-transparent"
    >
      <style>{`
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${flex ? "flex justify-between" : ""} ${stroke ? "stroke" : ""} uppercase text-center`}
        style={{
          fontFamily,
          fontSize: `${fontSizeRef.current}px`,
          lineHeight: lineHeightRef.current,
          transform: `scale(1, ${scaleYRef.current})`,
          transformOrigin: "center top",
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor,
          willChange: "transform, opacity, font-variation-settings",
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) spansRef.current[i] = el;
            }}
            data-char={char}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
