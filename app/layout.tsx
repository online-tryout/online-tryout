import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { Header } from "@/components/common/header/header";
import { Toaster as Sooner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import GoogleOAuthProvider from "@/provider/google-oauth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Tryout",
  description: "Achieve your dreams with us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <GoogleOAuthProvider>
          <ThemeProvider>
            <Toaster />
            <Sooner />
            <Header />
            {children}
          </ThemeProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
