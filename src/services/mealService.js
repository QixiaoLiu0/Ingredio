/**
 * Pure functions for accessing 3rd party interface
 */
const baseUrl = process.env.THIRD_PARTY_MEAL_API_BASE;

export async function fetchDishes(ingredient) {
  const res = await fetch(`${baseUrl}filter.php?i=${ingredient}`);
  const data = await res.json();
  return data.meals;
}

export async function fetchDishDetails(dishName) {
  const res = await fetch(`${baseUrl}search.php?s=${dishName}`);
  const data = await res.json();
  const dishDetails = data.meals?.[0];
  if (!dishDetails) {
    return null;
  }
  return dishDetails;
}
