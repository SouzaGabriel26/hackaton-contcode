import { Request, Response } from "express";
import { prismaClient } from "../lib/prismaClient";

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
  createdAt: Date;
  budgetItems: BudgetItem[];
};

export async function ListBudgetsController(req: Request, res: Response) {
  const { userId } = req;

  const budgets = await prismaClient.budgets.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      userId: true,
      name: true,
      providedBudget: true,
      description: true,
      createdAt: true,
      BudgetItems: {
        select: {
          id: true,
          description: true,
          name: true,
          profitMargin: true,
          category: true,
          unitProductionPrice: true,
          unitSellingPrice: true,
        },
      },
    },
  });

  const formattedBudgets = budgets.map<Budget>((budget) => ({
    id: budget.id,
    userId: budget.userId,
    name: budget.name,
    description: budget.description,
    providedBudget: budget.providedBudget,
    createdAt: budget.createdAt,
    budgetItems: budget.BudgetItems.map<BudgetItem>((budgetItem) => ({
      id: budgetItem.id,
      category: budgetItem.category,
      description: budgetItem.description,
      name: budgetItem.name,
      profitMargin: budgetItem.profitMargin,
      unitProductionPrice: budgetItem.unitProductionPrice,
      unitSellingPrice: budgetItem.unitSellingPrice,
    })),
  }));

  res.status(200).json(formattedBudgets);
  return;
}
