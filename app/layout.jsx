import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "VET PEDROS CHICLAYO - Clínica Veterinaria Especializada",
  description:
    "Clínica veterinaria especializada en Chiclayo con cirugía, especialidades, laboratorio propio y atención integral para tu mascota.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-ink bg-paper">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}