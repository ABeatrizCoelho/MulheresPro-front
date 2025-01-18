import React, { useState } from 'react';
import { Popup } from './Popup';
import { Job } from '../hooks/useJobs';

interface JobModalProps {
  job: Job
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed inset-0 bg-purple-900 bg-opacity-50 flex items-center justify-center p-4 z-40">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">{job.titulo}</h2>
        <p className="text-purple-600 mb-2">{job.empresa}</p>
        <p className="text-purple-500 mb-4">{job.localizacao}</p>
        <div className="text-gray-700 mb-6">{job.descricao}</div>
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Fechar
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowPopup(true)}
          >
            Contatar Empresa
          </button>
        </div>
        {showPopup && (
          <Popup
            message="Funcionalidade em desenvolvimento. Em breve você poderá entrar em contato diretamente com as empresas!"
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
    </div>
  );
};

