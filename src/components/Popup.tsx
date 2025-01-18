import React from 'react';

interface PopupProps {
    message: string;
    onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <p className="text-purple-800 text-lg mb-4">{message}</p>
                <button
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full"
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

