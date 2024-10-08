import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type RecipeSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}


export const createRecipesSlice: StateCreator<RecipeSliceType> = () => ({ //StateCreator nos va a permitir crear el state
    categories: [],
    //generando la primer accion
    fetchCategories: async () => {
        //Se manda a llamar el servicio
        getCategories()
    }
})