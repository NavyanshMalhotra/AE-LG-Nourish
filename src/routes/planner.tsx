import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import { Sparkles, ArrowRight, Activity, Leaf, Utensils, IndianRupee, RotateCcw, AlertTriangle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Meal Planner — NOURISH" },
      { name: "description", content: "Generate a custom, affordable meal plan using AI." },
    ],
  }),
  component: PlannerPage,
});

type FormData = {
  target: string;
  budget: string;
  diet: string;
  focus: string;
};

type MealPlanDay = {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
};

function PlannerPage() {
  const { tt, lang } = useI18n();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [plan, setPlan] = useState<MealPlanDay[] | null>(null);

  const [form, setForm] = useState<FormData>({
    target: "Women",
    budget: "₹300",
    diet: "Vegetarian",
    focus: "Iron / Anemia",
  });

  const update = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const generatePlan = async () => {
    setLoading(true);
    setError("");
    setStep(6);
    
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key missing. Please add VITE_GEMINI_API_KEY to your .env file.");
      }

      const prompt = `Act as an expert Indian nutritionist. Create a 3-day meal plan for ${form.target}. Budget is ${form.budget} per week. Diet is ${form.diet}. Main health focus is ${form.focus}. 
Use extremely cheap, local Indian ingredients (like bajra, jowar, moong, spinach, peanuts). Language should be English.
Return ONLY valid JSON matching this structure exactly (no markdown formatting, no backticks):
[
  { "day": "Day 1", "breakfast": "...", "lunch": "...", "dinner": "..." },
  { "day": "Day 2", "breakfast": "...", "lunch": "...", "dinner": "..." },
  { "day": "Day 3", "breakfast": "...", "lunch": "...", "dinner": "..." }
]`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            responseMimeType: "application/json"
          }
        })
      });

      if (!res.ok) {
        throw new Error("Failed to reach Gemini API. Please check your API key.");
      }

      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("Invalid response from AI.");

      const parsed = JSON.parse(text);
      setPlan(parsed);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const OptionBtn = ({ label, current, onClick }: { label: string; current: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`rounded-2xl border-2 p-6 text-xl font-bold transition-all hover:-translate-y-1 ${
        current === label
          ? "border-primary bg-primary/10 text-primary shadow-md"
          : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-lg"
      }`}
    >
      {label}
    </button>
  );

  return (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-extrabold text-maroon sm:text-5xl">
            {tt({ en: "AI Meal Planner", hi: "AI भोजन योजनाकार", mr: "AI जेवण योजनाकार" })}
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground">
            {tt({ 
              en: "Get a custom, affordable weekly meal plan in seconds.", 
              hi: "सेकंडों में एक अनुकूलित, किफायती साप्ताहिक भोजन योजना प्राप्त करें।", 
              mr: "सेकंदात सानुकूल, परवडणारी साप्ताहिक जेवण योजना मिळवा." 
            })}
          </p>
        </div>

        {/* Wizard Steps */}
        {step < 6 && (
          <div className="mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {step === 1 && (
              <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold text-foreground">Who is this plan for?</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <OptionBtn label="Women" current={form.target} onClick={() => update("target", "Women")} />
                  <OptionBtn label="Children" current={form.target} onClick={() => update("target", "Children")} />
                  <OptionBtn label="Family" current={form.target} onClick={() => update("target", "Family")} />
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold text-foreground">What is your weekly budget?</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <OptionBtn label="₹300" current={form.budget} onClick={() => update("budget", "₹300")} />
                  <OptionBtn label="₹500" current={form.budget} onClick={() => update("budget", "₹500")} />
                  <OptionBtn label="₹1000+" current={form.budget} onClick={() => update("budget", "₹1000+")} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold text-foreground">Diet Preference?</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <OptionBtn label="Vegetarian" current={form.diet} onClick={() => update("diet", "Vegetarian")} />
                  <OptionBtn label="Eggitarian" current={form.diet} onClick={() => update("diet", "Eggitarian")} />
                  <OptionBtn label="Non-Veg" current={form.diet} onClick={() => update("diet", "Non-Veg")} />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 text-center">
                <h2 className="text-3xl font-bold text-foreground">Main Health Focus?</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <OptionBtn label="Iron / Anemia" current={form.focus} onClick={() => update("focus", "Iron / Anemia")} />
                  <OptionBtn label="Energy & Stamina" current={form.focus} onClick={() => update("focus", "Energy & Stamina")} />
                  <OptionBtn label="Child Growth" current={form.focus} onClick={() => update("focus", "Child Growth")} />
                  <OptionBtn label="General Health" current={form.focus} onClick={() => update("focus", "General Health")} />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-8 text-center rounded-3xl bg-secondary p-8">
                <h2 className="text-3xl font-bold text-foreground">Ready to generate!</h2>
                <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
                  <span className="rounded-full bg-background px-4 py-2 border border-border shadow-sm">{form.target}</span>
                  <span className="rounded-full bg-background px-4 py-2 border border-border shadow-sm">{form.budget}</span>
                  <span className="rounded-full bg-background px-4 py-2 border border-border shadow-sm">{form.diet}</span>
                  <span className="rounded-full bg-background px-4 py-2 border border-border shadow-sm">{form.focus}</span>
                </div>
                <button 
                  onClick={generatePlan}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
                >
                  <Sparkles className="h-5 w-5" />
                  Generate Plan Now
                </button>
              </div>
            )}

            {step < 5 && (
              <div className="mt-12 flex justify-between">
                <button 
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className={`px-4 py-2 font-bold text-muted-foreground hover:text-foreground ${step === 1 ? "invisible" : ""}`}
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep((s) => Math.min(5, s + 1))}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-bold text-background hover:bg-foreground/90"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Loading / Result State */}
        {step === 6 && (
          <div className="animate-in fade-in duration-500">
            {loading ? (
              <div className="flex flex-col items-center justify-center space-y-6 py-20">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-10 w-10 animate-pulse text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-maroon animate-pulse">Designing your plan...</h2>
                <p className="text-muted-foreground font-medium">Mixing cheap ingredients with healthy recipes...</p>
              </div>
            ) : error ? (
              <div className="mx-auto max-w-lg rounded-3xl border-2 border-red-500/20 bg-red-500/5 p-8 text-center">
                <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-500" />
                <h3 className="mb-2 text-2xl font-bold text-red-600">Oops!</h3>
                <p className="text-red-600/80 font-medium mb-6">{error}</p>
                <button onClick={() => setStep(5)} className="inline-flex items-center gap-2 font-bold text-red-600 underline underline-offset-4">
                  <RotateCcw className="h-4 w-4" /> Try Again
                </button>
              </div>
            ) : plan ? (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-maroon">Your 3-Day Plan</h2>
                  <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground hover:bg-secondary/80">
                    <RotateCcw className="h-4 w-4" /> Start Over
                  </button>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  {plan.map((day, i) => (
                    <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                      <h3 className="mb-4 text-xl font-extrabold text-primary">{day.day}</h3>
                      <div className="space-y-4 text-sm font-medium">
                        <div className="rounded-2xl bg-secondary/50 p-4">
                          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Breakfast</span>
                          <span className="text-foreground/90">{day.breakfast}</span>
                        </div>
                        <div className="rounded-2xl bg-secondary/50 p-4">
                          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Lunch</span>
                          <span className="text-foreground/90">{day.lunch}</span>
                        </div>
                        <div className="rounded-2xl bg-secondary/50 p-4">
                          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Dinner</span>
                          <span className="text-foreground/90">{day.dinner}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
