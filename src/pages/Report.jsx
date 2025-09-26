// src/pages/Report.jsx
import React from 'react';
import ReportForm from '../components/ReportForm';

const Report = () => {
    return (
        <div className="p-4 md:p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Report an Incident</h2>
            <p className="text-text-secondary-light mb-6">
              Your report helps keep the community safe. All reports are logged securely on the blockchain.
            </p>
            <div className="bg-neutral-surface-light p-6 rounded-lg shadow-md">
              <ReportForm />
            </div>
        </div>
    );
};

export default Report;