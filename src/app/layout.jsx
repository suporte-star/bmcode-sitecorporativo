import "./globals.css";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/Footer";

export const metadata = {
  title: "BmCode",
  description: "Empresa de Tecnologia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={''}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}