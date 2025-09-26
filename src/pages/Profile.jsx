// src/pages/Profile.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProfileCard from '../components/ProfileCard';
import DigitalIDBadge from '../components/DigitalIDBadge';
import { Bell, Lock, LogOut } from 'lucide-react';

const Profile = () => {
    const { user } = useAppContext();

    const settings = [
        { name: 'Notification Preferences', icon: Bell },
        { name: 'Privacy Settings', icon: Lock },
        { name: 'Logout', icon: LogOut, danger: true },
    ];
    
    return (
        <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold">Profile & Settings</h2>
            
            <ProfileCard user={user} />
            <DigitalIDBadge isVerified={user.isVerified} />

            <div className="bg-neutral-surface-light p-4 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2 px-2">Settings</h4>
              <ul className="divide-y divide-gray-200">
                {settings.map(item => (
                  <li key={item.name} className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer ${item.danger ? 'text-danger-red' : ''}`}>
                    <div className="flex items-center">
                      <item.icon size={20} className="mr-3" />
                      <span>{item.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    );
};

export default Profile;