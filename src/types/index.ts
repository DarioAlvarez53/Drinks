import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinksApiResponse, SearchFilterSchema } from "../schemas/recipes-schemas";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiResponse>