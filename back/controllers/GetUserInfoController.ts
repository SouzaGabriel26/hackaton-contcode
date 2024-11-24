import { Request, Response } from "express";
import { prismaClient } from "../lib/prismaClient";

export async function GetUserInfoController(req: Request, res: Response) {
  const { userId } = req;

  const user = await prismaClient.users.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  res.status(200).send(user);
  return;
}
