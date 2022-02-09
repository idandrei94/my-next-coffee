import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  const videoProperties = [
    {
      id: 1,
      title: 'Woman drinking coffee',
      src: '/drinking-coffee-mini.mp4',
      credit: 'Video by Artem Podrez from Pexels',
    },
  ];
  return (
    <div className="container mx-auto px-6 my-8">
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
