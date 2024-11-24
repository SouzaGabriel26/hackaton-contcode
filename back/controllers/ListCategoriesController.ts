import { Request, Response } from "express";
import { prismaClient } from "../lib/prismaClient";

export async function ListCategoriesController(_req: Request, res: Response) {
  const categories = await prismaClient.categories.findMany();

  res.status(200).json(categories);
  return;
}
