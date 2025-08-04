import React from 'react';
import { Loader2, Code, Database, Brain } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="animate-bounce delay-0">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
          <div className="animate-bounce delay-150">
            <Database className="w-8 h-8 text-green-400" />
          </div>
          <div className="animate-bounce delay-300">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="relative mb-6">
          <Loader2 className="w-12 h-12 text-white animate-spin mx-auto" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-t-blue-400 rounded-full animate-spin mx-auto"></div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-white mb-2 font-poppins">Loading Portfolio</h2>
        <p className="text-gray-300 font-inter">Preparing something amazing...</p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;