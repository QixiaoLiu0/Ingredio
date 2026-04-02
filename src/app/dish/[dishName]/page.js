import BreadcrumbNav from "@/components/BreadcrumbNav";
import { fetchDishDetails } from "@/services/mealService";
import Image from "next/image";
export default async function Page({ params }) {
  const resolvedParams = await params;
  const dishName = resolvedParams.dishName;
  const dishDetails = await fetchDishDetails(dishName);
  // console.log(dishDetails);
  const videoId = dishDetails?.strYoutube?.split("v=")[1] || "";

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    return dishDetails[`strIngredient${i + 1}`];
  }).filter(item => item && item.trim() !== "");

  // console.log(ingredients);

  return (
    <main className="p-4">
      <BreadcrumbNav />

      <h2 className="font-bold text-2xl mt-4 mb-2">
        {dishName.replaceAll("%20", " ")}
      </h2>
      <div className="flex flex-row">
        <Image
          src={dishDetails.strMealThumb}
          width="400"
          height="400"
          alt="dish pic"
          className="rounded-xl shadow-lg"
        />
        <ul className="ml-5">
          {ingredients.map((item, i) => {
            return (
              <li key={i} className="text-red-400 cursor-default">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      {/* youtube viode */}
      {videoId && (
        <div className="">
          <h2 className="text-2xl font-bold mt-4 mb-2">Cooking Tutorial</h2>
          <div className="aspect-video">
            <iframe
              className="w-150 h-120 rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
