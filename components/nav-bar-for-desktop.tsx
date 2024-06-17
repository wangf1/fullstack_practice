"use client";

import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";
import { routes } from "./routes";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes
        .filter((route) => !route.hidden)
        .map((route) => (
          <NavButton
            key={route.href}
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
          ></NavButton>
        ))}
    </nav>
  );
};
