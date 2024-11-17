import React from 'react';
import { Play } from 'lucide-react';

interface PlaylistProps {
  videos: Video[];
  currentVideoId: string;
  onVideoSelect: (video: Video) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ videos, currentVideoId, onVideoSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Course Content</h2>
      <div className="space-y-2">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => onVideoSelect(video)}
            className={`w-full flex items-center p-3 rounded-lg transition-colors ${
              currentVideoId === video.id
                ? 'bg-indigo-50 text-indigo-700'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex-shrink-0 w-32 h-20 rounded-md overflow-hidden mr-4">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow text-left">
              <h3 className="font-medium">{video.title}</h3>
              <p className="text-sm text-gray-500">{video.duration}</p>
            </div>
            {currentVideoId === video.id && (
              <Play size={20} className="text-indigo-600 ml-2" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Playlist;