"use client";

import { usePathname } from "next/navigation";
import ProductBar from "./Productbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showCategoryBar = pathname === "/mobiles";

  return (
    <>
      {showCategoryBar && <ProductBar />}
      <main>{children}</main>
    </>
  );
}
