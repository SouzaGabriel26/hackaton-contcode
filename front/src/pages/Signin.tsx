import { AxiosError } from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BackToHomeButton } from "../components/BackToHomeButton";
import { useAuthContext } from "../context/AuthContext";
import { httpClient } from "../lib/httpClient";

const SignIn: React.FC = () => {
  const { signIn } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);

      const { data } = await httpClient.post<{ accessToken: string }>('/sign-in', { email, password });

      toast.success('Usuário logado com sucesso!');

      signIn(data.accessToken);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data.error;
        if (Array.isArray(errorResponse)) {
          toast.error(errorResponse[0].message);
        }

        toast.error(errorResponse);
      } else {
        toast.error('Ocorreu um erro ao entrar na conta.')
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <BackToHomeButton className="absolute top-4 left-4 hover:scale-110 transition-all" />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className=" text-darkRed text-2xl font-semibold text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-darkRed "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-lightRed sm:text-sm"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-darkRed "
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-lightRed sm:text-sm"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full disabled:opacity-50 disabled:pointer-events-none py-2 px-4 bg-lightPink text-white rounded-md shadow hover:bg-lightRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link className="text-darkRed hover:underline" to="/signup">Registre-se aqui</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
