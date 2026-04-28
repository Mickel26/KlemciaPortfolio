"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "O mnie", href: "#o-mnie" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Doswiadczenie", href: "#doswiadczenie" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-7 transition-all duration-500 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="text-xl tracking-[0.15em] text-[#f4f4f4]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Klementyna Turowska
      </a>

      <ul className="flex gap-10 list-none">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[10px] tracking-[0.25em] uppercase text-[#c0c0c0]/60 hover:text-[#c0c0c0] transition-colors duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}