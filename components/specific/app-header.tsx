import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface AppHeaderProps {
  title: string;
  subTitle?: string;
}

export function AppHeader({ title, subTitle }: Readonly<AppHeaderProps>) {
  return (
    <header className="flex shrink-0 items-center gap-2 p-8">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div>
        <h1 className="text-2xl">{title}</h1>
        {subTitle && <h2 className="mt-2">{subTitle}</h2>}
      </div>
      <Image
        alt="user profile picture"
        width={52}
        height={52}
        className="rounded-full ml-auto"
        src="https://i.pravatar.cc/128"
      />
    </header>
  );
}
