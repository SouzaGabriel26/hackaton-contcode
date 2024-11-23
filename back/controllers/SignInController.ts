import { Request, Response } from "express";
import { z } from "zod";
import { prismaClient } from "../lib/prismaClient";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function SignInController(req: Request, res: Response) {
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

  const { email, password } = data;

  const emailExists = await prismaClient.users.findUnique({ where: { email } });
  if (!emailExists) {
    res.status(401).json({ error: "Credenciais inválidas." });
    return;
  }

  const passwordMatch = await bcrypt.compare(
    password,
    emailExists.passwordHash
  );
  if (!passwordMatch) {
    res.status(401).json({ error: "Credenciais inválidas." });
    return;
  }

  const accessToken = jwt.sign({ id: emailExists.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(200).json({ accessToken });
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
});
