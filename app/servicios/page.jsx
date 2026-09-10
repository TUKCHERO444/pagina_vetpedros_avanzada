import ServicesSection from "../components/ServicesSection";
import Reveal from "../components/Reveal";

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full lg:h-[600px] bg-sol-pale overflow-hidden">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="/imgs/saladeatencion1.jpeg"
            alt="Atención médica VET PEDROS CHICLAYO"
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover"
            fetchPriority="high"
          />
          <div className="hidden lg:block absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-sol-pale to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto h-full flex flex-col justify-center px-7 py-10 lg:p-0">
          <div className="w-full lg:w-1/2 flex flex-col gap-y-3 lg:py-10 px-4">
            <Reveal>
              <h1 className="font-heading !text-ink text-center lg:text-start !text-[2.5rem] !font-bold uppercase tracking-wide">
                Servicios
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="!text-ink-medium text-center lg:text-start !text-[1.25rem] !leading-[1.4]">
                Atención integral para tu mascota:{" "}
                <strong className="font-semibold text-ink">
                  consultas, baño, emergencias, ecografía, cirugía, análisis y laboratorio
                </strong>{" "}
                bajo un mismo techo.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="!text-ink-medium text-center lg:text-start !text-[1.25rem] !leading-[1.4]">
                Haz clic en cada servicio para ver{" "}
                <strong className="font-semibold text-ink">más detalle e imágenes</strong>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ServicesSection />
    </>
  );
}