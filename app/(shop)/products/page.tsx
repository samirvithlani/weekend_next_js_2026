import { products } from "@/lib/products";
import Link from "next/link";
export default async function ProductPage({searchParams}:{searchParams:Promise<{category?:string}>}) {
  const {category} = await searchParams
  console.log("category....",category)
  const filtered = category? products.filter((p)=>p.category===category):products

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="mt-4 flex gap-3 text-sm">
        <Link href="/products">All</Link>
        <Link href="/products/?category=laptop">Laptop</Link>
        <Link href="/products/?category=phone">Phone</Link>
        <Link href="/products/?category=watch">Watches</Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
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
