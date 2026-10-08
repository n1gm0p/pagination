import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProductPagination({
  page,
  pages,
}: {
  page: number;
  pages: number;
}) {
  // Показываем до 5 кнопок: текущая страница и по 2 с каждой стороны.
  // Страница 1 → 1 2 3, страница 5 → 3 4 5 6 7
  const visiblePages = [];
  for (let i = page - 2; i <= page + 2; i++) {
    if (i >= 1 && i <= pages) {
      visiblePages.push(i);
    }
  }

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${page > 1 ? page - 1 : 1}`} />
        </PaginationItem>

        {visiblePages.map((pageNumber) => (
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
  );
}
