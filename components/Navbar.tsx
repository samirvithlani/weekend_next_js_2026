import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar(){

    return(
        <nav className="flex gap-4 bg-gray-600 p-4 text-white">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contactus">Contact</NavLink>
            <NavLink href="/products">Products</NavLink>
        </nav>
    )
}