import localFont from "next/font/local";
import "./globals.css";

// importing toast messager
import { Toaster } from "@/components/ui/toaster"

//  importing components
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensure fallback font is used during load
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Naveen Captures Photography | Professional Photography Services",
  description: "Explore the art of timeless photography with Naveen Captures. Specializing in portraits, events, weddings, and commercial photography, we bring your stories to life with creativity and precision. Book your session today and create lasting memories.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="mx-auto">
            <Header />
            <main>{children}</main>
            <Toaster/>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
