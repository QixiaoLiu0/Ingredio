import Link from "next/link";

export default function DishCard({ imgUrl, dishName }) {
  return (
    <Link
      href={`/dish/${dishName}`} // points to dynamic router: dish/[dishName]
      className="border-2 border-red-200 aspect-ratio: 1 / 1 overflow-hidden "
    >
      <div className="h-[90%] w-full">
        <img
          className="w-full h-full object-fit: cover"
          src={imgUrl || "/kvbotn1581012881.jpg"}
          alt={dishName || "placeholder"}
        />
      </div>
      <div className="h-[10%] flex items-center justify-center">
        <h2>{dishName || "dish name area..."}</h2>
      </div>
    </Link>
  );
}
