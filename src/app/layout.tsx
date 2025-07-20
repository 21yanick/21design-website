import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { GlobalSpotlight } from "@/components/global-spotlight";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "21design.ch - Webentwicklung & Design",
  description: "Moderne Webentwicklung mit Next.js, Flutter und WordPress. Clean, performante Lösungen für digitale Projekte.",
  keywords: ["Webentwicklung", "Next.js", "Flutter", "WordPress", "Design", "Schweiz"],
  authors: [{ name: "21design.ch" }],
  creator: "21design.ch",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://21design.ch",
    title: "21design.ch - Webentwicklung & Design",
    description: "Moderne Webentwicklung mit Next.js, Flutter und WordPress. Clean, performante Lösungen für digitale Projekte.",
    siteName: "21design.ch",
  },
  twitter: {
    card: "summary_large_image",
    title: "21design.ch - Webentwicklung & Design",
    description: "Moderne Webentwicklung mit Next.js, Flutter und WordPress. Clean, performante Lösungen für digitale Projekte.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <GlobalSpotlight />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster 
            position="top-right"
            expand={true}
            richColors={true}
            closeButton={true}
            toastOptions={{
              style: {
                background: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                color: 'hsl(var(--foreground))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
