import { Request, Response } from "express";
import { prismaClient } from "../lib/prismaClient";
import { BudgetItem } from "./ListBudgetsController";

export async function GetBudgetByIdController(req: Request, res: Response) {
  const budgetId = req.params.id;

  const budget = await prismaClient.budgets.findUnique({
    where: { id: budgetId },
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

  const formattedBudgets = {
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
  };

  res.status(200).json(formattedBudgets);
  return;
}
