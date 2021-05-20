import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return (
        <div class="ui active big centered inline loader"></div>
    );
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="videoplayer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
