import { useState, useEffect } from 'react';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
}

const mockJobs: Job[] = [
    {
        id: 1,
        title: "Engenheira de Software Sênior",
        company: "TechWomen",
        location: "São Paulo, SP",
        description: "Procuramos uma engenheira de software sênior para liderar nossa equipe de desenvolvimento. Valorizamos a diversidade e oferecemos um ambiente de trabalho inclusivo."
    },
    {
        id: 2,
        title: "Analista de Dados",
        company: "DataDivas",
        location: "Rio de Janeiro, RJ",
        description: "Estamos em busca de uma analista de dados apaixonada por transformar informações em insights. Oferecemos mentoria e programas de desenvolvimento de carreira para mulheres."
    },
    {
        id: 3,
        title: "UX Designer",
        company: "InclusiveTech",
        location: "Belo Horizonte, MG",
        description: "Procuramos uma UX Designer criativa para projetar interfaces inclusivas e acessíveis. Ambiente de trabalho flexível e apoio à maternidade."
    },
    {
        id: 4,
        title: "Gerente de Projetos de TI",
        company: "WomenLead",
        location: "Porto Alegre, RS",
        description: "Oportunidade para uma gerente de projetos experiente liderar iniciativas inovadoras. Oferecemos programas de liderança para mulheres e equilíbrio entre trabalho e vida pessoal."
    },
    {
        id: 5,
        title: "Desenvolvedora Frontend",
        company: "CodeQueens",
        location: "Recife, PE",
        description: "Buscamos uma desenvolvedora frontend apaixonada por criar interfaces intuitivas e responsivas. Ambiente de trabalho remoto e flexível, ideal para mães que trabalham."
    }
];

export function useJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setJobs(mockJobs);
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

