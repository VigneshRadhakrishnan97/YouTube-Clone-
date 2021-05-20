import React from "react";
import './VideoItem.css';

const VideoItem = ({ videos , click }) => {
  return (
    <div className="video-item item" onClick={()=>{click(videos)}}>
      <img alt={videos.snippet.title}
        className="ui image"
        src={videos.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="header">{videos.snippet.title}</div>
        
      </div>
    </div>
  );
};

export default VideoItem;
