import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ Videos,click }) => {
  //(props.Videos)

  const VideoListRender = Videos.map((video) => {
    return <VideoItem key ={video.id.videoId} videos={video} click={click}/>;
  });

  return <div className="ui relaxed divided list">{VideoListRender}</div>;
};

export default VideoList;
