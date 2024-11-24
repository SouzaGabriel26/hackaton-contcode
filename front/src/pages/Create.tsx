import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { httpClient } from "../lib/httpClient"
import toast from "react-hot-toast"
import { AxiosError } from "axios"

type BudgetProps = {
  name: string,
  description: string,
  provided_budget: number,
  budget_item: string,
}
const Create: React.FC = () => {
  const [budgetObject, setBudgetObject] = useState<BudgetProps>({
    name: '',
    description: '',
    provided_budget: 0,
    budget_item: '',
  })

  const { user } = useAuthContext();
  if (!user) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    setBudgetObject({
      ...budgetObject,
      [e.target.name]: e.target.value
    })
  }

   async function handleSubmit (e: React.FormEvent)  {
    e.preventDefault()
    console.log(budgetObject)
    try{
      await httpClient.post('/budget',budgetObject)
      toast.success('Success!')
    } catch (error){
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data.error;
        if (Array.isArray(errorResponse)) {
          toast.error(errorResponse[0].message);
        }
      } else {
        toast.error('Ocorreu um erro ao criar a sua conta.')
      }
    } 
    }


  

  const conditionalForm = () => {
     
      return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-center text-darkRed mb-6">Faça já um orçamento para a sua pizzaria!</h2>
          <p className="text-xs">{`*Orçamento para uma pizza grande de 8 fatias (35cm)`}</p>
          <form onSubmit={handleSubmit} className="flex flex-col p-3 items-center" >
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="name">Nome do seu orçamento:</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="text" id="name" name="name" placeholder="Identifique seu orçamento" required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="description">Descrição do orçamento:</label>
              <textarea onChange={handleInputChange} className="mt-1 h-24 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" id="description" name="description" placeholder="Fale mais sobre seu orçamento. " required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="provided_budget">{`Valor do seu orçamento:`}</label>
              <input onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" type="number" id="provided_budget" name="provided_budget" placeholder="Digite o valor disponível para esse orçamento." required />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-darkRed" htmlFor="budget_item">Selecione o produto a ser orçado:</label>
              <select onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-lightRed sm:text-sm" name="budget_item" id="budget_item" required>
                <option value=""></option>
                <option value="Pizza de Calabresa">{`Calabresa`}</option>
                <option value="Pizza de Frango">{`Frango`}</option>
                <option value="Pizza de Queijo">{`Queijo`}</option>
                <option value="Pizza Marguerita">{`Marguerita`}</option>
                <option value="Pizza Portuguesa">{`Portuguesa`}</option>
              </select>
            </div>
            
            <button className="w-full py-2 px-4 bg-lightPink text-white rounded-md shadow hover:bg-lightRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3" type='submit'>Orçar!</button>
          </form>
        </div>
    ) 
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      {conditionalForm()}
    </div>
  )
}

export default Create
