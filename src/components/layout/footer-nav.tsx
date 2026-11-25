"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isFooterLinkActive(pathname: string, href: string): boolean {
  if (href === "/servizi") {
    return (
      pathname === "/servizi" ||
      (pathname.startsWith("/servizi/") &&
        !pathname.startsWith("/servizi/infissi/catalogo"))
    );
  }
  return pathname === href;
}

export function FooterNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigazione footer">
      <ul className="inline-flex flex-wrap items-center justify-start lg:justify-end gap-1 rounded-2xl lg:rounded-full bg-white/[0.05] border border-white/10 p-1">
        {NAV_LINKS.map((link) => {
          const active = isFooterLinkActive(pathname, link.href);
          return (
            <li key={itemHref(link.href)}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-block rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active
                    ? "bg-accent text-[#1a231a] shadow-sm"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function itemHref(href: string) {
  return href;
}
