import { IngredientsService } from "./ingredientsService";

const ingredientsService = new IngredientsService(
  "https://norma.nomoreparties.space",
);

export { ingredientsService };
