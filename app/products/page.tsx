import { products } from "@/lib/products";
import Link from "next/link";
export default function ProductPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            href={`/products/${p.id}`}
            className="rounded-lg border p-4 hover:shadow-,d"
          >
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.price} rs</p>
            <p className="text-xs uppercase text-gray-400">{p.category}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
