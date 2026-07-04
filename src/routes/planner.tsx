import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import {
  Sparkles, ArrowRight, ArrowLeft, HeartPulse, Baby, Users,
  Wallet, Coins, Banknote,
  Leaf, Egg, Drumstick,
  Activity, Zap, Shield, Smile,
  RotateCcw, AlertTriangle, Download, Plus, CheckCircle2,
  CalendarDays, Check
} from "lucide-react";
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

type MealOption = {
  name: string;
  desc: string;
  tags: string[];
};

type GeneratedPlan = {
  breakfast: MealOption[];
  lunch: MealOption[];
  dinner: MealOption[];
  snacks: MealOption[];
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function PlannerPage() {
  const { tt } = useI18n();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);

  // User's customized weekly schedule
  const [schedule, setSchedule] = useState<Record<string, Record<string, string>>>({});

  const [form, setForm] = useState<FormData>({
    target: "Women",
    budget: "₹300",
    diet: "Vegetarian",
    focus: "Iron / Anemia",
  });

  const update = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const updateSchedule = (day: string, mealType: string, mealName: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...(prev[day] || {}),
        [mealType]: mealName
      }
    }));
  };

  const generatePlan = async () => {
    setLoading(true);
    setError("");
    setStep(6);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key missing. Please add VITE_GEMINI_API_KEY to your .env file.");
      }

      const prompt = `Act as an expert Indian nutritionist. Create a varied menu of meals for ${form.target}. Budget is ${form.budget} per week. Diet is ${form.diet}. Main health focus is ${form.focus}. 
Use extremely cheap, local Indian ingredients (like bajra, jowar, moong, spinach, peanuts). Language should be English.
Provide 5 Breakfast options, 5 Lunch options, 5 Dinner options, and 5 Snack options.
For each meal, include a short name, a brief description, and 2-3 short tags (e.g. "High Iron", "Energy Boost", "High Protein", "Quick").
Return ONLY valid JSON matching this structure exactly (no markdown formatting, no backticks, no extra text):
{
  "breakfast": [{ "name": "...", "desc": "...", "tags": ["...", "..."] }],
  "lunch": [{ "name": "...", "desc": "...", "tags": ["...", "..."] }],
  "dinner": [{ "name": "...", "desc": "...", "tags": ["...", "..."] }],
  "snacks": [{ "name": "...", "desc": "...", "tags": ["...", "..."] }]
}`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
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

      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        // Fallback cleanup if the AI returns markdown ticks despite instructions
        const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
        parsed = JSON.parse(cleaned);
      }

      setPlan(parsed);
      // Pre-fill schedule randomly or leave blank? Let's leave blank so user can fill it.
      setSchedule({});
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const OptionBtn = ({ label, icon: Icon, current, onClick }: { label: string; icon?: any; current: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center justify-center gap-4 rounded-[2rem] border-2 p-8 text-xl font-bold transition-all duration-300 hover:-translate-y-1 ${current === label
          ? "border-primary bg-primary/10 text-primary shadow-lg ring-4 ring-primary/20"
          : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-xl"
        }`}
    >
      {Icon && (
        <div className={`rounded-full p-4 ${current === label ? 'bg-primary/20' : 'bg-secondary group-hover:bg-primary/10'}`}>
          <Icon className={`h-10 w-10 ${current === label ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
        </div>
      )}
      <span>{label}</span>
    </button>
  );

  const downloadPDF = () => {
    window.print();
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20">

        {/* Wizard UI (print:hidden so it doesn't show in PDF) */}
        <div className="print:hidden">
          {step < 6 && (
            <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/5 shadow-inner">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-display text-4xl font-extrabold text-maroon sm:text-6xl tracking-tight">
                {tt({ en: "Design Your Plan", hi: "अपनी योजना बनाएं", mr: "तुमची योजना तयार करा" })}
              </h1>
              <p className="mt-4 text-xl font-medium text-muted-foreground max-w-2xl mx-auto">
                {tt({
                  en: "Let's build a highly nutritious, customized, and budget-friendly menu just for you.",
                  hi: "आइए सिर्फ आपके लिए एक अत्यधिक पौष्टिक, अनुकूलित और बजट के अनुकूल मेनू बनाएं।",
                  mr: "चला फक्त तुमच्यासाठी अत्यंत पौष्टिक, सानुकूलित आणि बजेट-अनुकूल मेनू तयार करूया."
                })}
              </p>
            </div>
          )}

          {/* Wizard Steps */}
          {step < 6 && (
            <div className="mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">

              {/* Progress indicator */}
              <div className="mb-10 flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className={`h-2 w-12 rounded-full transition-colors duration-500 ${s <= step ? 'bg-primary' : 'bg-secondary'}`} />
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Who is this menu for?</h2>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <OptionBtn icon={HeartPulse} label="Women" current={form.target} onClick={() => update("target", "Women")} />
                    <OptionBtn icon={Baby} label="Children" current={form.target} onClick={() => update("target", "Children")} />
                    <OptionBtn icon={Users} label="Family" current={form.target} onClick={() => update("target", "Family")} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">What is your weekly budget?</h2>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <OptionBtn icon={Wallet} label="₹300" current={form.budget} onClick={() => update("budget", "₹300")} />
                    <OptionBtn icon={Coins} label="₹500" current={form.budget} onClick={() => update("budget", "₹500")} />
                    <OptionBtn icon={Banknote} label="₹1000+" current={form.budget} onClick={() => update("budget", "₹1000+")} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">What is your diet preference?</h2>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <OptionBtn icon={Leaf} label="Vegetarian" current={form.diet} onClick={() => update("diet", "Vegetarian")} />
                    <OptionBtn icon={Egg} label="Eggitarian" current={form.diet} onClick={() => update("diet", "Eggitarian")} />
                    <OptionBtn icon={Drumstick} label="Non-Veg" current={form.diet} onClick={() => update("diet", "Non-Veg")} />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">What is your main health focus?</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <OptionBtn icon={Zap} label="Iron / Anemia" current={form.focus} onClick={() => update("focus", "Iron / Anemia")} />
                    <OptionBtn icon={Activity} label="Energy & Stamina" current={form.focus} onClick={() => update("focus", "Energy & Stamina")} />
                    <OptionBtn icon={Baby} label="Child Growth" current={form.focus} onClick={() => update("focus", "Child Growth")} />
                    <OptionBtn icon={Shield} label="General Health" current={form.focus} onClick={() => update("focus", "General Health")} />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-10 text-center rounded-[2.5rem] bg-gradient-to-br from-secondary/50 to-secondary/10 p-10 border border-border shadow-2xl backdrop-blur-sm">
                  <h2 className="text-4xl font-extrabold text-maroon tracking-tight">Ready to curate your menu!</h2>
                  <p className="text-lg font-medium text-muted-foreground">We will generate personalized meal options based on your selections.</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{form.target}</span>
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{form.budget}</span>
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{form.diet}</span>
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{form.focus}</span>
                  </div>
                  <button
                    onClick={generatePlan}
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-xl font-extrabold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-2xl"
                  >
                    <Sparkles className="h-6 w-6" />
                    Generate Options
                  </button>
                </div>
              )}

              {step < 5 && (
                <div className="mt-12 flex justify-between items-center">
                  <button
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                    className={`inline-flex items-center gap-2 px-6 py-3 font-bold text-muted-foreground hover:text-foreground transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
                  >
                    <ArrowLeft className="h-5 w-5" /> Back
                  </button>
                  <button
                    onClick={() => setStep((s) => Math.min(5, s + 1))}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-bold text-background hover:bg-foreground/90 transition-transform hover:scale-105 shadow-lg"
                  >
                    Continue <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Loading / Result State */}
        {step === 6 && (
          <div className="animate-in fade-in duration-1000">
            {loading ? (
              <div className="flex flex-col items-center justify-center space-y-8 py-32 print:hidden">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-[3rem] bg-gradient-to-tr from-primary/20 to-primary/5 shadow-2xl">
                  <Sparkles className="h-16 w-16 animate-pulse text-primary" />
                </div>
                <h2 className="text-4xl font-extrabold text-maroon animate-pulse tracking-tight">Crafting your menu...</h2>
                <p className="text-xl text-muted-foreground font-medium">Sourcing cheap, healthy, and local ingredients.</p>
              </div>
            ) : error ? (
              <div className="mx-auto max-w-xl rounded-[2.5rem] border-2 border-red-500/20 bg-red-500/5 p-10 text-center print:hidden">
                <AlertTriangle className="mx-auto mb-6 h-16 w-16 text-red-500" />
                <h3 className="mb-4 text-3xl font-extrabold text-red-600 tracking-tight">Oops! Something went wrong.</h3>
                <p className="text-red-600/80 font-medium mb-8 text-lg">{error}</p>
                <button onClick={() => setStep(5)} className="inline-flex items-center gap-2 font-bold text-red-600 bg-red-100 px-6 py-3 rounded-full hover:bg-red-200 transition-colors">
                  <RotateCcw className="h-5 w-5" /> Try Again
                </button>
              </div>
            ) : plan ? (
              <div className="space-y-16">

                {/* Header Actions (hidden in print) */}
                <div className="print:hidden flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border pb-8">
                  <div>
                    <h2 className="text-4xl font-extrabold text-maroon tracking-tight">Your Custom Menu Options</h2>
                    <p className="text-muted-foreground mt-2 font-medium text-lg">Mix and match these AI-generated meals to build your perfect week.</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground hover:bg-secondary/80 transition-colors">
                      <RotateCcw className="h-4 w-4" /> Start Over
                    </button>
                    <button onClick={downloadPDF} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg">
                      <Download className="h-4 w-4" /> Save PDF
                    </button>
                  </div>
                </div>

                {/* Print Only Header */}
                <div className="hidden print:block text-center border-b pb-6 mb-8">
                  <h1 className="text-3xl font-extrabold text-maroon">NOURISH Weekly Meal Plan</h1>
                  <p className="text-gray-500 mt-2">Customized for {form.target} • {form.diet} • {form.focus}</p>
                </div>

                {/* Meal Options Pool (print:hidden so they only print their selected schedule, or maybe we print everything?) Let's print the schedule only. */}
                <div className="print:hidden space-y-12">
                  {(["breakfast", "lunch", "dinner", "snacks"] as const).map((mealType) => (
                    <div key={mealType}>
                      <h3 className="text-2xl font-extrabold capitalize text-foreground mb-6 flex items-center gap-3">
                        <span className="bg-primary/10 text-primary p-2 rounded-xl">
                          {mealType === "breakfast" ? "🌅" : mealType === "lunch" ? "☀️" : mealType === "dinner" ? "🌙" : "🍎"}
                        </span>
                        {mealType} Options
                      </h3>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {plan[mealType]?.map((meal, idx) => (
                          <div key={idx} className="group flex flex-col rounded-[2rem] border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                            <h4 className="text-xl font-bold text-foreground mb-2">{meal.name}</h4>
                            <p className="text-muted-foreground text-sm font-medium flex-grow mb-4 leading-relaxed">{meal.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {meal.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold tracking-wide">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Weekly Planner */}
                <div className="mt-16 bg-cream rounded-[2.5rem] p-6 sm:p-10 border border-border shadow-lg print:border-none print:shadow-none print:bg-white print:p-0">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-extrabold text-maroon flex items-center gap-3">
                        <CalendarDays className="h-8 w-8 text-primary" />
                        My Weekly Schedule
                      </h2>
                      <p className="text-muted-foreground font-medium mt-2 print:hidden">Select meals from above to build your week.</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto pb-4">
                    <table className="w-full min-w-[800px] text-left border-separate border-spacing-y-4">
                      <thead>
                        <tr>
                          <th className="pb-4 font-bold text-muted-foreground text-lg w-1/5">Day</th>
                          <th className="pb-4 font-bold text-muted-foreground text-lg w-1/5">Breakfast</th>
                          <th className="pb-4 font-bold text-muted-foreground text-lg w-1/5">Lunch</th>
                          <th className="pb-4 font-bold text-muted-foreground text-lg w-1/5">Dinner</th>
                          <th className="pb-4 font-bold text-muted-foreground text-lg w-1/5">Snack</th>
                        </tr>
                      </thead>
                      <tbody>
                        {DAYS.map(day => (
                          <tr key={day} className="bg-card shadow-sm rounded-2xl overflow-hidden print:shadow-none print:border-b">
                            <td className="p-5 font-bold text-foreground rounded-l-2xl border-y border-l border-border print:border-none align-middle">
                              {day}
                            </td>
                            {(["breakfast", "lunch", "dinner", "snacks"] as const).map(mealType => (
                              <td key={mealType} className="p-3 border-y border-border print:border-none">
                                <select
                                  className="w-full bg-secondary/50 border border-transparent rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none print:appearance-none print:bg-transparent print:p-0"
                                  value={schedule[day]?.[mealType] || ""}
                                  onChange={(e) => updateSchedule(day, mealType, e.target.value)}
                                >
                                  <option value="">Select...</option>
                                  {plan[mealType]?.map(meal => (
                                    <option key={meal.name} value={meal.name}>{meal.name}</option>
                                  ))}
                                </select>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Consult Call to Action (hidden in print) */}
                <div className="print:hidden mt-20 rounded-[2.5rem] bg-gradient-to-r from-earth/20 to-earth/5 border border-earth/20 p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-earth/10 blur-3xl"></div>
                  <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-maroon/5 blur-3xl"></div>

                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-maroon mb-6 tracking-tight">Need expert guidance?</h2>
                    <p className="text-xl text-foreground/80 font-medium mb-10 leading-relaxed">
                      Our volunteer nutritionists are here to help you tailor your plan perfectly to your needs. Get a free consultation today!
                    </p>
                    <Link to="/consult" className="inline-flex items-center gap-3 rounded-full bg-earth px-10 py-5 text-xl font-extrabold text-white shadow-xl hover:bg-earth/90 hover:scale-105 transition-all duration-300">
                      Book Free Consult <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>

              </div>
            ) : null}
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
