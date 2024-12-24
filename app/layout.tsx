import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "./providers";
import { AppSidebar } from "@/components/specific/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
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
      <body className={`${jakartaSans.variable} antialiased`}>
        <Providers>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </Providers>
      </body>
    </html>
  );
}
