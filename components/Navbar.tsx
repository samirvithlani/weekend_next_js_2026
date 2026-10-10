import Link from "next/link";

export default function Navbar(){

    return(
        <nav className="flex gap-4 bg-gray-600 p-4 text-white">
            <Link href="/">HOME</Link>
            <Link href="/about">About</Link>
            <Link href="/contactus">Contact</Link>
            <Link href="/products">Products</Link>
        </nav>
    )
}