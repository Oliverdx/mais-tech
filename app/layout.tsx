import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { INSTAGRAM } from "./constants";

const poppinsSans = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#5D38F1' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: "Mais Tech | Soluções em Segurança Eletrônica",
  description: "Soluções em Segurança Eletrônica",
  metadataBase: new URL("https://maistech.grupomais.srv.br"),
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://maistech.grupomais.srv.br",
    title: "Mais Tech",
    description: "Soluções em Segurança Eletrônica",
    siteName: "Mais Tech",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mais Tech – automação de mensagens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@soulplusdigital",
    title: "Mais Tech",
    description: "Soluções em Segurança Eletrônica",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} antialiased`}
      >
        {children}
      </body>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mais Tech",
            url: "https://maistech.grupomais.srv.br",
            logo: `${"https://maistech.grupomais.srv.br"}/images/logo.png`,
            sameAs: [
              INSTAGRAM
            ],

          }),
        }}
      />
      <Script id="register-sw" strategy="afterInteractive">
        {`
        if ("serviceWorker" in navigator) {
          window.addEventListener("load", () => {
            navigator.serviceWorker
              .register("/sw.js")
              .then(reg => console.log("Service Worker registrado:", reg.scope))
              .catch(err => console.error("Erro ao registrar SW:", err));
          });
        }
      `}
      </Script>
    </html>
  );
}
