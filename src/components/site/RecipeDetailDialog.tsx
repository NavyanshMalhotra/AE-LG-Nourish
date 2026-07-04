import { Clock, IndianRupee, Leaf, ChefHat, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Recipe } from "@/lib/recipes";
import { useI18n } from "@/lib/i18n";

export function RecipeDetailDialog({
  recipe,
  open,
  onOpenChange,
}: {
  recipe: Recipe;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { tt } = useI18n();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto p-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
          {recipe.image ? (
            <img src={recipe.image} alt={tt(recipe.name)} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground/40">
              <ChefHat className="h-12 w-12" />
            </div>
          )}
          {recipe.category && (
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-maroon shadow-sm">
              {tt(recipe.category)}
            </span>
          )}
        </div>

        <div className="px-6 pb-6 pt-5">
          <DialogHeader className="text-left">
            <DialogTitle className="font-display text-2xl text-maroon">
              {tt(recipe.name)}
            </DialogTitle>
            {recipe.tag && (
              <DialogDescription className="text-xs font-semibold uppercase tracking-wide text-primary">
                {tt(recipe.tag)}
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-turmeric/40 px-2.5 py-1 font-bold text-maroon">
              <IndianRupee className="h-3 w-3" />
              {tt(recipe.cost)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
              <Clock className="h-3 w-3" />
              {tt(recipe.time)}
            </span>
          </div>

          <section className="mt-5">
            <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
              <Sparkles className="h-4 w-4 text-primary" /> {tt({ en: "Ingredients", hi: "सामग्री", mr: "साहित्य" })}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">
              {tt(recipe.ingredients)}
            </p>
          </section>

          <section className="mt-5">
            <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
              <ChefHat className="h-4 w-4 text-primary" /> {tt({ en: "How to make it", hi: "कैसे बनाएं", mr: "कसे बनवायचे" })}
            </h4>
            <ol className="mt-2 space-y-2.5 text-sm">
              {recipe.steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-foreground/85 leading-relaxed">{tt(s)}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-5 rounded-xl bg-secondary/60 p-4">
            <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
              <Leaf className="h-4 w-4 text-primary" /> {tt({ en: "Nutrition benefits", hi: "पोषण लाभ", mr: "पोषण फायदे" })}
            </h4>
            <p className="mt-1.5 text-sm text-foreground/85">{tt(recipe.benefits)}</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
