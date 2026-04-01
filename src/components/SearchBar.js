"use client";
import { useDebouncedCallback } from "use-debounce";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SearchBar({}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //integrate debounce
  const handleSearch = useDebouncedCallback(term => {
    // get current search params
    const params = new URLSearchParams(searchParams);

    // monitor user's input
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    // write search params into address bar
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="p-4 flex justify-center mb-8">
      <input
        className="border-2 border-black p-2 min-w-1/3"
        placeholder="enter ingredients..."
        onChange={e => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}
