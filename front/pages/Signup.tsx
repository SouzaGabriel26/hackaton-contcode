import React, {useState} from 'react'

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

  const handleInputChange = (e:any) => {
    setUserInfos({
      ...userInfos,
      [e.target.name]: e.target.value
    })
  }

  const states = [
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
        <h2 className="text-2xl font-semibold text-center mb-6">Registre-se em nosso App!</h2>
        <form className="flex flex-col p-3 items-center">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Seu melhor e-mail:
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email aqui"
              
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Senha:</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Seu nome:</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="businessName">Nome da sua loja:</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Digite o nome do seu negócio"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="categoryId">
              Selecione o tipo do seu restaurante:
            </label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="categoryId"
              id="categoryId"
              onChange={handleInputChange}
            >
              <option value="hamburguer">Hamburgueria</option>
              <option value="pizza">Pizzaria</option>
              <option value="acai">Loja de Açaí</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="state">Escolha seu estado:</label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="state"
              id="stte"
              onChange={handleInputChange}
            >
              {states.map((state) => (
                <option key={state.label} value={state.value}>{state.label}</option>
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
      </div>
    </div>
  );
};

export default Signup;
