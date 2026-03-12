import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const IntelligenceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
              Intelligence <br />Built In
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              DOOR connects hardware, software, and automation into one cohesive system. 
              The result is greater visibility, fewer manual workflows, and stronger operational 
              oversight across every property.
            </p>
          </div>

          {/* Right - Video Preview */}
          <div className="relative">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
              {/* Video Placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1770197247933-63e02c014cb7?w=800" 
                alt="DOOR Intercom" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with device labels */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Device Labels */}
                  <div className="absolute -top-32 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    Latch Camera
                  </div>
                  <div className="absolute -top-16 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    Latch M3
                  </div>
                  <div className="bg-black px-6 py-3 rounded-full text-white font-medium shadow-2xl">
                    Latch Intercom
                  </div>
                  <div className="absolute top-16 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    Latch M3
                  </div>
                  <div className="absolute top-32 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    Latch Enterprise
                  </div>
                </div>
              </div>

              {/* Play Button */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-gray-900" />
                ) : (
                  <Play className="w-6 h-6 text-gray-900 ml-1" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
