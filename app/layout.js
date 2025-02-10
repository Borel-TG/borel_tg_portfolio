import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import Script from "next/script";
import ContainedBlock from "@/components/ContainedBlock/ContainedBlock";
const inter = Inter({ subsets: ["latin"] });

// metadata
export const metadata = {
  metadataBase: "https://borel-tg-portfolio-964.vercel.app/",
  title: "I'm Borel T.G 🙂",
  description:
    "🚀 Let’s launch your project today! I’ll develop a high-performance web/mobile application tailored to your needs.",
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
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta charSet="UTF-8"></meta>
      </Head>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
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
