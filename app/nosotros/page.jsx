import Link from "next/link";
import Reveal from "../components/Reveal";

const values = [
  { name: "Confianza", desc: "Transparencia en cada diagnóstico y tratamiento." },
  { name: "Empatía", desc: "Escuchamos y entendemos a cada mascota y familia." },
  { name: "Cuidado", desc: "Atención personalizada con los más altos estándares." },
  { name: "Profesionalismo", desc: "Equipo altamente calificado y en formación continua." },
  { name: "Compromiso", desc: "Dedicados al bienestar integral de cada paciente." },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full lg:h-[600px] bg-sol-pale overflow-hidden">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            src="/imgs/cliente3.jpeg"
            alt="Centro veterinario VET PEDROS CHICLAYO"
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover"
            fetchPriority="high"
          />
          <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-sol-pale to-transparent" />
        </div>
        <div className="relative z-10 w-full lg:w-1/2 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 flex flex-col justify-center px-7 py-10 lg:p-0">
          <div className="w-full 2xl:w-2/3 flex flex-col gap-y-3 lg:p-10">
            <Reveal>
              <h1 className="font-heading !text-ink text-center lg:text-start !text-[2rem] !font-bold uppercase tracking-wide">
                VET PEDROS CHICLAYO
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading !text-ink text-center lg:text-start !text-[1.5rem] !font-semibold">
                Somos un centro veterinario dedicado al cuidado integral de tu mascota.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="!text-ink-medium text-center lg:text-start !text-[1.25rem] !leading-[1.4]">
                Contamos con todas las especialidades médicas y un equipo de profesionales que trabaja con compromiso y coordinación. Buscamos brindar bienestar y calidad de vida a cada paciente.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="w-full py-14 md:py-20 xl:py-24 bg-surface-soft lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Reveal className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/imgs/doctor1.jpeg"
              alt="Médico Veterinario Mg. Pedro Salazar Mori"
              className="rounded-2xl object-cover max-h-[500px]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2 flex flex-col justify-center gap-6 py-10 lg:py-0" delay={150}>
            <h2 className="font-heading text-[2rem] font-bold text-center lg:text-start">
              Nuestra <span className="text-primary">Historia</span>
            </h2>
            <p className="text-[1.25rem] font-light leading-relaxed text-center lg:text-start">
              En el año 2000 se inaugura la Clínica Veterinaria VET PEDROS por el Médico Veterinario{" "}
              <span className="font-semibold text-ink">Mg. Pedro Salazar Mori</span>; contando sólo con un
              pequeño local desde sus inicios, con el objetivo de defender, proteger, brindar bienestar a
              los animales de compañía y tranquilidad a los propietarios.
            </p>
            <p className="text-[1.25rem] font-light leading-relaxed text-center lg:text-start">
              Ahora ésta clínica es la más importante de la comunidad{" "}
              <span className="font-semibold text-ink">Chiclayana – Olayina</span>.
            </p>
            <p className="text-[1.25rem] font-light leading-relaxed text-center lg:text-start">
              VET PEDROS, hasta el día de hoy, es una pequeña empresa donde entendemos la relación que tienen
              los propietarios con sus mascotas y nos comprometemos a tratarlos con el mismo afecto, atención
              y calidad como nosotros tratamos a las nuestras.
            </p>
            <p className="text-[1.25rem] font-light leading-relaxed text-center lg:text-start">
              Este año ha sido innovador para la empresa, ya que desde sus comienzos no contaba con una imagen
              corporativa ni logotipo que lo defina, y su cambio de imagen empresarial gracias a diseñadores
              está siendo trabajado actualmente, esperando ser más reconocido por el público en general de Chiclayo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="w-full py-14 md:py-20 xl:py-24 lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Reveal className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/imgs/cliente1.jpg"
              alt="Misión y Visión"
              className="rounded-2xl object-cover max-h-[500px]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2 flex flex-col justify-center gap-6 py-10 lg:py-0" delay={150}>
            <div>
              <h2 className="font-heading text-[2rem] font-bold text-center lg:text-start">
                Nuestra <span className="text-primary">misión</span>
              </h2>
              <p className="text-[1.35rem] font-light leading-relaxed text-center lg:text-start mt-2">
                Dar un servicio de calidad para nuestro cliente y su mascota, con adecuados ambientes y
                profesionales especializados en el rubro veterinario.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-[2rem] font-bold text-center lg:text-start">
                Nuestra <span className="text-primary">visión</span>
              </h2>
              <p className="text-[1.35rem] font-light leading-relaxed text-center lg:text-start mt-2">
                Abrir más sucursales dentro de Chiclayo e innovar varias áreas en la empresa para brindar un
                servicio completo a nuestros clientes.
              </p>
            </div>
            <div className="text-center lg:text-start">
              <Link
                href="/contactanos"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Separa tu cita
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full py-14 md:py-20 xl:py-24 bg-surface-soft lazy-section">
        <div className="max-w-screen-lg mx-auto px-4">
          <Reveal>
            <h3 className="font-heading !text-[2rem] text-ink font-bold text-center mb-10">
              Nuestros <span className="text-primary">valores</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 70} className="h-full">
                <div className="flex flex-col items-center gap-3 bg-white rounded-2xl shadow-md p-6 border-t-4 border-primary h-full">
                <h5 className="font-heading font-bold text-lg text-ink">{v.name}</h5>
                <p className="text-ink-medium text-sm text-center leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}