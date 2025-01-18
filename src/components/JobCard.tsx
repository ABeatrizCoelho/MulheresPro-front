import React from 'react';
import { Job } from '../hooks/useJobs';

interface JobCardProps extends Job {
    onClick: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ id, titulo, empresa, localizacao, onClick }) => {
    return (
        <div
            className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={onClick}
        >
            <h2 className="text-xl font-semibold text-purple-800 mb-2">{titulo}</h2>
            <p className="text-purple-600 mb-2">{empresa}</p>
            <p className="text-purple-500 text-sm">{localizacao}</p>
        </div>
    );
};

