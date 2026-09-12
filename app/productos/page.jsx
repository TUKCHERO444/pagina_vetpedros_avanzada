import Link from "next/link";
import Reveal from "../components/Reveal";
import { productos } from "../data/productos";

const WA_NUMBER = "51943841602";

function waLink(product) {
  const message = `Hola VET PEDROS CHICLAYO, me interesa el producto: ${product.name} de S/ ${product.price}. ¿Está disponible?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ProductosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full lg:h-[600px] bg-sol-pale overflow-hidden">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="/imgs/tiendadepructos.jpeg"
            alt="Tienda VET PEDROS CHICLAYO"
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover"
            fetchPriority="high"
          />
          <div className="hidden lg:block absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-sol-pale to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto h-full flex flex-col justify-center px-7 py-10 lg:p-0">
          <div className="w-full lg:w-1/2 flex flex-col gap-y-3 lg:py-10 px-4">
            <Reveal>
              <h1 className="font-heading !text-ink text-center lg:text-start !text-[2.5rem] !font-bold uppercase tracking-wide">
                Productos
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="!text-ink-medium text-center lg:text-start !text-[1.25rem] !leading-[1.4]">
                Alimentos, accesorios e higiene para tu mascota. Elige un producto y pídelo directo por WhatsApp.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tienda */}
      <section className="w-full py-14 md:py-20 xl:py-24 bg-surface-soft lazy-section">
        <div className="max-w-screen-xl mx-auto px-4">
          <Reveal>
            <h2 className="font-heading !text-[2rem] md:!text-[2.5rem] font-bold text-ink text-center uppercase tracking-wide mb-3">
              Tienda <span className="text-brasa-dark">VET PEDROS</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-ink-medium text-lg text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Todo lo que tu mascota necesita, en un solo lugar. Disponible para envío y recojo en tienda.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productos.map((product, i) => (
              <Reveal key={product.slug} delay={i * 80} className="h-full">
                <div className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {product.category && (
                      <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brasa-dark shadow-sm">
                        {product.category}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="font-heading font-bold text-lg text-ink leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-ink-medium text-sm leading-relaxed flex-1">
                      {product.desc}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-heading font-bold text-xl text-brasa-dark">
                        S/ {product.price}
                      </span>
                      <a
                        href={waLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-2.5 font-bold text-sm transition-colors shadow-md"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Pedir
                      </a>
                    </div>
                  </div>
                </div>
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
              ¿Buscas algo en especial?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-ink-medium text-lg max-w-2xl leading-relaxed">
              Escríbenos y te ayudamos a elegir el producto ideal para tu mascota, con asesoría de nuestro equipo.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola VET PEDROS CHICLAYO, quiero información sobre sus productos.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-dark hover:bg-accent-night text-white px-8 py-3.5 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}