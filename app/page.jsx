import Link from "next/link";
import Reveal from "./components/Reveal";
import { servicios } from "./data/servicios";

const promos = [
  {
    title: "Chequeo Preventivo",
    desc: "Hemograma, coprológico, uroanálisis y cardiología fast para detectar a tiempo cualquier riesgo.",
    img: "/imgs/hematologico.jpeg",
  },
  {
    title: "Vacunación Completa",
    desc: "Protege a tu mascota con el esquema completo de vacunas y refuerzos anuales.",
    img: "/imgs/saladeatencion1.jpeg",
  },
  {
    title: "Plan de Salud Anual",
    desc: "Consultas ilimitadas, descuentos en especialidades y monitoreo continuo.",
    img: "/imgs/saladeespera2.jpeg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-sol-pale/80 via-paper/50 to-brasa-pale/60">
        <div className="absolute inset-0">
          <img
            src="/imgs/entradaprincipal.jpeg"
            alt="Entrada principal de la clínica VET PEDROS CHICLAYO"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
          />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center gap-6">
          <Reveal>
            <span className="bg-red-deep text-white font-bold text-sm md:text-lg tracking-widest uppercase px-4 py-1.5 rounded-lg shadow-md">
              VET PEDROS CHICLAYO
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight max-w-3xl uppercase tracking-wide">
              Cuidamos a tu mascota con{" "}
              <span className="text-brasa-dark">seriedad</span> y{" "}
              <span className="text-brasa-dark">calidez</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-ink-medium text-lg md:text-xl max-w-2xl leading-relaxed">
              Centro veterinario especializado con equipo de primer nivel, infraestructura moderna y enfoque preventivo.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex gap-4 mt-2">
              <Link
                href="/contactanos"
                className="inline-block bg-red-deep hover:bg-red-night text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
              >
                Agenda tu cita
              </Link>
              <Link
                href="/servicios"
                className="inline-block bg-white hover:bg-brasa-pale text-brasa-dark border border-brasa px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Nuestros servicios
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full py-14 md:py-20 xl:py-24 lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 text-center flex flex-col gap-4 lg:gap-8">
          <Reveal>
            <h3 className="font-heading !text-[1.75rem] md:!text-[2rem] !leading-[1.4] font-light max-w-3xl mx-auto">
              Somos un{" "}
              <span className="font-semibold text-brasa-dark">centro veterinario especializado</span>{" "}
              con un equipo de primer nivel. Unimos{" "}
              <span className="font-semibold text-brasa-dark">medicina de alta calidad, infraestructura moderna</span>{" "}
              y un <span className="font-semibold text-brasa-dark">enfoque preventivo</span> para asegurar el bienestar de tu mascota.
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="font-heading !text-[2rem] lg:!text-[2.5rem] !leading-[1.2]">
              <span className="font-semibold text-brasa-dark">¡Prevenir</span> es cuidar la salud de tu mascota!
            </h3>
          </Reveal>
        </div>
      </section>

      {/* Promos */}
      <section className="w-full py-14 md:py-20 xl:py-24 bg-surface-soft lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-8 lg:gap-12">
          <Reveal>
            <h3 className="font-heading !text-[2rem] font-bold text-center text-ink">
              Promociones
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
              <Reveal key={promo.title} delay={i * 100} className="h-full">
                <div className="shadow-[0_0_12px_rgba(0,0,0,0.10)] rounded-2xl bg-white overflow-hidden flex flex-col h-full">
                  <img
                    src={promo.img}
                    alt={promo.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h4 className="font-heading font-bold text-lg text-ink">{promo.title}</h4>
                    <p className="text-ink-medium text-sm leading-relaxed flex-1">{promo.desc}</p>
                    <Link
                      href="/contactanos"
                      className="inline-block bg-red-deep hover:bg-red-night text-white text-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors mt-2"
                    >
                      Reserva ahora
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="w-full py-14 md:py-20 xl:py-24 lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-8">
          <Reveal>
            <h3 className="font-heading !text-[2rem] font-bold text-center text-ink">
              Nuestros <span className="text-brasa-dark">Servicios</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {servicios.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 70} className="h-full">
                <Link
                  href="/servicios"
                  className="flex flex-col items-center gap-3 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-line/50 h-full"
                >
                  <span className="text-brasa-dark">{svc.icon}</span>
                  <span className="font-heading font-semibold text-sm text-ink text-center uppercase tracking-wide">
                    {svc.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-14 md:py-20 xl:py-24 bg-gradient-to-r from-accent-pale via-sol-pale to-brasa-pale lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-heading !text-[2rem] md:!text-[2.5rem] font-bold text-ink uppercase tracking-wide">
              ¿Necesitas atención veterinaria?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-ink-medium text-lg max-w-2xl leading-relaxed">
              Nuestro equipo de especialistas está listo para cuidar a tu mascota. Agenda tu cita hoy mismo.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/contactanos"
              className="inline-block bg-accent-dark hover:bg-accent-night text-white px-8 py-3.5 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Contáctanos
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}