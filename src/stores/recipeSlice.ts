import { StateCreator } from "zustand"

type Category = {}

export type RecipeSliceType = {
    categories: Category[]
}


export const createRecipesSlice: StateCreator<RecipeSliceType> = () => ({ //StateCreator nos va a permitir crear el state
    categories: []
})