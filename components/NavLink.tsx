"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isActive = href === "/" ? pathName === "/" : pathName.startsWith(href);
  console.log("isactive",isActive)
  return (
    <Link
      href={href}
      className={isActive ? "font-bold text-yellow-400" : "text-white"}
    >
        {children}
    </Link>
  );
}
