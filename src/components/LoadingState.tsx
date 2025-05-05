
import React from 'react';
import { BookOpen, PenLine, Search, BarChart, Clock } from 'lucide-react';

const LoadingState: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Analyzing your article...</h3>
          <p className="text-gray-500 mb-6">
            We're extracting information and gathering context about this content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow border flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-backstory-soft-blue flex items-center justify-center animate-pulse-slow">
              <Search className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse-slow mb-2"></div>
              <div className="h-3 w-32 bg-gray-100 rounded animate-pulse-slow"></div>
            </div>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow border flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-backstory-soft-green flex items-center justify-center animate-pulse-slow">
              <BookOpen className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse-slow mb-2"></div>
              <div className="h-3 w-36 bg-gray-100 rounded animate-pulse-slow"></div>
            </div>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow border flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-backstory-soft-orange flex items-center justify-center animate-pulse-slow">
              <PenLine className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse-slow mb-2"></div>
              <div className="h-3 w-40 bg-gray-100 rounded animate-pulse-slow"></div>
            </div>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow border flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-backstory-soft-yellow flex items-center justify-center animate-pulse-slow">
              <BarChart className="h-5 w-5 text-yellow-700" />
            </div>
            <div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse-slow mb-2"></div>
              <div className="h-3 w-28 bg-gray-100 rounded animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <Clock className="h-5 w-5 mr-2 text-gray-400" />
          <p className="text-sm text-gray-400">This usually takes 15-30 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
