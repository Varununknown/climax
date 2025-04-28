import "@/app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppName - The Smart App for Modern Life",
  description:
    "Simplify your daily routine with our intuitive app. Designed to boost productivity and enhance your lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
