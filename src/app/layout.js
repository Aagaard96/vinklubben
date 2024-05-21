import Navbar from "@/components/navbar";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";


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
        </NextUIProvider>
      </body>
    </html >
  );
}
