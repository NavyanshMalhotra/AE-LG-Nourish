import { Clock, IndianRupee, Leaf, ChefHat } from "lucide-react";
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
        className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
          {r.image ? (
            <img src={r.image} alt={tt(r.name)} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground/40">
              <ChefHat className="h-10 w-10" />
            </div>
          )}
          {r.category && (
            <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold text-maroon shadow-sm">
              {tt(r.category)}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold text-maroon">
            {typeof index === "number" ? `${index}. ` : ""}
            {tt(r.name)}
          </h3>
          {r.tag && (
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">{tt(r.tag)}</p>
          )}

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-turmeric/40 px-2.5 py-1 font-bold text-maroon">
              <IndianRupee className="h-3 w-3" />
              {tt(r.cost)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
              <Clock className="h-3 w-3" />
              {tt(r.time)}
            </span>
          </div>

          <p className="mt-4 line-clamp-2 flex items-start gap-1.5 text-sm">
            <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-foreground/80">{tt(r.benefits)}</span>
          </p>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">
            {tt({ en: "Tap to view recipe →", hi: "रेसिपी देखने के लिए टैप करें →", mr: "रेसिपी पाहण्यासाठी टॅप करा →" })}
          </p>
        </div>
      </article>

      <RecipeDetailDialog recipe={r} open={open} onOpenChange={setOpen} />
    </>
  );
}
