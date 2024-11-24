import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Para navegação
import { FaCalendarAlt } from "react-icons/fa"; // Ícone para data

interface Budget {
  id: string;
  name: string;
  date: string;
  price: string;
}

const HistoryPage: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([
    { id: '1', name: 'Projeto A', date: '01/01/2024', price: 'R$ 2500,00' },
    { id: '2', name: 'Projeto B', date: '15/02/2024', price: 'R$ 4200,00' },
    { id: '3', name: 'Projeto C', date: '20/03/2024', price: 'R$ 1800,00' }
  ]);

  useEffect(() => {
    // Aqui você faria a requisição para o backend
    // fetch('http://localhost:3001/api/budgets')
    //   .then((response) => response.json())
    //   .then((data) => setBudgets(data))
    //   .catch((error) => console.error('Erro ao buscar orçamentos:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-darkRed mb-6">Histórico de Orçamentos</h2>
      <div className="space-y-4">
        {budgets.map((budget) => (
          <Link
            to={`/budget/${budget.id}`} // Link para redirecionar para o orçamento específico
            key={budget.id}
            className="block"
          >
            <div
              className="bg-white p-4 rounded-lg shadow-lg mb-4 transition-all
              hover:bg-lightRed hover:text-white hover:shadow-2xl
              active:bg-lightRed active:text-white active:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-darkRed transition-all">
                {budget.name}
              </h3>
              <p className="text-gray-500 transition-all">
                <FaCalendarAlt className="inline mr-2" />
                {budget.date}
              </p>
              <p className="text-lg font-bold text-darkRed transition-all">
                {budget.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;