import Link from "next/link";
import Reveal from "../components/Reveal";

const values = [
  { name: "Confianza", desc: "Transparencia en cada diagnóstico y tratamiento." },
  { name: "Empatía", desc: "Escuchamos y entendemos a cada mascota y familia." },
  { name: "Cuidado", desc: "Atención personalizada con los más altos estándares." },
  { name: "Profesionalismo", desc: "Equipo altamente calificado y en formación continua." },
  { name: "Compromiso", desc: "Dedicados al bienestar integral de cada paciente." },
];

const staff = [
  { name: "Dr. Carlos Pedros", specialty: "Director / Cirugía", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { name: "Dra. María López", specialty: "Cardiología", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
  { name: "Dr. Juan García", specialty: "Dermatología", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
  { name: "Dra. Ana Torres", specialty: "Oftalmología", img: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80" },
  { name: "Dr. Pedro Ruiz", specialty: "Endocrinología", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80" },
  { name: "Dra. Laura Sánchez", specialty: "Nutrición", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full lg:h-[600px] bg-sol-pale overflow-hidden">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            src="/imgs/entradaprincipal.jpeg"
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

      {/* Misión y Visión */}
      <section className="w-full py-14 md:py-20 xl:py-24 lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Reveal className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=925&q=80"
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
                Brindar un cuidado veterinario integral que priorice la prevención y el diagnóstico temprano, ofreciendo atención especializada y de calidad para mejorar la vida de las mascotas.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-[2rem] font-bold text-center lg:text-start">
                Nuestra <span className="text-primary">visión</span>
              </h2>
              <p className="text-[1.35rem] font-light leading-relaxed text-center lg:text-start mt-2">
                Ser la clínica veterinaria de referencia, reconocida por su excelencia médica, calidez humana y la más completa atención especializada para las mascotas.
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

      {/* CEO */}
      <section className="w-full py-14 md:py-20 xl:py-24 lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Reveal className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1024&q=80"
              alt="Dr. Carlos Pedros"
              className="rounded-2xl object-cover max-h-[400px]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2 flex flex-col justify-center gap-4 py-10 lg:py-0" delay={150}>
            <h2 className="font-heading text-[2rem] font-bold text-center lg:text-start">
              Director <span className="text-primary">Dr. Carlos Pedros</span>
            </h2>
            <p className="text-[1.25rem] font-light leading-relaxed text-center lg:text-start">
              Médico Veterinario que decidió evolucionar hacia{" "}
              <span className="font-semibold text-primary">la Alta Gestión Estratégica</span>. Su enfoque hoy es 100% corporativo: lidera VET PEDROS CHICLAYO asegurando la{" "}
              <span className="font-semibold text-primary">excelencia médica</span> y garantizando una{" "}
              <span className="font-semibold text-primary">atención impecable a los tutores</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Staff */}
      <section className="w-full py-14 md:py-20 xl:py-24 bg-surface-soft lazy-section">
        <div className="max-w-screen-xl mx-auto px-4">
          <Reveal>
            <h2 className="mb-2 uppercase !text-[1rem] font-bold text-center">
              <span className="inline-block bg-white text-ink-medium px-5 py-2 rounded-lg shadow-[0_0_12px_rgba(0,0,0,0.10)]">
                MÉDICOS
              </span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="font-heading !m-0 !text-[2rem] text-ink font-bold text-center mb-10">
              Nuestro <span className="text-primary">staff médico</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((doc, i) => (
              <Reveal key={doc.name} delay={i * 80} className="h-full">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="bg-primary-deep px-6 py-4 flex flex-col items-center gap-2">
                  <span className="text-white text-xl font-semibold text-center">{doc.name}</span>
                  <span className="text-white/80 text-sm text-center">{doc.specialty}</span>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}