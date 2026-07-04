import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { LANGS, useI18n, type Lang } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang, tt } = useI18n();
  const navItems = [
    { to: "/", label: tt({ en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" }) },
    { to: "/planner", label: tt({ en: "Planner", hi: "योजनाकार", mr: "योजनाकार" }) },
    { to: "/recipes", label: tt({ en: "Recipes", hi: "रेसिपी", mr: "रेसिपी" }) },
    { to: "/ingredients", label: tt({ en: "Ingredients", hi: "सामग्री", mr: "साहित्य" }) },
    { to: "/videos", label: tt({ en: "Videos", hi: "वीडियो", mr: "व्हिडिओ" }) },
    { to: "/consult", label: tt({ en: "Consult", hi: "सलाह", mr: "सल्ला" }) },
  ] as const;


  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-xl font-bold tracking-tight text-maroon">
            NOURISH
          </span>
        </Link>

        <nav className="ml-4 hidden flex-1 items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-1.5 text-sm font-semibold bg-primary/10 text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 rounded-full border border-border bg-card p-1">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code as Lang)}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                lang === l.code
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-accent"
              }`}
              aria-label={l.label}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
