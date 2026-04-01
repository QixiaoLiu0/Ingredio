import BreadcrumbNav from "@/components/BreadcrumbNav";
export default async function Page({ params }) {
  const resolvedParams = await params;
  const dishName = resolvedParams.dishName;
  return (
    <main>
      <BreadcrumbNav />
      <h1>{dishName}</h1>
    </main>
  );
}
