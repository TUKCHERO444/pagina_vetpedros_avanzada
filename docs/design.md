# Design — Vet Pedros

Documento autoritativo de identidad visual de la plantilla, personalizada para **VET PEDROS CHICLAYO** (clínica veterinaria en Chiclayo, Perú). Cambios de identidad actualizan este archivo **y** los tokens `@theme` en `app/globals.css` **juntos**.

> **Estado:** sincronizado con el código actual (oct 2026). Los degradados usan un espectro **naranja ligero y cristalino** (translúcidos). Los nombres de token referidos abajo son los reales de `app/globals.css` (`primary-pastel`, `red-brand`, `brasa`, `sol`, `ink-medium`, `haze`, etc.).

---

## 1. Paleta — Azul clínico + Rojo marca + Espectro naranja cristalino

Base blanca con superficies sutiles. Tres familias funcionales: **azul** (salud, énfasis, foco), **rojo** (marca, navegación activa, CTAs de acción) y **naranja/ámbar cristalino** (`sol-pale`, `brasa-pale`, `accent-*`) como atmósfera de gradientes en héroes y bandas, con tonos translúcidos (`/50`–`/80`) sobre blanco para lograr el efecto cristalino.

### 1.1 Primary — Azul Salud

Rol: salud, clínica, confianza. Ya **no** se usa como fondo de héroes; queda en iconos, énfasis de texto, foco de formularios y CTAs secundarios.

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#2563EB` | Círculos icono contacto, `text-primary` en énfasis (misión/visión/valores/Director, "contacto"), icon badges de servicios, `ring-primary` (foco formulario) |
| `primary-dark` | `#1D4ED8` | Hover CTA "Separa tu cita" (Nosotros) |
| `primary-deep` | `#1E40AF` | Franja de nombre en staff cards, énfasis de headings, CTA secundario |
| `primary-night` | `#1E3A8A` | (definido, sin uso activo) |
| `primary-pastel` | `#60A5FA` | (definido, sin uso activo) |
| `primary-soft` | `#93C5FD` | (definido, sin uso activo) |
| `primary-pale` | `#DBEAFE` | (definido, sin uso activo) |
| `primary-paler` | `#EFF6FF` | (definido, sin uso activo) |

**Distribución por componente:**
- `Header.jsx` — ver §1.4 (superficie naranja); logo y nav ya no usan azul
- `page.jsx` — CTA secundario "Nuestros servicios" en tono naranja (`border-brasa` + `text-brasa-dark`, hover `bg-brasa-pale`); sección "Nuestros Servicios": heading y chips `text-brasa-dark` (usa el catálogo `app/data/servicios.jsx`)
- `nosotros/page.jsx` — énfasis misión/visión/valores/Director `text-primary`; CTA "Separa tu cita" `bg-primary hover:bg-primary-dark`; tarjetas valores `border-t-4 border-primary`; franja staff `bg-primary-deep`
- `servicios/page.jsx` — icon badges servicios `text-primary`; círculo hover `bg-primary`
- `productos/page.jsx` — cards de tienda con precio `text-brasa-dark` y botón "Pedir" (ver §8 Productos)
- `contactanos/page.jsx` — círculos icono `bg-primary` + icono `text-white`; headings "contacto" `text-primary`; foco inputs `ring-primary`

### 1.2 Accent — Oro Opaco

Rol: CTA de acción sobre bandas claras y acento de marca en el Footer. Junto con `sol-pale`/`brasa-pale` forma los degradados cristalinos.

| Token | Hex | Uso |
|-------|-----|-----|
| `accent` | `#B5892D` | (definido, sin uso activo desde la migración de CTAs a `accent-dark`) |
| `accent-dark` | `#926B1E` | CTA "Contáctanos"/"Agenda tu cita" (texto blanco — AA) |
| `accent-night` | `#6E5115` | Hover de esos CTAs y barra de copyright del Footer (`bg-accent-night`) |
| `accent-soft` | `#E3C565` | (definido, sin uso activo) |
| `accent-pale` | `#F5E9BF` | Inicio de los degradados de banda CTA (`from-accent-pale`) |

**Distribución por componente:**
- `page.jsx` — banda CTA `from-accent-pale via-sol-pale to-brasa-pale`; botón `bg-accent-dark hover:bg-accent-night`
- `productos/page.jsx` — banda CTA idéntica (`from-accent-pale via-sol-pale to-brasa-pale`); botón "Consultar por WhatsApp" `bg-accent-dark hover:bg-accent-night`
- `Footer.jsx` — "PEDROS" `text-sol-pale`; links `hover:text-sol-pale`; copyright `bg-accent-night` (ver §1.4)

### 1.3 Red — Rojo Marca

Rol: marca, acción y navegación activa. Sin cambios respecto al esquema anterior.

| Token | Hex | Uso |
|-------|-----|-----|
| `red-brand` | `#DC2626` | (definido; sin uso activo desde la migración de la página de Especialidades a Productos) |
| `red-dark` | `#B91C1C` | (definido, sin uso activo) |
| `red-deep` | `#991B1B` | Badge "VET PEDROS CHICLAYO" del hero, CTAs principales de Inicio ("Agenda tu cita", "Reserva ahora"), botón submit del formulario |
| `red-night` | `#7F1D1D` | Hover de los CTAs `red-deep` |
| `red-soft` | `#FCA5A5` | (definido, sin uso activo) |
| `red-pale` | `#FEE2E2` | (definido, sin uso activo desde la migración del hero) |

### 1.4 Brasa & Sol — Espectro naranja cristalino

Rol: **degradados de héroes y bandas**. Antes sin uso; ahora son la base del espectro translúcido.

| Token | Hex | Uso |
|-------|-----|-----|
| `brasa` | `#EA580C` | Inicio degradado Header (`from-brasa`), pill nav activo del drawer móvil (`bg-brasa text-white`) |
| `brasa-dark` | `#C2410C` | Fin degradado Header (`to-brasa-dark`), texto de nav y de pill activo desktop (`text-brasa-dark`), links del drawer (`text-brasa-dark`), énfasis de **texto** en hero de Inicio e intro ("seriedad", "calidez", "¡Prevenir!", etc.), CTA secundario "Nuestros servicios" (`border-brasa`), chips de la sección "Nuestros Servicios" de Inicio, fondo principal del Footer (`bg-brasa-dark`) |
| `brasa-pale` | `#FFEDD5` | Fin de gradiente hero Inicio (`to-brasa-pale/60`), fin de bandas CTA (`to-brasa-pale`), hover CTA secundario (`hover:bg-brasa-pale`) |
| `sol` | `#F59E0B` | (definido, sin uso activo) |
| `sol-pale` | `#FEF3C7` | Inicio gradiente hero Inicio (`from-sol-pale/80`), base de héroes de subpágina (`bg-sol-pale`), fade de fotos (`to-sol-pale`), centro de bandas CTA (`via-sol-pale`), hover de links del Footer (`hover:text-sol-pale`); fue el color del texto "PEDROS" cuando el logo era texto (hoy el logo es imagen `logovetpedros.png`) |

**Distribución por componente (Header y Footer naranjas):**
- `Header.jsx` — fondo `bg-gradient-to-r from-brasa to-brasa-dark`; logo: imagen `public/imgs/logovetpedros.png` (`h-12`) con `alt` "VET PEDROS CHICLAYO"; nav desktop `text-[17px] font-semibold text-white` con pill activo `bg-white text-brasa-dark`; drawer móvil: links `text-brasa-dark` y pill activo `bg-brasa text-white`
- `Footer.jsx` — fondo principal `bg-brasa-dark`, logo: imagen `logovetpedros.png` (`h-14`, `mx-auto md:mx-0`), social icons `hover:text-brasa-dark`, links `hover:text-sol-pale`, barra copyright `bg-accent-night`

### 1.5 Ink — Texto

| Token | Hex | Uso |
|-------|-----|-----|
| `ink` | `#0F172A` | Texto principal — headings, títulos, héroes sobre fondo claro, barras del menú (`bg-ink`) |
| `ink-medium` | `#475569` | Texto secundario — descripciones, héroes, párrafos desaturados |
| `haze` | `#94A3B8` | (definido, sin uso activo) |

### 1.6 Neutros — Fondos y Bordes

| Token | Hex | Uso |
|-------|-----|-----|
| `paper` | `#FFFFFF` | Fondo base del `body` (`bg-paper`), cards sobre superficies, centro de gradientes (`via-paper/50`) |
| `surface` | `#F8FBFF` | Drawer de menú móvil (Header) |
| `surface-soft` | `#F0F7FE` | Secciones alternas: Promos, Valores, Staff, grids de Servicios y de Productos |
| `line` | `#E2E8F0` | Borde de chips de servicios destacados (`border-line/50`, Inicio) |
| `line-soft` | `#EEF4F9` | (definido, sin uso activo) |
| `white` | `#FFFFFF` | Fondo de cards, logos y CTAs secundarios; `text-white` sobre fondos rojos/ámbar oscuros |
| `gray-300` | — | Bordes de campos del formulario y del botón de menú |
| `gray-200` | — | Fondo de la sección del mapa |
| `gray-600` | — | Icono "cerrar" del drawer |
| `black/40` | — | Overlay del drawer móvil |

### 1.7 Night — Modo oscuro (definidos, sin uso activo)

| Token | Hex | Uso |
|-------|-----|-----|
| `night` | `#0B2540` | (definido, sin uso) |
| `night-card` | `#16324F` | (definido, sin uso) |
| `night-ink` | `#E0F2FE` | (definido, sin uso) |
| `night-muted` | `#9FB6CC` | (definido, sin uso) |

---

## 2. Reglas de Distribución de Color

### 2.1 Asignación por dominio

| Dominio | Color principal | Razonamiento |
|---------|----------------|--------------|
| Salud / clínica / servicios | `primary` (azul) | Confianza, profesionalismo médico |
| Marca, navegación activa, CTAs de acción | `red` (`red-brand`/`red-deep`) | Identidad y urgencia |
| **Degradados / atmósfera cristalina** | `sol-pale` / `brasa-pale` / `accent-pale` | Naranja ligero, translúcido, aireado |
| CTA sobre bandas claras | `accent-dark` / `accent-night` | Acción diferenciada con contraste AA |
| Texto principal / secundario | `ink` / `ink-medium` | Legibilidad sobre fondos claros |
| Fondos / superficies | `paper` / `surface-soft` | Blancura cristalina con sutiles diferenciaciones |

### 2.2 Reglas de contraste (WCAG AA)

- Texto blanco sobre `red-deep`, `red-night`, `accent-dark`, `accent-night` → supera AA (verificado)
- Texto blanco sobre `red-brand` (`#DC2626`) → ~4.5:1, cumple AA para texto normal
- Texto blanco sobre `brasa-dark` (`#C2410C`) → ~4.6:1, cumple AA (nav del Header y texto del Footer)
- Pill nav activo del Header: `bg-white` + `text-brasa-dark` → AA (el texto claro cae sobre `brasa-dark`, no sobre `brasa`)
- `ink` / `ink-medium` sobre `sol-pale`, `brasa-pale`, `accent-pale`, `paper` → AAA (héroes y bandas claras)
- `primary-deep` sobre blanco → AAA
- Foco de formularios: `ring-primary` sobre campos blancos → visible y no dependiente solo de color

### 2.3 Reglas de uso

- **Los degradados siempre en espectro naranja ligero y translúcido** (`/50`–`/80` sobre blanco — "cristalino"); nunca azul/rojo fríos
- **El énfasis de texto en secciones claras usa UN único tono naranja (`brasa-dark`)** — nunca mezclar azul y rojo en el mismo bloque (hero, intro)
- Sobre fondos de gradiente claro, usar SIEMPRE `ink`/`ink-medium` (nunca `text-white`)
- El texto blanco solo sobre variantes `*-deep`, `*-night`, `*-dark`, `red-brand` o `primary*` sólidos
- **Header y Footer usan naranja** (`brasa`/`brasa-dark`) como superficie de marca: texts y nav en `text-white` (AA sobre `brasa-dark`; la parte `brasa` lleva el pill blanco, no texto pequeño)
- El **azul (`primary`)** queda para iconos, énfasis y CTAs secundarios — no para héroes ni header/footer
- El **rojo (`red`)** es marca + acción: CTAs principales, badges
- Los **huecos** `sol` (medio) y `accent` base están reservados; si se usan con texto blanco, verificar contraste
- Los tokens `night` están definidos pero sin uso activo — disponibles para un futuro modo oscuro

### 2.4 Sistema de degradados (espectro naranja cristalino)

| Sitio | Gradiente | Opacidad |
|-------|-----------|----------|
| Header | `from-brasa to-brasa-dark` | 100% (superficie de marca; nav `text-white`) |
| Hero Inicio | `from-sol-pale via-paper to-brasa-pale` | `/80` → `/50` → `/60` (sobre foto `opacity-20`) |
| Héroes de subpágina | `bg-sol-pale` + fade `from-transparent to-sol-pale` sobre foto | sólido / 100% |
| Banda CTA (Inicio, Productos) | `from-accent-pale via-sol-pale to-brasa-pale` | 100% (fondo de sección clara) |

- Todos los sitios con degradado usan texto `ink`/`ink-medium` (contraste AAA)
- Los CTAs sobre bandas claras usan `bg-accent-dark hover:bg-accent-night` con texto blanco

### 2.5 Modal de detalle de servicios (página Servicios)

- Al hacer clic en una card se abre un modal (`role="dialog"`, `aria-modal`, `aria-labelledby` al título del servicio)
- **Foco/teclado:** foco inicial al botón de cerrar, tabulación atrapada en el panel, `Escape` cierra, y al cerrar se devuelve el foco al botón de la card
- Fondo: scroll bloqueado mientras está abierto; backdrop `bg-black/70` cierra al hacer clic
- **Foco visible** en controles: `focus-visible:ring-2` `ring-brasa` (WCAG AA)
- **Imágenes:** miniatura en card `w=600&q=80` (`loading="lazy"`) y vista ampliada en modal `w=1400&q=80` (optimización de carga)
- Modal `z-[80]` (por encima de drawer `z-[70]` y header `z-[60]`); panel `max-w-3xl bg-white rounded-2xl` con la imagen en cabecera
- Catálogo único compartido en `app/data/servicios.jsx` (Inicio y Servicios)

### 2.6 Motion y animaciones

- **Entrada del header:** keyframe `header-in` (slide-down + fade) vía `.animate-header-in` en `Header.jsx`
- **Reveal en scroll:** componente `app/components/Reveal.jsx` (IntersectionObserver, `threshold ≈ 0.12`, margen inferior −8%). Fade-up + `translate-y-6` → visible en 700 ms con curva `cubic-bezier(0.22, 1, 0.36, 1)`; `delay` por prop para **stagger** en grillas (≈70–100 ms por ítem, máximo ~300 ms en héroes)
- **Alcance:** heroes (badge/h1/p/CTAs), secciones intro, grillas (servicios, productos, valores, staff, promos), bandas CTA, Footer
- **Accesibilidad:** si `prefers-reduced-motion: reduce` el `Reveal` se muestra visible de inmediato; override global en `globals.css` (duraciones ~0 y `scroll-behavior: auto`). Sin animaciones decorativas infinitas

---

## 3. Tipografía

| Familia | Token Tailwind | Rol | Pesos |
|---------|---------------|-----|-------|
| **Oswald** | `font-heading` | Títulos, headings, logo, héroes, labels de sección | 400, 500, 600, 700 |
| **Inter** | `font-body` | Cuerpo de texto, descripciones, UI, formulario | 400, 500, 600, 700 |

- Oswald en logo, héroes y headings, mayormente con `uppercase` + `tracking-wide`. En Nosotros algunos headings (p. ej. "Nuestra misión") usan `font-heading` sin `uppercase`
- Nav del Header: Inter `17px` `font-semibold` en blanco (sobre naranja); logo Oswald `28px` `font-bold`
- Inter para todo texto de lectura y campos
- Cargadas via Google Fonts `<link>` en `app/layout.jsx` (no `next/font`)

---

## 4. Brand Mark

- **Logo:** imagen local `public/imgs/logovetpedros.png`. Marca comercial textual en mayúsculas: **VET PEDROS CHICLAYO** (CHICLAYO = ciudad sede); con `font-heading` + `font-bold` + `tracking-wide` cuando se escribe como texto
- **Header:** enlace del logo con imagen `h-12 w-auto`, `alt` "VET PEDROS CHICLAYO", `aria-label` "VET PEDROS CHICLAYO - Inicio"
- **Footer:** imagen `h-14 w-auto`, centrada en móvil (`mx-auto md:mx-0`)
- Referencias textuales de marca en mayúsculas: metadata (`app/layout.jsx`), badge del hero de Inicio, h1 de Nosotros, copyright del Footer
- **Imágenes locales** de la clínica en `public/imgs/`: `entradaprincipal`, `saladeatencion1`, `saladeespera`, `saladeespera2`, `saladecirugia`, `saladecirugia2`, `hematologico`, `laboratorio` (usadas en hero Inicio/Nosotros, promos, héroes y cards de servicios) y `tiendadepructos.jpeg` (foto de la tienda, hero de Productos)

---

## 5. Sombras y Elevación

No se usan sombras con tinte de color (`shadow-primary/*`, `shadow-red/*` ya no existen). Elevación actual:

| Clase | Uso |
|-------|-----|
| `shadow-[0_1px_8px_rgba(0,0,0,0.15)]` | Header sticky (naranja) |
| `shadow-md` | Cards (promos, servicios, valores, staff, productos) |
| `hover:shadow-lg` | Hover de chips de servicios (Inicio) y cards de servicios con modal |
| `shadow-lg` | CTAs principales (hero, bandas) y formulario de contacto |
| `shadow-[0_0_12px_rgba(0,0,0,0.10)]` | Label pill "MÉDICOS" (Nosotros) |
| `shadow-md` | Badge hero "Vet Pedros", botón submit |
| `shadow-2xl` | Drawer de menú móvil |
| `shadow-sm` | Nav link activo |

---

## 6. Fondos por Sección

| Sección | Fondo |
|---------|-------|
| Header | `bg-gradient-to-r from-brasa to-brasa-dark` sticky |
| Hero Inicio | Gradiente translúcido `from-sol-pale/80 via-paper/50 to-brasa-pale/60` sobre foto `opacity-20` |
| Intro Inicio | `bg-paper` (default) |
| Promos | `bg-surface-soft` |
| Servicios destacados (Inicio) | `bg-paper` (default) |
| CTA Inicio / Productos | Gradiente claro `from-accent-pale via-sol-pale to-brasa-pale` + texto `ink` |
| Héroes (Nosotros, Servicios, Productos, Contáctanos) | `bg-sol-pale` + foto con fade `to-sol-pale` + texto `ink`/`ink-medium` |
| Misión/Visión y CEO (Nosotros) | `bg-paper` |
| Valores y Staff (Nosotros) | `bg-surface-soft` |
| Grid servicios (página Servicios) | `bg-surface-soft`; cards con imagen miniatura + modal de detalle (ver §2.5) |
| Grid productos (página Productos) | `bg-surface-soft`; cards blancas con badge de categoría, precio y botón "Pedir" de WhatsApp (ver §8) |
| Contacto info + form | `bg-paper`; form card `bg-white` |
| Mapa | `bg-gray-200` |
| Footer principal | `bg-brasa-dark` |
| Footer copyright | `bg-accent-night` |

---

## 7. Tokens No Usados (disponibles / candidatos a eliminar)

Definidos en `globals.css` pero **sin uso en ningún componente** actualmente:

- `--color-primary-pastel` (#60A5FA)
- `--color-primary-soft` (#93C5FD)
- `--color-primary-pale` (#DBEAFE)
- `--color-primary-paler` (#EFF6FF)
- `--color-primary-night` (#1E3A8A)
- `--color-red-dark` (#B91C1C)
- `--color-red-soft` (#FCA5A5)
- `--color-red-pale` (#FEE2E2)
- `--color-accent` (#B5892D) — base, hoy sin uso
- `--color-accent-soft` (#E3C565) — antes en Footer (logo/hover)
- `--color-sol` (#F59E0B)
- `--color-haze` (#94A3B8)
- `--color-line-soft` (#EEF4F9)
- `--color-night`, `--color-night-card`, `--color-night-ink`, `--color-night-muted` (bloque night completo — reservado para modo oscuro futuro)

---

## 8. Página Productos / Tienda

Reemplaza a la antigua página de Especialidades (`/especialidades` → `/productos`). Nav del Header y quickLinks del Footer usan "Productos".

- **Hero:** patrón estándar `bg-sol-pale` (ver §2.4) con foto `public/imgs/tiendadepructos.jpeg` a la derecha (`lg:w-1/2`), fade `from-sol-pale`, h1 y p con `Reveal` (delay 0/100)
- **Tienda:** sección `bg-surface-soft` con heading "Tienda VET PEDROS" y grid de 10 cards (`grid-cols-1 sm:2 lg:4`, gap-6, `Reveal` stagger `i*80`)
  - Card: `bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full`; imagen `h-56 object-cover` con `loading="lazy"` `decoding="async"` y zoom `group-hover:scale-105`; badge de categoría `bg-white/95 text-brasa-dark rounded-full`; precio `font-heading font-bold text-xl text-brasa-dark`
  - **Botón "Pedir" (WhatsApp):** verde `bg-[#25D366] hover:bg-[#1DA851]`, `rounded-full text-white font-bold text-sm`, icono WhatsApp `w-4 h-4`, abre `https://wa.me/51943841602?text=<mensaje>` (encodeURIComponent) con el nombre y precio del producto pre-cargados
- **CTA:** banda clásica `from-accent-pale via-sol-pale to-brasa-pale` con botón "Consultar por WhatsApp" `bg-accent-dark hover:bg-accent-night` hacia `wa.me` con mensaje genérico
- **Datos:** catálogo único en `app/data/productos.jsx` (10 ítems: slug, name, category, price, desc, img). Número WhatsApp actual `+51 943 841 602` → `51943841602` (constante `WA_NUMBER` en `app/productos/page.jsx`)