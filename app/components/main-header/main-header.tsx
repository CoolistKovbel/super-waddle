import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className="w-full p-4 bg-[#111] text-white flex items-center justify-between">
      <h2>
        <Link href="/" className="flex items-center">
          <Image src="/bbS.png" alt="small forge bot" width={32} height={32} />
          <span>De Cyber Dev</span>
        </Link>
      </h2>

      <nav className="w-[220px] text-[10px] font-bold uppercase flex items-center justify-between">
        <Link href="/about" className="hover:text-emerald-500 hover:underline">About</Link>
        <Link href="/contact" className="hover:text-emerald-500 hover:underline">Contact</Link>
        <Link href="/services" className="hover:text-emerald-500 hover:underline">Services</Link>
        <Link href="/portfolio" className="hover:text-emerald-500 hover:underline">Portfolio</Link>
      </nav>
    </header>
  );
};

export default MainHeader;
