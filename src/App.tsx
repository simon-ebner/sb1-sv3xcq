import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';
import { GraduationCap } from 'lucide-react';

// Sample video data
const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to React Hooks',
    url: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    duration: '5:30',
  },
  {
    id: '2',
    title: 'Understanding UseEffect',
    url: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60',
    duration: '7:45',
  },
  {
    id: '3',
    title: 'State Management in React',
    url: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    duration: '6:15',
  },
];

function App() {
  const [currentVideo, setCurrentVideo] = useState(sampleVideos[0]);

  const handleNext = () => {
    const currentIndex = sampleVideos.findIndex(v => v.id === currentVideo.id);
    if (currentIndex < sampleVideos.length - 1) {
      setCurrentVideo(sampleVideos[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = sampleVideos.findIndex(v => v.id === currentVideo.id);
    if (currentIndex > 0) {
      setCurrentVideo(sampleVideos[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Learning Platform</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <VideoPlayer
                currentVideo={currentVideo}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-900">{currentVideo.title}</h2>
                <p className="mt-2 text-gray-600">
                  Learn the fundamentals of React development with our comprehensive video series.
                  Master modern web development techniques and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Playlist Section */}
          <div className="lg:col-span-1">
            <Playlist
              videos={sampleVideos}
              currentVideoId={currentVideo.id}
              onVideoSelect={setCurrentVideo}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;