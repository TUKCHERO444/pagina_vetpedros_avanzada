"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { servicios } from "../data/servicios";
import Reveal from "./Reveal";

export default function ServicesSection() {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);
  const closeBtnRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (selected) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setVisible(false);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const prevFocus = document.activeElement;
    document.body.classList.add("overflow-hidden");
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setSelected(null);
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
      if (prevFocus && typeof prevFocus.focus === "function") prevFocus.focus();
    };
  }, [selected]);

  return (
    <section className="w-full py-14 md:py-20 xl:py-24 bg-surface-soft">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicios.map((svc, i) => (
            <Reveal key={svc.slug} delay={i * 80} className="h-full">
            <button
              type="button"
              onClick={() => setSelected(svc)}
              aria-haspopup="dialog"
              aria-label={`Ver detalle de ${svc.name}`}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brasa focus-visible:ring-offset-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full w-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.name}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute top-4 left-4 inline-flex w-12 h-12 items-center justify-center rounded-full bg-white/95 shadow text-primary">
                  {svc.icon}
                </span>
              </div>
              <div className="relative z-10 p-5 flex flex-col gap-2 flex-1">
                <h3 className="font-bold !text-[1.125rem] text-ink">{svc.name}</h3>
                <p className="!text-[0.9rem] text-ink-medium leading-relaxed flex-1">{svc.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-brasa-dark font-semibold text-sm transition-colors group-hover:text-accent-dark">
                  Ver detalle
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" /></svg>
                </span>
              </div>
            </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className={`fixed inset-0 z-[80] flex items-center justify-center p-4 motion-reduce:transition-none ${
            visible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          <div
            className="absolute inset-0 bg-black/70"
            aria-hidden="true"
            onClick={() => setSelected(null)}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="servicio-modal-title"
            className={`relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto motion-reduce:transition-none ${
              visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            } transition-all duration-200`}
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Cerrar detalle del servicio"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brasa focus-visible:ring-offset-2 hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img
              src={selected.imgLg}
              alt={`Imagen ampliada de ${selected.name}`}
              className="h-56 md:h-72 w-full object-cover"
              decoding="async"
            />
            <div className="p-6 md:p-8">
              <h3
                id="servicio-modal-title"
                className="font-heading !text-[1.5rem] md:!text-[1.75rem] !font-bold !leading-[1.2] text-ink"
              >
                {selected.name}
              </h3>
              <p className="mt-3 !text-[1.05rem] text-ink-medium leading-relaxed">{selected.detail}</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {selected.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-ink text-[0.95rem]">
                    <svg className="w-5 h-5 mt-[2px] shrink-0 text-brasa-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contactanos"
                className="mt-7 inline-block bg-accent-dark hover:bg-accent-night text-white px-7 py-3 rounded-full font-semibold transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2"
              >
                Agendar este servicio
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}