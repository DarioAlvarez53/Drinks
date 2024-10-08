import axios from "axios";
import { CategoriesAPIResponseSchema } from "../schemas/recipes-schemas";

export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    //Para escribir en el state el resultado
    if(result.success) {
        return result.data
    }
}