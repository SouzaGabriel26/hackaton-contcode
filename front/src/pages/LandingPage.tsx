import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <nav className="flex justify-center gap-5 pr-3 pt-3 pb-3 text-white font-bold bg-brightOrange xl:justify-end fixed top-0 w-full z-10 drop-shadow-md">
        <Link to="/signin">Entrar</Link>
        <Link to="/signup">Criar conta</Link> 
      </nav>

      <div className="bg-gray-100 lg:h-[95vh] sm:h-min-screen flex flex-col justify-center items-center pt-20">
        <header className="text-center mb-16 px-4 sm:px-8 w-full pt-5">
          <h1 className="text-2xl sm:text-4xl font-bold text-darkRed mb-4">
            Seu Orçamento Gastronômico na Palma da Mão
          </h1>
          <p className="text-lg text-gray-600 ">
            Simples, rápido e ideal para quem está começando na área de
            gastronomia. Receba as melhores recomendações e valores
            personalizados para o seu projeto!
          </p>
        </header>

        <main className="bg-white shadow-md rounded-lg w-full max-w-3xl p-8 mx-4 sm:mx-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-lightRed mb-6">
            Como Funciona
          </h2>
          <ol className="list-decimal list-inside text-gray-600 mb-8">
            <li>
              Preencha os dados básicos do seu projeto, como o nome dele e tipo de comércio.
            </li>
            <li>Informe sua região para receber custos relacionados ao preço local.</li>
            <li>
              Receba um orçamento detalhado com as melhores recomendações e
              custos estimados.
            </li>
          </ol>

          <h3 className="text-lg sm:text-xl font-semibold text-lightRed mb-4">
            Por que escolher nosso serviço?
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Ideal para iniciantes na área de gastronomia.</li>
            <li>Análise personalizada e baseada em dados reais.</li>
            <li>Rápido, simples e sem complicações.</li>
          </ul>

          <div className="text-center py-5">
            <Link to="/signin" className="bg-lightPink text-white font-bold py-3 px-6 rounded-lg hover:bg-lightRed transition">
            Comece agora!
            </Link>
          </div>
        </main>
      </div>

      <footer className="text-center py-3 text-gray-500 flex justify-center items-center">
          <p>
            &copy; 2024 Seu Orçamento Gastronômico. Todos os direitos
            reservados.
          </p>
      </footer>
    </div>
  );
};

export default LandingPage;
