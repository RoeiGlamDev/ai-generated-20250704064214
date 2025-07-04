import { useState, useEffect } from 'react';

export function VideoPlayer() {
  const [video, setVideo] = useState({
    src: 'https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  });

  return (
    <div className="bg-black p-4">
      <video
        src={video.src}
        poster={video.thumbnail}
        controls
        className="w-full h-96 object-cover"
      />
    </div>
  );
}