import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "./providers";
import { AppSidebar } from "@/components/specific/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Task manager",
  description: "Task manager with shadcn and next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </Providers>
      </body>
    </html>
  );
}
