import Link from "next/link";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function BreadcrumbNav() {
  return (
    <nav className="flex flex-row w-100 items-center">
      <Link
        href="/"
        className="flex flex-row items-center hover:text-indigo-500 transition-colors"
      >
        <ChevronLeftIcon className="size-5" />
        <HomeIcon className="size-4 mx-1" />
        <span>Home</span>
      </Link>
    </nav>
  );
}
