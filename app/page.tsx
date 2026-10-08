import ProductCard from "@/components/ProductCard";
import ProductPagination from "@/components/ProductPagination";
import { getProducts } from "@/db/queries";

export default async function Home({
  searchParams,
}: {
  // В App Router searchParams приходит как Promise
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  // Если page нет, это не число или оно меньше 1, берём 1
  let page = Number(params.page) || 1;
  if (page < 1) {
    page = 1;
  }

  const { products, pages } = await getProducts(page, 6);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Каталог товаров</h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductPagination page={page} pages={pages} />
    </main>
  );
}
