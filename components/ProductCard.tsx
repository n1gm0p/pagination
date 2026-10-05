import Image from "next/image";
import type { Product } from "@/db/schema";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border bg-white p-4 hover:shadow-lg transition-shadow">
      <Image
        src={product.image ?? ""}
        alt={product.title ?? "Товар"}
        width={400}
        height={300}
        className="mb-3 h-40 w-full object-cover"
      />
      <h2 className="mb-1 text-lg font-semibold">{product.title}</h2>
      <p className="mb-2 text-sm text-gray-600">{product.description}</p>
      <p className="font-bold">{product.price} ₽</p>
    </div>
  );
}
