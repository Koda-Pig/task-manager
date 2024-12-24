import Link from "next/link";
import { LogoSVG } from "../react-icons";

export function AppLogo() {
  return (
    <Link
      href="/"
      className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2"
    >
      <LogoSVG />
      <span className="text-[2rem] font-semibold">DNX</span>
    </Link>
  );
}
