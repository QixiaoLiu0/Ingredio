const baseUrl = process.env.THIRD_PARTY_MEAL_API_BASE;

export async function fetchDishes(ingredient) {
  const res = await fetch(`${baseUrl}filter.php?i=${ingredient}`);
  const data = await res.json();
  return data.meals;
}

export async function fetchDishDetails(dishName) {}
