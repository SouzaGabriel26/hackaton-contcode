import { z } from "zod";
import { prismaClient } from "../lib/prismaClient";

import bcrypt from "bcryptjs";
import { Request, Response } from "express";

export async function SignUpController(req: Request, res: Response) {
  if (!req?.body) {
    res.status(400).json({ error: "Corpo da requisição não pode ser vazio." });
    return;
  }

  const { body } = req;

  const { data, error } = schema.safeParse(body);

  if (error) {
    res.status(400).json({ error: error.issues });
    return;
  }

  const { name, email, business_name, password, category_id, state } = data;

  const emailAlreadyExists = await prismaClient.users.findUnique({
    where: { email },
  });

  if (emailAlreadyExists) {
    res.status(409).json({ error: `Email "${email}" já cadastrado.` });
    return;
  }

  const categoryExists = await prismaClient.categories.findUnique({
    where: { id: category_id },
  });

  if (!categoryExists) {
    res
      .status(400)
      .json({ error: `Categoria com id "${category_id}" não encontrada.` });
    return;
  }

  const SALT = 8;
  const passwordHash = await bcrypt.hash(password, SALT);

  await prismaClient.users.create({
    data: {
      name,
      email,
      businessName: business_name,
      passwordHash,
      state,
      categoryId: category_id,
    },
  });

  res.status(201).json({ message: "Usuário criado com sucesso." });
  return;
}

const schema = z.object({
  email: z
    .string({
      required_error: 'O campo "email" é obrigatório',
    })
    .email({
      message: 'O campo "email" deve ser um email válido',
    }),
  password: z
    .string({
      required_error: 'O campo "senha" é obrigatório',
    })
    .min(6, {
      message: 'O campo "senha" deve ter no mínimo 6 caracteres',
    }),
  name: z
    .string({
      required_error: 'O campo "nome" é obrigatório',
    })
    .min(3, {
      message: 'O campo "nome" deve ter no mínimo 3 caracteres',
    }),
  business_name: z
    .string({
      required_error: 'O campo "nome da empresa" é obrigatório',
    })
    .min(3, {
      message: 'O campo "nome da empresa" deve ter no mínimo 3 caracteres',
    }),
  state: z
    .string({
      required_error: 'O campo "estado" é obrigatório',
    })
    .min(2, {
      message: 'O campo "estado" deve ter no mínimo 2 caracteres',
    }),
  category_id: z
    .string({
      required_error: 'O campo "categoria" é obrigatório',
    })
    .uuid({
      message: 'O campo "categoria" precisa ser um UUID válido',
    }),
});
