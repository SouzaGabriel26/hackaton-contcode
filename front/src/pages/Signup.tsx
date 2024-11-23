import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {

  const [userInfos, setUserInfos] = useState<{
    email: string,
    password:string,
    name:string,
    businessName:string,
    categoryId: string,
    state: string
  }>({
    email: '',
    password: '',
    name: '',
    businessName: '',
    categoryId: '',
    state: '',
  })

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    setUserInfos({
      ...userInfos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    console.log(userInfos)
  }

  const states = [
    { label: "", value: "" },
    { label: "Acre", value: "AC" },
    { label: "Alagoas", value: "AL" },
    { label: "Amapá", value: "AP" },
    { label: "Amazonas", value: "AM" },
    { label: "Bahia", value: "BA" },
    { label: "Ceará", value: "CE" },
    { label: "Distrito Federal", value: "DF" },
    { label: "Espírito Santo", value: "ES" },
    { label: "Goiás", value: "GO" },
    { label: "Maranhão", value: "MA" },
    { label: "Mato Grosso", value: "MT" },
    { label: "Mato Grosso do Sul", value: "MS" },
    { label: "Minas Gerais", value: "MG" },
    { label: "Pará", value: "PA" },
    { label: "Paraíba", value: "PB" },
    { label: "Paraná", value: "PR" },
    { label: "Pernambuco", value: "PE" },
    { label: "Piauí", value: "PI" },
    { label: "Rio de Janeiro", value: "RJ" },
    { label: "Rio Grande do Norte", value: "RN" },
    { label: "Rio Grande do Sul", value: "RS" },
    { label: "Rondônia", value: "RO" },
    { label: "Roraima", value: "RR" },
    { label: "Santa Catarina", value: "SC" },
    { label: "São Paulo", value: "SP" },
    { label: "Sergipe", value: "SE" },
    { label: "Tocantins", value: "TO" },
  ];

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-darkRed mb-6">Registre-se em nosso App!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col p-3 items-center">
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-darkRed" htmlFor="email">
              Seu melhor e-mail:
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm"
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email aqui"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-darkRed" htmlFor="password">Senha:</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm"
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-darkRed" htmlFor="name">Seu nome:</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm"
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-darkRed" htmlFor="businessName">Nome da sua loja:</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm"
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Digite o nome do seu negócio"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-darkRed" htmlFor="categoryId">
              Selecione o tipo do seu restaurante:
            </label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm"
              name="categoryId"
              id="categoryId"
              required
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option className='text-darkRed font-semibold' value="hamburguer">Hamburgueria</option>
              <option className='text-darkRed font-semibold' value="pizza">Pizzaria</option>
              <option className='text-darkRed font-semibold' value="acai">Loja de Açaí</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-darkRed" htmlFor="state">Escolha seu estado:</label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm"
              name="state"
              id="stte"
              required
              onChange={handleInputChange}
            >
              {states.map((state) => (
                <option className='text-darkRed font-semibold' key={state.label} value={state.value}>{state.label}</option>
              ))}
            </select>
          </div>
          <button
            className="w-full py-2 px-4 bg-lightPink text-white rounded-md shadow hover:bg-lightRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3"
            type="submit"
          >
            Registrar
          </button>
        </form>
        <div className=' flex flex-row items-center justify-center'>
          <p>Já possui uma conta? <Link className='text-darkRed hover:underline' to= "/signin">Entrar.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
