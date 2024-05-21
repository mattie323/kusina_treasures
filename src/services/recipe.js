import { config } from "./config";

export const addRecipe = async (newRecipe) => {
  const res = await fetch(`${config.API_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  });

  const data = await res.json();

  return data;
};

export const getRecipes = async () => {
  const res = await fetch(`${config.API_URL}/recipes`);
  const data = await res.json();
  return data;
};
