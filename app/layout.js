import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import ContainedBlock from "@/components/ContainedBlock/ContainedBlock";
const inter = Inter({ subsets: ["latin"] });

// metadata
export const metadata = {
  metadataBase: "https://borel-tg-portfolio-964.vercel.app/",
  title: "Borel T.G",
  description:
    "Get your project started ! - I will develop high-performance web/mobile applications for you",
  twitter: {
    card: "summary_large_image",
  },
  charSet: "UTF-8",
  // favicon metadata
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
