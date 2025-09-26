// src/components/BottomNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShieldAlert, FilePenLine, User } from 'lucide-react';

const navItems = [
  { path: '/', name: 'Home', icon: Home },
  { path: '/alerts', name: 'Alerts', icon: ShieldAlert },
  { path: '/report', name: 'Report', icon: FilePenLine },
  { path: '/profile', name: 'Profile', icon: User },
];

const BottomNav = () => {
    const linkClasses = "flex flex-col items-center justify-center w-full pt-2 pb-1 text-text-secondary-light transition-colors";
    const activeLinkClasses = "text-primary-blue";

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-surface-light border-t border-gray-200 flex justify-around z-30">
            {navItems.map(item => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                    end={item.path === '/'}
                >
                    <item.icon size={24} />
                    <span className="text-xs mt-1">{item.name}</span>
                </NavLink>
            ))}
        </nav>
    );
}

export default BottomNav;