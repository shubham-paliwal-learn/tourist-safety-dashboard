// src/components/ProfileCard.jsx
import React from 'react';
import { User, Globe, Phone } from 'lucide-react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-neutral-surface-light p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-text-secondary-light flex items-center"><Globe size={14} className="mr-2" />{user.nationality}</p>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-3">Emergency Contacts</h4>
        <ul className="space-y-3">
          {user.emergencyContacts.map(contact => (
            <li key={contact.name} className="flex items-center justify-between">
              <span className="text-sm">{contact.name}</span>
              <a href={`tel:${contact.phone}`} className="flex items-center text-sm text-primary-blue hover:underline">
                <Phone size={14} className="mr-2" />
                {contact.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;