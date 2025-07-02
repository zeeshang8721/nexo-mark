import React from "react";
import VideoEditingHero from "./Hero";
import VideoEditingServices from "./videoEditingCore";
import ShortFormVideoEditing from "./ShortFormVideoEditing";
import YouTubeEditing from "./youtubeEditing";
import MotionGraphics from "./MotionGraphics";
import Cta from "@/Components/Common/Cta";

const VideoEditing = () => {
  return (
    <div>
      <VideoEditingHero />
      <VideoEditingServices />
      <ShortFormVideoEditing />
      <YouTubeEditing />
      <MotionGraphics />
      <Cta />
    </div>
  );
};

export default VideoEditing;
