import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  const getRandomIntInclusive = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  return (
    <div className="container mx-auto w-2/3 sm:w-full sm:px-4 md:px-14 mt-8 mb-14">
      <div className="relative rounded-lg overflow-hidden">
        <ReactPlayer
          url={`/static/video_${getRandomIntInclusive}.mp4`}
          width="100%"
          height="100%"
          playing={true}
          controls={false}
          loop={false}
          muted={true}
          playbackRate={1.5}
        />
      </div>
    </div>
  );
}
