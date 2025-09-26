// src/components/HeaderBar.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Bell } from 'lucide-react';

const HeaderBar = () => {
    const { user, alerts } = useAppContext();
    const unreadAlerts = alerts.length > 0;

    return (
        <header className="hidden md:flex bg-neutral-surface-light shadow-sm p-4 items-center justify-between sticky top-0 z-30">
            <div>
                <h1 className="text-xl font-bold text-text-primary-light">Safety Dashboard</h1>
                <p className="text-sm text-text-secondary-light">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <Bell className="text-text-secondary-light" />
                    {unreadAlerts && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-danger-red"></span>
                        </span>
                    )}
                </div>
                <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0)}
                </div>
            </div>
        </header>
    );
}

export default HeaderBar;