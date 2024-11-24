import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

type BudgetProps = {
  budgetName: string,
  budgetDescription: string,
  budgetAmount: number,
  selectedProduct: string,
  productQuantity: string
}
const Create: React.FC = () => {
  const [budgetObject, setBudgetObject] = useState<BudgetProps>({
    budgetName: '',
    budgetDescription: '',
    budgetAmount: 0,
    selectedProduct: '',
    productQuantity: ''
  })

  const { user } = useAuthContext();
  if (!user) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    setBudgetObject({
      ...budgetObject,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(budgetObject)

  }

  const conditionalForm = () => {
    if (user.category.name === 'Hamburgueria') {
      return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-center text-darkRed mb-6">Faça já um orçamento para a sua hamburgueria!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col p-3 items-center">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="budgetName">Nome do seu orçamento:</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="text" id="budgetName" name="budgetName" placeholder="Identifique seu orçamento" required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="budgetDescription">Descrição do orçamento:</label>
              <textarea onChange={handleInputChange} className="mt-1 h-24 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" id="budgetDescription" name="budgetDescription" placeholder="Fale mais sobre seu orçamento." required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="budgetAmount">{`Valor do seu orçamento (mensal):`}</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="number" id="budgetAmount" name="budgetAmount" placeholder="Digite o valor disponível para esse orçamento." required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="selectedProduct">Selecione o produto a ser orçado:</label>
              <select onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" name="selectedProduct" id="selectedProduct" required>
                <option className='text-darkRed font-semibold' value=""></option>
                <option className='text-darkRed font-semibold' value="cheeseburguer">{`Chesseburguer: Carne, Queijo, Tomate e Alface`}</option>
                <option className='text-darkRed font-semibold' value="baconCheeseburguer">{`Cheeseburguer com bacon`}</option>
                <option className='text-darkRed font-semibold' value="vegan">{`Vegetariano: Hamburguer de soja`}</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="productQuantity">Quantos sanduíches você quer orçar com esse valor?</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="number" id="productQuantity" name="productQuantity" placeholder="Quantidade de sanduíche orçada." required />
            </div>
            <button className="w-full py-2 px-4 bg-lightPink text-white rounded-md shadow hover:bg-lightRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3" type='submit'>Orçar!</button>
          </form>
        </div>
      )
    } else if (user.category.name === 'Pizzaria') {
      return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-center text-darkRed mb-6">Faça já um orçamento para a sua pizzaria!</h2>
          <p className="text-xs">{`*Orçamento para uma pizza grande de 8 fatias (35cm)`}</p>
          <form onSubmit={handleSubmit} className="flex flex-col p-3 items-center" >
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="budgetName">Nome do seu orçamento:</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="text" id="budgetName" name="budgetName" placeholder="Identifique seu orçamento" required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="budgetDescription">Descrição do orçamento:</label>
              <textarea onChange={handleInputChange} className="mt-1 h-24 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" id="budgetDescription" name="budgetDescription" placeholder="Fale mais sobre seu orçamento. " required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="budgetAmount">{`Valor do seu orçamento (mensal):`}</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="number" id="budgetAmount" name="budgetAmount" placeholder="Digite o valor disponível para esse orçamento." required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="selectedProduct">Selecione o produto a ser orçado:</label>
              <select onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" name="selectedProduct" id="selectedProduct" required>
                <option value=""></option>
                <option value="calabresa">{`Calabresa: Calabresa, Mussarela e Cebola`}</option>
                <option value="frango">{`Frango com Catupiry`}</option>
                <option value="marguerita">{`Marguerita: Mussarela, Tomate e Manjericão`}</option>
              </select>
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="productQuantity">Quantos pizzas você quer orçar com esse valor?</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="number" id="productQuantity" name="productQuantity" placeholder="Quantidade de pizzas orçadas." required />
            </div>
            <button className="w-full py-2 px-4 bg-lightPink text-white rounded-md shadow hover:bg-lightRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3" type='submit'>Orçar!</button>
          </form>
        </div>)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      {conditionalForm()}
    </div>
  )
}

export default Create
