import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  return (
    <div className="container mx-auto w-2/3 sm:w-full sm:px-4 md:px-14 mt-8 mb-14">
      <div className="relative rounded-lg overflow-hidden">
        <ReactPlayer
          url="/static/drinking-coffee-mini.mp4"
          width="100%"
          height="100%"
          playing={true}
          controls={false}
          loop={false}
          muted={true}
        />
      </div>
    </div>
  );
}
