import React from 'react';
import { JobListings } from './pages/JobListings';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-purple-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">EmpoderaJobs</h1>
          <p className="text-sm">Impulsionando carreiras femininas na tecnologia</p>
        </div>
      </header>
      <main>
        <JobListings />
      </main>
      <footer className="bg-purple-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 EmpoderaJobs. Todos os direitos reservados.</p>
          <p className="mt-2">Juntas, estamos transformando o mundo da tecnologia!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

