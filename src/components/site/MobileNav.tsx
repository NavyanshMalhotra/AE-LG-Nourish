import { Link } from "@tanstack/react-router";
import { Home, Video, Apple, Phone, ChefHat, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function MobileNav() {
  const { tt } = useI18n();
  const items = [
    { to: "/", label: tt({ en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" }), icon: Home },
    { to: "/planner", label: tt({ en: "Plan", hi: "योजना", mr: "योजना" }), icon: Sparkles },
    { to: "/recipes", label: tt({ en: "Recipes", hi: "रेसिपी", mr: "रेसिपी" }), icon: ChefHat },
    { to: "/ingredients", label: tt({ en: "Foods", hi: "खाद्य", mr: "अन्न" }), icon: Apple },
    { to: "/videos", label: tt({ en: "Videos", hi: "वीडियो", mr: "व्हिडिओ" }), icon: Video },
    { to: "/consult", label: tt({ en: "Consult", hi: "सलाह", mr: "सल्ला" }), icon: Phone },
  ] as const;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <ul className="mx-auto flex max-w-6xl items-stretch justify-between px-1 py-1">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <li key={it.to} className="flex-1">
              <Link
                to={it.to}
                activeOptions={{ exact: it.to === "/" }}
                className="flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-medium text-foreground/60"
                activeProps={{ className: "flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-semibold text-primary" }}
              >
                <Icon className="h-5 w-5" />
                <span className="truncate">{it.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
