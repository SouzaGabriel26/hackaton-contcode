import { Request, Response } from "express";
import { z } from "zod";
import { prismaClient } from "../lib/prismaClient";
import { pizzariaData, recipesNames } from "../utils/averagePrices";

// 50%
const PROFIT_MARGIN = 1.5;

type BudgetItem = {
  name: string;
  category: "ingredient" | "plate";
  unitProductionPrice: number;
  unitSellingPrice: number;
  profitMargin: number;
  description: string;
};

export async function PostBudgetController(req: Request, res: Response) {
  if (!req?.body) {
    res.status(400).json({ error: "Corpo da requisição não pode ser vazio." });
    return;
  }

  const { body, userId } = req;

  const { error, data } = schema.safeParse(body);

  if (error) {
    res.status(400).json({ error: error.errors });
    return;
  }

  const { budget_item } = data;

  const user = await prismaClient.users.findUnique({ where: { id: userId } });
  if (!user) {
    res.status(404).json({ error: "Usuário não encontrado." });
    return;
  }

  const budgetItems: Array<BudgetItem> = [];

  const recipe = pizzariaData.states[user.state];

  const ingredients = pizzariaData.recipes.find(
    (recipe) =>
      recipe.name.toLocaleLowerCase() === budget_item.toLocaleLowerCase()
  ).ingredients;

  const totalUnitCostPerRecipe = recipe.ingredients.reduce((acc, current) => {
    const ingredientQuantity = ingredients.find(
      (ingredient) =>
        ingredient.name.toLocaleLowerCase() === current.name.toLocaleLowerCase()
    );

    if (!ingredientQuantity) return acc;
    const ingredientPriceForUniqueRecipe =
      current.average_price * ingredientQuantity.quantity;

    budgetItems.push({
      name: current.name,
      unitProductionPrice: ingredientPriceForUniqueRecipe,
      unitSellingPrice: ingredientPriceForUniqueRecipe * PROFIT_MARGIN,
      category: "ingredient",
      profitMargin: PROFIT_MARGIN,
      description: `Custo unitário de ${current.name} para a receita de ${budget_item}`,
    });

    return acc + ingredientPriceForUniqueRecipe;
  }, 0);

  budgetItems.push({
    name: budget_item,
    unitProductionPrice: totalUnitCostPerRecipe,
    unitSellingPrice: totalUnitCostPerRecipe * PROFIT_MARGIN,
    category: "plate",
    profitMargin: PROFIT_MARGIN,
    description: `Custo unitário de produção da receita de ${budget_item}`,
  });

  await prismaClient.budgets.create({
    data: {
      userId,
      name: data.name,
      description: data.description,
      providedBudget: data.provided_budget,
      BudgetItems: {
        createMany: {
          data: budgetItems,
        },
      },
    },
  });

  res.status(201).json({ message: "Orçamento criado com sucesso." });
  return;
}

const schema = z.object({
  name: z.string({
    required_error: 'O campo "name" é obrigatório',
  }),
  provided_budget: z
    .number({
      required_error: 'O campo "provided_budget" é obrigatório',
    })
    .positive({
      message: 'O campo "provided_budget" deve ser um número positivo',
    }),
  description: z.string({
    required_error: 'O campo "description" é obrigatório',
  }),
  budget_item: z
    .string({
      required_error: 'O campo "budget_item" é obrigatório',
    })
    .refine((value) => recipesNames.includes(value), {
      message: 'O campo "budget_item" deve ser uma receita válida',
    }),
});
