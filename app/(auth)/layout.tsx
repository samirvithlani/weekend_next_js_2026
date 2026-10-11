import Navbar from "@/components/Navbar";
import React from "react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg0gray-500">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        {children}
      </div>
    </div>
  );
}
