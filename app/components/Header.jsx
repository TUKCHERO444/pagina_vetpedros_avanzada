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
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="VET PEDROS CHICLAYO - Inicio"
          >
            <img
              src="/imgs/logovetpedros.png"
              alt="VET PEDROS CHICLAYO"
              className="h-12 w-auto"
            />
            <span className="font-heading text-[1.3rem] sm:text-[1.55rem] leading-none font-bold tracking-wide whitespace-nowrap">
              <span className="text-accent-soft">VET</span>{" "}
              <span className="text-red-brand">PEDROS</span>
            </span>
            <svg
              className="w-5 h-5 text-primary shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3.07,7C4.23,6.82 5.47,8.05 5.81,9.78C6.16,11.5 5.5,13 4.34,13.2C3.17,13.4 1.93,12.16 1.58,10.43C1.23,8.7 1.9,7.19 3.07,7M20.93,7C22.09,7.19 22.77,8.7 22.42,10.43C22.07,12.16 20.84,13.4 19.66,13.2C18.5,13 17.84,11.5 18.19,9.78C18.53,8.05 19.77,6.82 20.93,7M12,10C14.04,10 15.75,11.09 15.75,14C15.75,15.56 15.36,17 14.09,18.4C13.13,19.46 12.63,20.54 12,20.54C11.38,20.54 10.86,19.46 9.91,18.4C8.64,17 8.25,15.56 8.25,14C8.25,11.09 9.97,10 12,10Z" />
            </svg>
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