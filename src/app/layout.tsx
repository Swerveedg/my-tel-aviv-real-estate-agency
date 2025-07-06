import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tel Aviv Estates - Premium Real Estate in Tel Aviv",
  description: "Discover exclusive luxury properties in Tel Aviv's most prestigious neighborhoods. Premium real estate with Mediterranean views, modern amenities, and exceptional service.",
  keywords: [
    "Tel Aviv real estate",
    "luxury properties Tel Aviv",
    "apartments for sale Tel Aviv",
    "real estate agency Tel Aviv",
    "Mediterranean properties",
    "Tel Aviv apartments",
    "luxury homes Tel Aviv",
    "real estate investment Tel Aviv",
    "property management Tel Aviv",
    "exclusive properties Tel Aviv"
  ],
  authors: [{ name: "Tel Aviv Estates" }],
  creator: "Tel Aviv Estates",
  publisher: "Tel Aviv Estates",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  metadataBase: new URL('https://tel-aviv-estates.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tel-aviv-estates.com',
    siteName: 'Tel Aviv Estates',
    title: 'Tel Aviv Estates - Premium Real Estate in Tel Aviv',
    description: 'Discover exclusive luxury properties in Tel Aviv\'s most prestigious neighborhoods. Premium real estate with Mediterranean views, modern amenities, and exceptional service.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tel Aviv Estates - Premium Real Estate',
      },
      {
        url: '/img/og-image-mobile.jpg',
        width: 600,
        height: 315,
        alt: 'Tel Aviv Estates - Premium Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@telavivestates',
    creator: '@telavivestates',
    title: 'Tel Aviv Estates - Premium Real Estate in Tel Aviv',
    description: 'Discover exclusive luxury properties in Tel Aviv\'s most prestigious neighborhoods.',
    images: ['/img/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Real Estate',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Tel Aviv Estates',
    startupImage: [
      {
        url: '/img/apple-touch-startup-image-768x1004.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
      {
        url: '/img/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 1536px) and (device-height: 2008px)',
      },
    ],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1e3a8a',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#1e3a8a',
    'msapplication-config': '/browserconfig.xml',
    'application-name': 'Tel Aviv Estates',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Tel Aviv Estates',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#1e3a8a',
    'msapplication-TileImage': '/mstile-144x144.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        
        {/* Structured Data for Real Estate */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Tel Aviv Estates",
              "description": "Premium real estate agency specializing in luxury properties in Tel Aviv",
              "url": "https://tel-aviv-estates.com",
              "logo": "https://tel-aviv-estates.com/logo.png",
              "image": "https://tel-aviv-estates.com/img/hero-image.jpg",
              "telephone": "+972-3-123-4567",
              "email": "info@tel-aviv-estates.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Rothschild Boulevard",
                "addressLocality": "Tel Aviv",
                "addressRegion": "Tel Aviv District",
                "postalCode": "6688101",
                "addressCountry": "IL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.0853,
                "longitude": 34.7818
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-14:00",
              "priceRange": "$$$",
              "areaServed": {
                "@type": "City",
                "name": "Tel Aviv"
              },
              "sameAs": [
                "https://www.facebook.com/telavivestates",
                "https://www.instagram.com/telavivestates",
                "https://www.linkedin.com/company/tel-aviv-estates"
              ]
            })
          }}
        />
        
        {/* Additional meta tags for mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tel Aviv Estates" />
        <meta name="application-name" content="Tel Aviv Estates" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Security headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Performance optimizations */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
        style={{ touchAction: 'manipulation' }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 