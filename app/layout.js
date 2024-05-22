import { Inter, Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import ContainedBlock from "@/components/ContainedBlock/ContainedBlock";

const inter = Inter({ subsets: ["latin"] });
const merianda = Merienda({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Borel T.G",
  description: "I am Borel T.G, Software developer, Entrepreneur and Artist.",
  charSet: "UTF-8",
};

export default function RootLayout({ children }) {
  // bg-[#0a090d] text-white
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8"></meta>
      </Head>
      <body className={`${inter.className}`}>
        {/* navbar */}
        <Navbar />

        {/* children */}
        {children}

        {/* footer */}
        <ContainedBlock>
          <Footer />
        </ContainedBlock>
      </body>
    </html>
  );
}
