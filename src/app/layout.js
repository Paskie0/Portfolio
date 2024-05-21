import localFont from "next/font/local";
import "./globals.css";
import {ViewTransitions} from "next-view-transitions";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const satoshi = localFont({src: "./fonts/Satoshi-Variable.ttf"});

export default function RootLayout({children}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${satoshi.className} bg-background selection:bg-rose-700 selection:`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
