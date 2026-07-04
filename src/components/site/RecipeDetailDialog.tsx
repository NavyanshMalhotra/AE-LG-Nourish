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
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-[32px] border border-white/40 bg-white/95 p-0 shadow-[0_16px_64px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
        {/* Soft gradient background effect */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-primary/5 via-transparent to-turmeric/5" />

        <div className="px-8 pb-10 pt-10">
          <DialogHeader className="text-left">
            {recipe.category && (
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
                {tt(recipe.category)}
              </span>
            )}
            <DialogTitle className="font-display text-4xl font-bold leading-tight text-foreground">
              {tt(recipe.name)}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-turmeric/20 px-4 py-2 font-bold text-maroon border border-turmeric/40 shadow-sm">
              <IndianRupee className="h-4 w-4" />
              {tt(recipe.cost)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-semibold text-secondary-foreground border border-border/50 shadow-sm">
              <Clock className="h-4 w-4" />
              {tt(recipe.time)}
            </span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Ingredients Section */}
            <section className="relative overflow-hidden rounded-[24px] border border-white/50 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/10 blur-xl" />
              <h4 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <Sparkles className="h-5 w-5 text-primary" /> {tt({ en: "Ingredients", hi: "सामग्री", mr: "साहित्य" })}
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                {tt(recipe.ingredients)}
              </p>
            </section>

            {/* Benefits Section */}
            <section className="relative overflow-hidden rounded-[24px] border border-white/50 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-turmeric/10 blur-xl" />
              <h4 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <Leaf className="h-5 w-5 text-primary" /> {tt({ en: "Nutrition benefits", hi: "पोषण लाभ", mr: "पोषण फायदे" })}
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                {tt(recipe.benefits)}
              </p>
            </section>
          </div>

          <section className="mt-8 rounded-[24px] border border-border/50 bg-card p-6 shadow-sm sm:p-8">
            <h4 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
              <ChefHat className="h-6 w-6 text-primary" /> {tt({ en: "How to make it", hi: "कैसे बनाएं", mr: "कसे बनवायचे" })}
            </h4>
            <ol className="mt-6 space-y-4">
              {recipe.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary border border-primary/20 shadow-sm">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-foreground/85 pt-1">{tt(s)}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
