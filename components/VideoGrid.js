import { useState, useEffect } from 'react';

export function VideoGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from API or database
    const fetchVideos = async () => {
      const response = await fetch('https://example.com/api/videos');
      const data = await response.json();
      setVideos(data);
    };
    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="bg-black p-4">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-gold text-lg mt-2">{video.title}</h2>
        </div>
      ))}
    </div>
  );
}