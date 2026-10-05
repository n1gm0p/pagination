import ProductCard from "@/components/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProducts } from "@/db/queries";

export default async function Home({
  searchParams,
}: {
  // В App Router searchParams приходит как Promise
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1; // если page нет, берём 1
  const { products, pages } = await getProducts(page, 6);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Каталог товаров</h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Пагинация из shadcn/ui. Ссылки меняют ?page= в адресной строке */}
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${page > 1 ? page - 1 : 1}`} />
          </PaginationItem>

          {Array.from({ length: pages }, (_, i) => i + 1).map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`?page=${pageNumber}`}
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext href={`?page=${page < pages ? page + 1 : pages}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
