import React, { useState } from 'react';
import { useJobs } from '../hooks/useJobs';
import { JobCard } from '../components/JobCard';
import { JobModal } from '../components/JobModal';

export const JobListings: React.FC = () => {
    const { jobs, loading, error } = useJobs();
    const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

    if (loading) {
        return <div className="text-center p-8 text-purple-600">Carregando oportunidades...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-2 text-center text-purple-800">Oportunidades para Mulheres</h1>
            <p className="text-xl text-center mb-8 text-purple-600">Conectando talentos femininos a empresas inclusivas</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        {...job}
                        onClick={() => setSelectedJob(job)}
                    />
                ))}
            </div>
            {selectedJob && (
                <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
        </div>
    );
};

