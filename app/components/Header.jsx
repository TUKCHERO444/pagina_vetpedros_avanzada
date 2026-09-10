"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/contactanos", label: "Contáctanos" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[60] bg-gradient-to-r from-brasa to-brasa-dark shadow-[0_1px_8px_rgba(0,0,0,0.15)] animate-header-in">
        <div className="mx-auto flex h-20 max-w-[1300px] items-center justify-between px-4 md:px-0">
          <Link href="/" className="shrink-0" aria-label="VET PEDROS CHICLAYO - Inicio">
            <img
              src="/imgs/logovetpedros.png"
              alt="VET PEDROS CHICLAYO"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-[17px] font-semibold transition-colors ${
                    isActive
                      ? "bg-white text-brasa-dark shadow-sm"
                      : "text-white hover:bg-white/15 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => {
              setOpen(true);
              document.body.classList.add("overflow-hidden");
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 lg:hidden bg-white"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-6 bg-ink"></span>
              <span className="block h-[2px] w-6 bg-ink"></span>
              <span className="block h-[2px] w-6 bg-ink"></span>
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] lg:hidden transition-none ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-transform duration-300 origin-left ${
            open ? "scale-x-100" : "scale-x-0"
          }`}
          onClick={() => {
            setOpen(false);
            document.body.classList.remove("overflow-hidden");
          }}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-[72%] max-w-xs flex-col bg-surface px-6 pb-8 pt-5 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => {
              setOpen(false);
              document.body.classList.remove("overflow-hidden");
            }}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-600 bg-transparent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <nav className="mt-6 flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    document.body.classList.remove("overflow-hidden");
                  }}
                  className={`px-1 py-2 text-lg font-semibold transition-colors ${
                    isActive
                      ? "-ml-5 rounded-full bg-brasa pl-6 pr-5 py-2 text-white"
                      : "text-brasa-dark"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}