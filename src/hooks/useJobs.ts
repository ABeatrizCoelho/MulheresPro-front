import { useState, useEffect } from 'react';

export interface Job {
    id: number;
    titulo: string;
    empresa: string;
    localizacao: string;
    descricao: string;
}


export function useJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/vagas');
                if (!response.ok) {
                    throw new Error('Falha na requisição');
                }
                const data = await response.json();
                console.info(data)
                setJobs(data);
            } catch (err) {
                setError('Erro ao carregar vagas');
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return { jobs, loading, error };
}

