import Reveal from "../components/Reveal";

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full lg:h-[600px] bg-sol-pale overflow-hidden">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="/imgs/banner2.jpeg"
            alt="Contáctanos VET PEDROS CHICLAYO"
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover"
            fetchPriority="high"
          />
          <div className="hidden lg:block absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-sol-pale to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto h-full flex flex-col justify-center px-7 py-10 lg:p-0">
          <div className="w-full lg:w-1/2 flex flex-col gap-y-3 lg:py-10 px-4">
            <Reveal>
              <h1 className="font-heading !text-ink text-center lg:text-start !text-[2.5rem] !font-bold uppercase tracking-wide">
                Contáctanos
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="!text-ink-medium text-center lg:text-start !text-[1.25rem] !leading-[1.4]">
                Agenda tu cita para que tu mascota reciba la atención que merece.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="w-full py-14 md:py-20 xl:py-24 lazy-section">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Info */}
          <Reveal className="w-full lg:w-1/2 flex flex-col gap-8 py-4">
            <h2 className="font-heading text-[2rem] font-bold text-ink text-center lg:text-start">
              Información de <span className="text-primary">contacto</span>
            </h2>
            <ul className="m-0 p-0 list-none flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                <div>
                  <h5 className="font-bold text-ink text-lg">Dirección</h5>
                  <p className="text-ink-medium leading-relaxed">
                    Elvira García y García 198,<br />
                    Esq. con calle Cajamarca, José Olaya, Chiclayo
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                <div>
                  <h5 className="font-bold text-ink text-lg">Teléfono</h5>
                  <p className="text-ink-medium leading-relaxed">
                    +51 943 841 602
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </span>
                <div>
                  <h5 className="font-bold text-ink text-lg">Horario</h5>
                  <p className="text-ink-medium leading-relaxed">
                    Lun - Vie: 8:00am a 8:00pm<br />
                    Sábado: 8:00am a 6:00pm
                  </p>
                </div>
              </li>
              </ul>
          </Reveal>

          {/* WhatsApp */}
          <Reveal className="w-full lg:w-1/2" delay={120}>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 items-center text-center h-full">
              <h3 className="font-heading text-xl font-bold text-ink">
                Escríbenos por WhatsApp
              </h3>
              <span className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <svg className="w-8 h-8" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </span>
              <p className="text-ink-medium leading-relaxed">
                Agenda tu cita o consulta directamente con nuestro equipo vía WhatsApp.
              </p>
              <a
                href="https://wa.me/51943841602?text=Hola%20VET%20PEDROS%20CHICLAYO%2C%20quiero%20agendar%20una%20cita%20para%20mi%20mascota."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-lg px-8 py-3.5 rounded-full transition-colors shadow-md"
              >
                Agendar por WhatsApp
              </a>
              <p className="text-ink-medium text-sm">+51 943 841 602</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] bg-gray-200 lazy-section">
        <iframe
          src="https://maps.google.com/maps?q=-6.773699,-79.854706&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación VET PEDROS CHICLAYO"
        />
      </section>
    </>
  );
}