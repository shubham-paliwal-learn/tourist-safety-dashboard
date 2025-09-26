// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShieldAlert, FilePenLine, User } from 'lucide-react';

const navItems = [
  { path: '/', name: 'Home', icon: Home },
  { path: '/alerts', name: 'Alerts', icon: ShieldAlert },
  { path: '/report', name: 'Report', icon: FilePenLine },
  { path: '/profile', name: 'Profile', icon: User },
];

const Sidebar = () => {
  const linkClasses = "flex items-center px-4 py-3 text-text-secondary-dark hover:bg-primary-blue hover:text-white rounded-lg transition-colors";
  const activeLinkClasses = "bg-primary-blue text-white";

  return (
    <aside className="hidden md:flex flex-col w-64 bg-neutral-surface-dark text-white p-4">
      <div className="text-2xl font-bold mb-10 px-2">SafeTourist</div>
      <nav className="flex flex-col space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
            end={item.path === '/'}
          >
            <item.icon className="mr-3" size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;