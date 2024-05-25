import "./globals.css";
import {Inter} from "next/font/google";
import {ViewTransitions} from "next-view-transitions";
import {ThemeProvider} from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-background selection:bg-rose-700`}>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system" disableTransitionOnChange>
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
