import React from 'react';

interface JobCardProps {
    id: number;
    title: string;
    company: string;
    location: string;
    onClick: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ id, title, company, location, onClick }) => {
    return (
        <div
            className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={onClick}
        >
            <h2 className="text-xl font-semibold text-purple-800 mb-2">{title}</h2>
            <p className="text-purple-600 mb-2">{company}</p>
            <p className="text-purple-500 text-sm">{location}</p>
        </div>
    );
};

