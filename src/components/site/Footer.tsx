import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-16 border-t border-border bg-cream pb-24 lg:pb-8">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
        <div className="font-display text-lg font-bold text-maroon">NOURISH</div>
        <p className="mt-1">{t("footer_note")}</p>
        <p className="mt-3 text-xs">© {new Date().getFullYear()} NOURISH · {t("disclaimer_general")}</p>
      </div>
    </footer>
  );
}
