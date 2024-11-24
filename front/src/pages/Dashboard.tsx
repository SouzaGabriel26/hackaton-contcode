import { useEffect, useState } from "react";
type BudgetItem = {
    id: number;
    budget_id: number;
    category: "ingredient" | "plate";
    name: string;
    description: string;
    value: number;
    quantity: number;
  };
  
  type Budget = {
    id: string;
    user_id: number;
    name: string;
    provided_budget: number;
    description: string;
    initial_date: string; // ISO string
    final_date: string; // ISO string
    created_at: string; // ISO string
    updated_at: string; // ISO string
    budget_items: BudgetItem[];
  };
  
const Dashboard = () => {
  const [budgetName, setBudgetName] = useState<string>("");
  const [budgetDesc, setBudgetDesc] = useState<string>("");
  const [budgetCost, setBudgetCost] = useState<number>(0);
  const [budgetItems, setbudgetItems] = useState<BudgetItem[]>([]);
  const [budgetIngredients, setbudgetIngredients] = useState<BudgetItem[]>([]);
  const [budgetPlates, setbudgetPlates] = useState<BudgetItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    function fetchData() {
      fetch("http://localhost:3000/budgets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data: Budget[]) => {
          setBudgetName(data[0].name);
          setBudgetDesc(data[0].description);
          setBudgetCost(data[0].provided_budget);
          console.log(data[0].budget_items);
          setbudgetItems(data[0].budget_items);
          setbudgetIngredients(
            budgetItems.filter(({category}) => category === "ingredient")
          );
          setbudgetPlates(
            budgetItems.filter(({category}) => category === "plate")
          );
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    fetchData();
  }, [budgetItems]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col items-center w-full p-5 bg-white text-darkRed">
      {/* Título do Orçamento */}
      <div className="w-full text-center mb-8">
        <h1 className="text-2xl font-semibold text-brightOrange">
          Nome do orçamento:
        </h1>
        <h1 className="font-bold text-5xl text-darkRed">{budgetName}</h1>
      </div>

      {/* Descrição do Projeto */}
      <div className="w-full text-center mb-10">
        <h2 className="text-xl font-medium text-brightOrange">
          Descrição do seu projeto:
        </h2>
        <h2 className="text-2xl text-gray-700">{budgetDesc}</h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-around w-full gap-6">
        {/* Card do Orçamento */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 flex flex-col items-center justify-center border  border-gray-200">
          <h2 className="text-lg font-bold text-brightOrange mb-4">
            Seu orçamento:
          </h2>
          <h2 className="text-3xl font-extrabold text-darkRed">R${budgetCost}</h2>
        </div>

        {/* Card dos Ingredientes */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 border border-gray-200">
          <h2 className="text-lg font-bold text-brightOrange mb-4 text-center">
            Ingredientes:
          </h2>
          <ul className="text-gray-700 space-y-3 overflow-y-auto max-h-64">
            {budgetIngredients.map((ingredient) => (
              <li key={ingredient.id} className="border-b border-gray-200 pb-3">
                <h3 className="text-sm font-semibold text-gray-600">Nome:</h3>
                <p className="text-base mb-2">{ingredient.name}</p>
                <h3 className="text-sm font-semibold text-gray-600">
                  Quantidade média:
                </h3>
                <p className="text-base mb-2">{ingredient.quantity}</p>
                <h3 className="text-sm font-semibold text-gray-600">
                  Preço total:
                </h3>
                <p className="text-base">R${ingredient.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pratos Principais */}
      <div className="w-full mt-10">
        <h1 className="text-2xl font-semibold text-center text-darkRed mb-5">
          Pratos principais
        </h1>
        <ul className="space-y-4 overflow-y-auto max-h-64 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
          {budgetPlates.map((plate) => (
            <li key={plate.id} className="border-b border-gray-200 pb-2">
              <h3 className="text-lg font-bold text-brightOrange mb-2">
                Nome:
              </h3>
              <p className="text-base mb-4 text-gray-700">{plate.name}</p>
              <h3 className="text-lg font-bold text-brightOrange mb-2">
                Preço:
              </h3>
              <p className="text-base text-gray-700">R${plate.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
