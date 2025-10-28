import "./globals.css";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/Footer";
import GlobalLoader from '@/components/utils/Loader/GlobalLoader'

export const metadata = {
  title: "BmCode",
  description: "Empresa de Tecnologia",
    icons: {
    icon: "./favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={''}>
        <GlobalLoader>
          <Header />
          {children}
          <Footer />
        </GlobalLoader>
      </body>
    </html>
  );
}