import localFont from "next/font/local";
import Header from "@/compnents/header";
import Footer from "@/compnents/footer";

import "./globals.css";
import KakaoInit from "@/compnents/kakao-init";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "500 920",
  variable: "--font-pretendard",
});

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <KakaoInit />
      <body className={`${pretendard.className}`}>
        <div className="mx-5 md:mx-20 lg:mx-40 bg-white min-h-screen p-2">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
