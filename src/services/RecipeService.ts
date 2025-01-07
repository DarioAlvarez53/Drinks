import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksApiResponse } from "../schemas/recipes-schemas";
import { SearchFilter } from "../types";

export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    //Para escribir en el state el resultado
    if(result.success) {
        return result.data
    }
}

export async function getRecipies(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(url)
    const result = DrinksApiResponse.safeParse(data)
    if(result.success) {
        return result.data
    }
}