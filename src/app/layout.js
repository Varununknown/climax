import "@/app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Climax",
  description:
    "Introducting the Brand new ... Climax, ott platfrorm with an exaiting feature",
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
