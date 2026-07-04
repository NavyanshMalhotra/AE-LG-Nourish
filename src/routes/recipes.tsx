import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { allRecipes, recipeCategories } from "@/lib/recipes";
import { RecipeCard } from "@/components/site/RecipeCard";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "Healthy Recipes — NOURISH" },
      { name: "description", content: "Affordable, healthy local recipes." },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  const { tt } = useI18n();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const recipes = useMemo(() => {
    let list = allRecipes;
    if (cat !== "All") list = list.filter((r) => r.category && tt(r.category) === cat);
    if (q) {
      const needle = q.toLowerCase();
      list = list.filter((r) =>
        `${tt(r.name)} ${tt(r.ingredients)} ${tt(r.benefits)}`.toLowerCase().includes(needle)
      );
    }
    return list;
  }, [q, cat, tt]);

  const categories = ["All", ...recipeCategories];

  return (
    <SiteLayout>
      <PageHero
        title={tt({ en: "Healthy Recipes", hi: "स्वस्थ रेसिपी", mr: "निरोगी रेसिपी" })}
        subtitle={tt({ en: "Easy and affordable meals for everyday nutrition.", hi: "रोजमर्रा के पोषण के लिए आसान और किफायती भोजन।", mr: "दैनंदिन पोषणासाठी सोपे आणि परवडणारे जेवण." })}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={tt({ en: "Search recipes, ingredients, or benefits", hi: "रेसिपी, सामग्री या लाभ खोजें", mr: "रेसिपी, साहित्य किंवा फायदे शोधा" })}
              className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-3 text-sm"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((rc) => (
              <button
                key={rc}
                onClick={() => setCat(rc)}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
                  cat === rc
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:bg-secondary"
                }`}
              >
                {rc === "All" ? tt({ en: "All", hi: "सभी", mr: "सर्व" }) : rc}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <RecipeCard key={tt(r.name)} r={r} />
          ))}
          {recipes.length === 0 && (
            <p className="col-span-full py-10 text-center text-muted-foreground">{tt({ en: "No recipes match your search.", hi: "आपकी खोज से कोई रेसिपी मेल नहीं खाती।", mr: "तुमच्या शोधाशी कोणतीही रेसिपी जुळत नाही." })}</p>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}
