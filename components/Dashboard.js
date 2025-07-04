import { useState, useEffect } from 'react';

export function Dashboard() {
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
    <div className="bg-black p-4">
      <h1 className="text-gold text-lg">Dashboard</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id} className="text-gold text-lg">
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
}