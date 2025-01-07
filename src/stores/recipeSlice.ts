import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilters: SearchFilter) => Promise<void>
}


export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({ //StateCreator nos va a permitir crear el state
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    //generando la primer accion
    fetchCategories: async () => {
        //Se manda a llamar el servicio
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipies: async (filters) => {
        // console.log(filters);
        const drinks = await getRecipies(filters)
        set({
            drinks
        })
    }
})