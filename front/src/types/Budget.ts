export type BudgetItem = {
  id: string;
  description: string;
  name: string;
  profitMargin: number;
  category: string;
  unitProductionPrice: number;
  unitSellingPrice: number;
};

export type Budget = {
  id: string;
  userId: string;
  name: string;
  providedBudget: number;
  description: string;
  createdAt: string;
  budgetItems: BudgetItem[];
};
