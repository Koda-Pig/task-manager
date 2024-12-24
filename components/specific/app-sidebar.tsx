import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppLogo } from "@/components/specific/app-logo";
import {
  BookSVG,
  CategorySVG,
  UserOctagonSVG,
  MessageSVG,
  SettingSVG,
} from "../react-icons";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: CategorySVG,
      isActive: true,
    },
    {
      title: "Task",
      icon: BookSVG,
      url: "#",
    },
    {
      title: "Mentors",
      icon: UserOctagonSVG,
      url: "#",
    },
    {
      title: "Message",
      icon: MessageSVG,
      url: "#",
    },
    {
      title: "Settings",
      icon: SettingSVG,
      url: "#",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="p-8">
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <Link href={item.url}>
                      <item.icon className="!w-6 !h-6" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
