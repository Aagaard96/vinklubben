import Navbar from "@/components/navbar";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/footer";


export const metadata = {
  title: "Vinklubben's Vinkælder",
  description: "Klubbens egen vinkælder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <NextUIProvider>
          <Navbar />
          {children}
          <Footer/>
        </NextUIProvider>
      </body>
    </html >
  );
}
