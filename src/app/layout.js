import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const satoshi = localFont({src: "./fonts/Satoshi-Variable.ttf"});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
