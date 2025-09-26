// src/pages/Home.jsx
import React from 'react';
import MapViewPlaceholder from '../components/MapViewPlaceholder';

const Home = () => {
    return (
        <div className="h-full w-full flex flex-col p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-4">Live Map</h2>
            <div className="flex-grow">
                <MapViewPlaceholder />
            </div>
        </div>
    );
};

export default Home;