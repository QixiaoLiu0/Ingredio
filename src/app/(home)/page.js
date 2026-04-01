import DishCard from "@/components/DishCard";

export default function Page() {
  return (
    <main>
      <h1>home page</h1>
      <br />
      <div className="grid grid-cols-5 gap-10">
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
