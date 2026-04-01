import DishCard from "@/components/DishCard";
import SearchBar from "@/components/SearchBar";
export default function Page() {
  return (
    <main>
      <SearchBar />
      <br />
      <div className="dish-card-wrapper grid grid-cols-5 gap-10">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </main>
  );
}
