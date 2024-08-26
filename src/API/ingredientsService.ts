import { Ingredient } from "@/types";
import { BaseRestService } from "./BaseRestService";

const INGREDIENTS_API = "ingredients ";

interface IIngredientsRequest {
  getAllIngredients: () => Promise<{data: Ingredient[]}>;
}

export class IngredientsService
  extends BaseRestService
  implements IIngredientsRequest
{
  getAllIngredients() {
    return this.get<{data: Ingredient[]}>(`${this.baseUrl}/api/${INGREDIENTS_API}`);
  }
}
