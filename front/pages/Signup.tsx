const Signup = () => {
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
    <>
      <div className="flex flex-col items-center p-5">
        <h2>Registre-se em nosso App!</h2>
        <form className="flex flex-col p-5 items-center">
          <label className="" htmlFor="email">
            Seu melhor e-mail:
          </label>
          <input
            className="border-2 border-solid rounded-2xl text-center"
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email aqui"
          />
          <label htmlFor="password">Senha:</label>
          <input
            className="border-2 border-solid rounded-2xl text-center"
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <label htmlFor="name">Seu nome:</label>
          <input
            className="border-2 border-solid rounded-2xl text-center"
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
          />
          <label htmlFor="storeName">Nome da sua loja:</label>
          <input
            className="border-2 border-solid rounded-2xl text-center"
            type="text"
            id="storeName"
            name="storeName"
            placeholder="Digite seu nome"
          />
          <label htmlFor="category_id">
            Selecione o tipo do seu restaurante:
          </label>
          <select
            className="border-2 border-solid rounded-2xl text-center"
            name="category_id"
            id="category_id"
          >
            <option value="hamburguer">Hamburgueria</option>
            <option value="pizza">Pizzaria</option>
            <option value="acai">Loja de Açaí</option>
          </select>
          <label htmlFor="state">Escolha seu estado:</label>
          <select
            className="border-2 border-solid rounded-2xl text-center"
            name="state"
            id="stte"
          >
            {states.map((state) => (
              <option value={state.value}>{state.label}</option>
            ))}
          </select>
          <button
            className="bg-lightPink rounded-lg py-2 px-5 mt-3"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
