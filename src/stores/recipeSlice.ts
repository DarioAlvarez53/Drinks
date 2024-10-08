import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"

export type RecipeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}


export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({ //StateCreator nos va a permitir crear el state
    categories: {
        drinks: []
    },
    //generando la primer accion
    fetchCategories: async () => {
        //Se manda a llamar el servicio
        const categories = await getCategories()
        set({
            categories
        })
    }
})