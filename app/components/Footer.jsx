import Link from "next/link";
import Reveal from "./Reveal";

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/contactanos", label: "Contáctanos" },
];

const serviceLinks = [
  "Vacunas",
  "Diagnóstico",
  "Cirugía",
  "Consultoría veterinaria",
  "Programas de salud",
  "Comportamiento animal",
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-brasa-dark py-10 md:py-16 xl:py-20 px-4 md:px-0">
        <Reveal>
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 md:justify-start">
            <img
              src="/imgs/logovetpedros.png"
              alt="VET PEDROS CHICLAYO"
              className="h-auto w-36 md:w-44"
            />
            <div className="flex flex-col items-start gap-1.5">
              <span className="font-heading text-[1.55rem] md:text-[1.8rem] leading-none font-bold tracking-wide whitespace-nowrap">
                <span className="text-accent-soft">VET</span>{" "}
                <span className="text-red-brand">PEDROS</span>
              </span>
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3.07,7C4.23,6.82 5.47,8.05 5.81,9.78C6.16,11.5 5.5,13 4.34,13.2C3.17,13.4 1.93,12.16 1.58,10.43C1.23,8.7 1.9,7.19 3.07,7M20.93,7C22.09,7.19 22.77,8.7 22.42,10.43C22.07,12.16 20.84,13.4 19.66,13.2C18.5,13 17.84,11.5 18.19,9.78C18.53,8.05 19.77,6.82 20.93,7M12,10C14.04,10 15.75,11.09 15.75,14C15.75,15.56 15.36,17 14.09,18.4C13.13,19.46 12.63,20.54 12,20.54C11.38,20.54 10.86,19.46 9.91,18.4C8.64,17 8.25,15.56 8.25,14C8.25,11.09 9.97,10 12,10Z" />
              </svg>
            </div>
          </div>
            <p className="text-white text-[18px] leading-[1.2] font-light">
              Síguenos en:
            </p>
            <p className="flex gap-[5px] justify-center md:justify-start">
              <a
                href="https://www.facebook.com/VetPdros/"
                target="_blank"
                rel="noopener"
                aria-label="Facebook VET PEDROS CHICLAYO"
                className="w-9 h-9 rounded-full bg-white/30 hover:bg-white flex items-center justify-center text-white hover:text-brasa-dark no-underline transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/30 hover:bg-white flex items-center justify-center text-white hover:text-brasa-dark no-underline transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-3 text-white text-[23px] font-semibold">ENLACES RÁPIDOS</h3>
            <ul className="m-0 p-0 list-none text-[1rem]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-sol-pale font-light no-underline text-base transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-3 text-white text-[23px] font-semibold">SERVICIOS</h3>
            <ul className="m-0 p-0 list-none text-[1rem]">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/servicios"
                    className="text-white hover:text-sol-pale font-light no-underline text-base transition-colors duration-300"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-3 text-white text-[23px] font-semibold">CONTÁCTANOS</h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-[8px]">
              <li className="flex items-start gap-2 text-white font-light text-base">
                <svg className="w-4 h-4 mt-[5px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Elvira García y García 198, esquina con calle Cajamarca. José Olaya, Chiclayo
              </li>
              <li className="flex items-start gap-2 text-white font-light text-base">
                <svg className="w-4 h-4 mt-[5px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +51 943 841 602
              </li>
              <li className="flex items-start gap-2 text-white font-light text-base">
                <svg className="w-4 h-4 mt-[5px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Lunes a viernes: 8:00am a 8:00pm<br />Sábado: 8:00am a 6:00pm</span>
              </li>
            </ul>
          </div>
        </div>
        </Reveal>
      </div>

      <div className="bg-accent-night py-4 px-4">
        <Reveal delay={120}>
          <p className="m-0 text-white text-center text-base font-light">
            &copy; 2026 VET PEDROS CHICLAYO. Todos los derechos reservados.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}