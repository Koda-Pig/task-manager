"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Providers({ children }: ProvidersProps) {
  return (
    <SidebarProvider>
      <>{children}</>
    </SidebarProvider>
  );
}
