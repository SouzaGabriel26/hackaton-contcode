import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { httpClient } from "../lib/httpClient";
import { Budget } from "../types/Budget";

const HistoryPage: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBudgets() {
      try {
        const { data } = await httpClient.get<Budget[]>('/budgets');

        if (data.length > 0) {
          setBudgets(data);
        }
      } catch {
        toast.error("Erro ao buscar orçamentos!")
      } finally {
        setIsLoading(false);
      }
    }

    fetchBudgets();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-darkRed mb-6">Histórico de Orçamentos</h2>
      <div className="space-y-4">
        {budgets.map((budget) => (
          <Link
            to={`/budget/${budget.id}`}
            key={budget.id}
            className="block"
          >
            <div
              className="bg-white p-4 rounded-lg shadow-lg space-y-2 transition-all text-darkRed
              hover:bg-lightRed hover:text-white hover:shadow-2xl
              active:bg-lightRed active:text-white active:shadow-2xl"
            >
              <h3 className="text-xl font-semibold  transition-all">
                {budget.name}
              </h3>

              <p className="transition-all">
                <FaCalendarAlt className="inline mr-2" />
                {budget.createdAt}
              </p>

              <p className="text-lg font-bold transition-all">
                Descrição:
                <span className="text-base block">
                  {budget.description}
                </span>
              </p>

              <p className="text-lg font-bold transition-all">
                Orçamento inicial fornecido:
                <span className="text-base block">
                  R$ {budget.providedBudget}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
