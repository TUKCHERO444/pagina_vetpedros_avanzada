"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pet: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Te contactaremos pronto.");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative w-full lg:h-[600px] bg-sol-pale overflow-hidden">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1300&q=80"
            alt="Contacto VET PEDROS CHICLAYO"
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
                    Av. Los Pajaritos 2125, Of. 103,<br />
                    Maipú, Santiago de Chile
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
                    +56 9 9999 8888
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
              <li className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                <div>
                  <h5 className="font-bold text-ink text-lg">Email</h5>
                  <p className="text-ink-medium leading-relaxed">
                    info@vetpedros.com
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal className="w-full lg:w-1/2" delay={120}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5"
            >
              <h3 className="font-heading text-xl font-bold text-ink text-center mb-2">
                Envíanos un mensaje
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="pet"
                placeholder="Nombre de tu mascota"
                value={form.pet}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary text-ink-medium"
              >
                <option value="">Selecciona un servicio</option>
                <option value="consulta">Consulta general</option>
                <option value="vacuna">Vacunación</option>
                <option value="cirugia">Cirugía</option>
                <option value="especialidad">Especialidad</option>
                <option value="laboratorio">Laboratorio</option>
                <option value="otro">Otro</option>
              </select>
              <textarea
                name="message"
                placeholder="Mensaje"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full bg-red-deep hover:bg-red-night text-white font-bold text-lg py-3 rounded-full transition-colors shadow-md"
              >
                Enviar mensaje
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] bg-gray-200 lazy-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.123456789!2d-70.75!3d-33.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzEyLjAiUyA3MMKwNDUnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
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