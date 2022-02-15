import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  const getRandomIntInclusive = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  const [isPlaying, setIsPlaying] = useState(true);
  const [onPlay, setOnPlay] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden">
      <ReactPlayer
        url={`/static/video_${getRandomIntInclusive}.mp4`}
        width="100%"
        height="100%"
        playing={isPlaying}
        controls={false}
        loop={false}
        muted={true}
        playbackRate={1.5}
        pip={false}
        stopOnUnmount={true}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />
    </div>
  );
}
