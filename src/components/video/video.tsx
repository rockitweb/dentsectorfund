/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { VideoData } from "./interfaces"
import { withPrefix } from "gatsby"

export type VideoProps = {
  video: VideoData
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  sx?: object //we expect a sx prop but never use it below
  className?: string //we expect a className prop but never define one when the component is called
}
export const Video: React.FC<VideoProps> = ({
  video,
  autoplay = true,
  muted = true,
  loop = true,
  className,
  children,
}) => {
  const vid = video.videoH264
  const poster = vid.screenshots[0].path

  return (
    <div sx={{ width: "100%", height: "600px" }}>
      <video
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        sx={{ width: "100%" }}
        className={className}
        poster={poster}
        src={withPrefix(vid.path)}
     
      >
        <source src={withPrefix(vid.path)} type="video/mp4" />
      </video>
      {children}
    </div>
  );
}

export default Video
