/**
 * a server component which does not have page interactions
 */
import DishCard from "@/components/DishCard";
import SearchBar from "@/components/SearchBar";
import { fetchDishes } from "@/services/mealService";
export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams; //searchParams became a Promise since Next.js 15
  const userSearchTerm = resolvedSearchParams?.q || "";
  // console.log(userSearchTerm);

  const dishes = await fetchDishes(userSearchTerm);

  return (
    <main className="mx-20">
      <SearchBar />
      <div className="dish-card-wrapper grid grid-cols-5 gap-20">
        {dishes &&
          dishes.map(dish => (
            <DishCard
              key={dish.idMeal}
              imgUrl={dish.strMealThumb}
              dishName={dish.strMeal}
            />
          ))}
        {!dishes && (
          <h2>
            Dises not found by{" "}
            <span className="font-bold">{userSearchTerm}</span>
          </h2>
        )}
      </div>
    </main>
  );
}
