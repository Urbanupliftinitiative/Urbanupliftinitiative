import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const IntelligenceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              AI-Powered <br />Patient Monitoring
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              OnePermit connects medication tracking, vital monitoring, and appointment management 
              into one cohesive system. The result is greater visibility, improved adherence, and 
              better outcomes across every fertility journey.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Today's Tasks</span>
                      <span className="text-xs text-green-600 font-semibold">95% Complete</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm text-gray-700">Morning Medication</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm text-gray-700">Vitals Logged</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Evening Injection Due</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  <div className="absolute -top-32 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    Medication Tracking
                  </div>
                  <div className="absolute -top-16 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    Vital Monitoring
                  </div>
                  <div className="absolute top-16 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    AI Risk Detection
                  </div>
                  <div className="absolute top-32 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                    Appointment Sync
                  </div>
                </div>
              </div>

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