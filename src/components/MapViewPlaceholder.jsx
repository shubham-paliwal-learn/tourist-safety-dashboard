// src/components/MapViewPlaceholder.jsx
import React from 'react';
import { MapPin, User as UserIcon } from 'lucide-react';

const MapViewPlaceholder = () => {
  return (
    <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
      {/* Fake Map SVG Background */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d5db" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="5,5"/>
        <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="5,5"/>
      </svg>
      
      {/* Overlay Elements */}
      <div className="absolute inset-0">
        {/* User's Location */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <UserIcon className="w-8 h-8 text-white bg-primary-blue rounded-full p-1 mx-auto"/>
            <span className="text-xs font-semibold bg-white/70 px-2 py-1 rounded-md mt-1 block">You</span>
        </div>

        {/* Geofenced Safe Zone */}
        <div className="absolute top-[20%] left-[15%] w-1/4 h-1/4 bg-safety-green/20 border-2 border-dashed border-safety-green rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-safety-green">Safe Zone</span>
        </div>

        {/* Geofenced Unsafe Zone */}
        <div className="absolute bottom-[10%] right-[10%] w-1/3 h-1/3 bg-danger-red/20 border-2 border-dashed border-danger-red rounded-lg flex items-center justify-center">
             <span className="text-xs font-bold text-danger-red">Restricted Area</span>
        </div>
        
        {/* Incident Pin */}
        <div className="absolute top-[15%] right-[20%] text-center">
            <MapPin className="w-8 h-8 text-warning-amber fill-current" />
            <span className="text-xs font-semibold bg-white/70 px-2 py-1 rounded-md mt-1 block">Theft Report</span>
        </div>
      </div>
    </div>
  );
};

export default MapViewPlaceholder;