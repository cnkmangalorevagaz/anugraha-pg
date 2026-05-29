"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <>

      {/* NAVBAR */}
      <div
        className="fixed top-0 left-0 w-full bg-white shadow-md z-[999999]"
        style={{ pointerEvents: "auto" }}
      >

        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5">

          {/* LOGO */}
          <Link
  href="/"
  className="flex items-center gap-4"
>

  <img
    src="/images/anulogo.png"
    alt="Anugraha PG"
    className="h-12 w-auto object-contain"
  />

</Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium text-black">

            <Link
              href="/"
              className="hover:text-[#D4AF37] transition"
            >
              Home
            </Link>

            <Link
              href="/rooms"
              className="hover:text-[#D4AF37] transition"
            >
              Rooms
            </Link>

            <Link
              href="/about"
              className="hover:text-[#D4AF37] transition"
            >
              About
            </Link>
<Link
  href="/houserules"
   className="hover:text-[#D4AF37] transition"
>
  House Rules
</Link>
            <Link
              href="/gallery"
              className="hover:text-[#D4AF37] transition"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#D4AF37] transition"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onTouchStart={() => setMenuOpen(true)}
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-black text-4xl relative z-[999999999]"
            style={{ pointerEvents: "auto" }}
          >
            ☰
          </button>

        </div>

      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-[999998] transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[9999999] shadow-2xl transition-transform duration-300 ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* TOP */}
        <div className="flex items-center justify-between px-5 h-16 border-b">

          <h2 className="text-xl font-bold text-black">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-black"
          >
            ×
          </button>

        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col p-6 gap-6 text-black font-medium text-lg">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition"
          >
            Home
          </Link>

          <Link
            href="/rooms"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition"
          >
            Rooms
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition"
          >
            About
          </Link>
<Link
  href="/houserules"
  onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition"
>
  House Rules
</Link>
          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
 className="hover:text-[#D4AF37] transition"          >
            Gallery
          </Link>

          

          {/* BUTTON */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#D4AF37] text-black text-center py-3 rounded-xl font-semibold"
          >
            Enquire Now
          </Link>

        </div>

      </div>

    </>

  );
}