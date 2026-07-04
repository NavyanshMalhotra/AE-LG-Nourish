import { Clock, IndianRupee, Leaf, ChefHat, Sparkles } from "lucide-react";
import { useState } from "react";
import type { Recipe } from "@/lib/recipes";
import { useI18n } from "@/lib/i18n";
import { RecipeDetailDialog } from "./RecipeDetailDialog";

export function RecipeCard({ r, index }: { r: Recipe; index?: number }) {
  const [open, setOpen] = useState(false);
  const { tt } = useI18n();

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-white/40 bg-white/70 bg-gradient-to-br from-white/80 to-white/40 p-6 text-left shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] active:scale-[0.98]"
      >
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
        <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-turmeric/10 blur-xl transition-all duration-500 group-hover:bg-turmeric/20" />

        <div className="relative z-10 flex flex-1 flex-col">
          {r.category && (
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-maroon shadow-sm backdrop-blur-md border border-border/50">
                {tt(r.category)}
              </span>
            </div>
          )}

          <h3 className="font-display text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
            {typeof index === "number" ? `${index}. ` : ""}
            {tt(r.name)}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-turmeric/30 px-2.5 py-1 font-bold text-maroon border border-turmeric/50">
              <IndianRupee className="h-3.5 w-3.5" />
              {tt(r.cost)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-2.5 py-1 font-semibold text-secondary-foreground border border-border/50">
              <Clock className="h-3.5 w-3.5" />
              {tt(r.time)}
            </span>
          </div>

          <p className="mt-5 line-clamp-3 flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
            <span>{tt(r.benefits)}</span>
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-hover:text-primary">
            {tt({ en: "View Recipe", hi: "रेसिपी देखें", mr: "रेसिपी पहा" })}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>

      <RecipeDetailDialog recipe={r} open={open} onOpenChange={setOpen} />
    </>
  );
}
