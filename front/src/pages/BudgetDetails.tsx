import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { httpClient } from "../lib/httpClient";
import { Budget } from "../types/Budget";

const BudgetDetails = () => {
  const [lastBudget, setLastBudget] = useState<Budget>();
  const [loading, setIsLoading] = useState<boolean>(true);

  const params = useParams();


  useEffect(() => {
    async function fetchBudgets() {
      try {
        const { data } = await httpClient.get<Budget>(`/budgets/${params.id}`);

        if (data) {
          setLastBudget(data);
        }
      } catch {
        toast.error("Erro ao buscar orçamentos!")
      } finally {
        setIsLoading(false);
      }
    }

    fetchBudgets();
  }, [params.id]);

  const budgetIngredients = lastBudget?.budgetItems.filter(
    (item) => item.category === "ingredient"
  ) ?? [];

  const budgetPlates = lastBudget?.budgetItems.filter(
    (item) => item.category === "plate"
  ) ?? [];

  if (loading) {
    return <div>Carregando...</div>;
  }
  if (!lastBudget) {
    return <div>Sem orçamentos disponiveis</div>;
  }

  return (
    <div className="flex flex-col items-center w-full p-5 bg-white text-darkRed">
      <div className="w-full mb-2">
        <h1>Orçamento feito em:</h1>
        <span className="block text-sm">
          {lastBudget.createdAt.split("T")[0]}
        </span>
      </div>

      <div className="w-full text-center mb-8">
        <h2 className="text-2xl font-semibold text-brightOrange">
          Nome do orçamento:
        </h2>
        <h1 className="font-bold text-5xl text-darkRed">{lastBudget.name}</h1>
      </div>

      <div className="w-full text-center mb-10">
        <h2 className="text-xl font-medium text-brightOrange">
          Descrição do seu projeto:
        </h2>
        <h2 className="text-2xl text-gray-700">{lastBudget.description}</h2>
      </div>

      <div className="flex flex-wrap justify-around w-full gap-6">
        <div className={`
          bg-white
          shadow-lg
          rounded-lg
          p-6
          w-full
          md:w-1/4
          flex
          gap-4
          flex-col
          items-start
          justify-center
          border
          border-gray-200
        `}>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-brightOrange">
              Preço de produção estimado:
            </h2>
            <h2 className="text-lg font-extrabold text-darkRed">
              R$
              {budgetPlates[0].unitProductionPrice}
            </h2>
          </div>

          <div className="flex flex-col gap-2 justify-start">
            <h2 className="text-lg font-bold text-brightOrange">
              Preço de venda estimado:
            </h2>
            <h2 className="text-lg font-extrabold text-darkRed">
              R$
              {budgetPlates[0].unitSellingPrice}
            </h2>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/4 border border-gray-200">
          <h2 className="text-lg font-bold text-brightOrange mb-4 text-center">
            Ingredientes:
          </h2>
          <ul className="text-gray-700 space-y-3 overflow-y-auto max-h-64">
            {budgetIngredients.map((ingredient) => (
              <li key={ingredient.id} className="border-b border-gray-200 pb-3">
                <h3 className="text-sm font-semibold text-gray-600">Nome:</h3>
                <p className="text-sm mb-2">{ingredient.name}</p>

                <h3 className="text-sm font-semibold text-gray-600">Descrição:</h3>
                <p className="text-sm mb-2">{ingredient.description}</p>

                <h3 className="text-sm font-semibold text-gray-600">
                  Preço total:
                </h3>
                <p className="text-sm">R${ingredient.unitProductionPrice.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full mt-10">
        <h1 className="text-2xl font-semibold text-center text-darkRed mb-5">
          Prato principal
        </h1>
        <ul className="space-y-4 overflow-y-auto max-h-64 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
          {budgetPlates.map((plate) => (
            <li key={plate.id} className="border-b border-gray-200 pb-2">
              <h3 className="text-lg font-bold text-brightOrange mb-2">
                Nome:
              </h3>
              <p className="text-base mb-4 text-gray-700">{plate.name}</p>

              <h3 className="text-lg font-bold text-brightOrange mb-2">
                Descrição:
              </h3>
              <p className="text-base mb-4 text-gray-700">{plate.description}</p>

              <h3 className="text-lg font-bold text-brightOrange mb-2">
                Preço estimado de produção por unidade:
              </h3>
              <p className="text-base mb-4 text-gray-700">R$ {plate.unitProductionPrice.toFixed(2)}</p>

              <h3 className="text-lg font-bold text-brightOrange mb-2">
                Preço estimado de venda (com margem de lucro de 50%):
              </h3>
              <p className="text-base text-gray-700">R$ {plate.unitSellingPrice.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetDetails;
