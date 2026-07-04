import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import { 
  Sparkles, ArrowRight, ArrowLeft, User, Baby, Users,
  Wallet, Coins, Banknote,
  Leaf, Egg, Drumstick,
  Activity, Zap, Shield, Smile,
  RotateCcw, AlertTriangle, Download, CheckCircle2
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

function PlannerPage() {
  const { tt, lang } = useI18n();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);

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

      const promptLang = lang === "hi" ? "Hindi" : lang === "mr" ? "Marathi" : "English";

      const prompt = `Act as an expert Indian nutritionist. Create a varied menu of meals for ${form.target}. Budget is ${form.budget} per week. Diet is ${form.diet}. Main health focus is ${form.focus}. 
Use extremely cheap, local Indian ingredients (like bajra, jowar, moong, spinach, peanuts). Language for the meal names, descriptions, and tags MUST be ${promptLang}.
Provide 5 Breakfast options, 5 Lunch options, 5 Dinner options, and 5 Snack options.
For each meal, include a short name, a brief description, and 2-3 short tags (e.g. "High Iron", "Energy Boost", "High Protein", "Quick" - translated into ${promptLang}).
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
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const OptionBtn = ({ label, icon: Icon, current, onClick }: { label: string; icon?: any; current: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center justify-center gap-4 rounded-[2rem] border-2 p-8 text-xl font-bold transition-all duration-300 hover:-translate-y-1 ${
        current === label
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
                {[1,2,3,4,5].map((s) => (
                  <div key={s} className={`h-2 w-12 rounded-full transition-colors duration-500 ${s <= step ? 'bg-primary' : 'bg-secondary'}`} />
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">{tt({ en: "Who is this menu for?", hi: "यह मेनू किसके लिए है?", mr: "हा मेनू कोणासाठी आहे?" })}</h2>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <OptionBtn icon={User} label={tt({ en: "Women", hi: "महिलाएं", mr: "महिला" })} current={form.target} onClick={() => update("target", tt({ en: "Women", hi: "महिलाएं", mr: "महिला" }))} />
                    <OptionBtn icon={Baby} label={tt({ en: "Children", hi: "बच्चे", mr: "मुले" })} current={form.target} onClick={() => update("target", tt({ en: "Children", hi: "बच्चे", mr: "मुले" }))} />
                    <OptionBtn icon={Users} label={tt({ en: "Family", hi: "परिवार", mr: "कुटुंब" })} current={form.target} onClick={() => update("target", tt({ en: "Family", hi: "परिवार", mr: "कुटुंब" }))} />
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">{tt({ en: "What is your weekly budget?", hi: "आपका साप्ताहिक बजट क्या है?", mr: "तुमचे साप्ताहिक बजेट किती आहे?" })}</h2>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <OptionBtn icon={Wallet} label="₹300" current={form.budget} onClick={() => update("budget", "₹300")} />
                    <OptionBtn icon={Coins} label="₹500" current={form.budget} onClick={() => update("budget", "₹500")} />
                    <OptionBtn icon={Banknote} label="₹1000+" current={form.budget} onClick={() => update("budget", "₹1000+")} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">{tt({ en: "What is your diet preference?", hi: "आपकी आहार प्राथमिकता क्या है?", mr: "तुमची आहार पसंती काय आहे?" })}</h2>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <OptionBtn icon={Leaf} label={tt({ en: "Vegetarian", hi: "शाकाहारी", mr: "शाकाहारी" })} current={form.diet} onClick={() => update("diet", tt({ en: "Vegetarian", hi: "शाकाहारी", mr: "शाकाहारी" }))} />
                    <OptionBtn icon={Egg} label={tt({ en: "Eggitarian", hi: "अंडाहारी", mr: "अंडाहारी" })} current={form.diet} onClick={() => update("diet", tt({ en: "Eggitarian", hi: "अंडाहारी", mr: "अंडाहारी" }))} />
                    <OptionBtn icon={Drumstick} label={tt({ en: "Non-Veg", hi: "मांसाहारी", mr: "मांसाहारी" })} current={form.diet} onClick={() => update("diet", tt({ en: "Non-Veg", hi: "मांसाहारी", mr: "मांसाहारी" }))} />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8 text-center">
                  <h2 className="text-3xl font-extrabold text-foreground tracking-tight">{tt({ en: "What is your main health focus?", hi: "आपका मुख्य स्वास्थ्य लक्ष्य क्या है?", mr: "तुमचे मुख्य आरोग्य लक्ष्य काय आहे?" })}</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <OptionBtn icon={Zap} label={tt({ en: "Iron / Anemia", hi: "आयरन / एनीमिया", mr: "लोह / रक्तक्षय" })} current={form.focus} onClick={() => update("focus", tt({ en: "Iron / Anemia", hi: "आयरन / एनीमिया", mr: "लोह / रक्तक्षय" }))} />
                    <OptionBtn icon={Activity} label={tt({ en: "Energy & Stamina", hi: "ऊर्जा और स्टैमिना", mr: "ऊर्जा आणि स्टॅमिना" })} current={form.focus} onClick={() => update("focus", tt({ en: "Energy & Stamina", hi: "ऊर्जा और स्टैमिना", mr: "ऊर्जा आणि स्टॅमिना" }))} />
                    <OptionBtn icon={Baby} label={tt({ en: "Child Growth", hi: "बच्चे का विकास", mr: "मुलांची वाढ" })} current={form.focus} onClick={() => update("focus", tt({ en: "Child Growth", hi: "बच्चे का विकास", mr: "मुलांची वाढ" }))} />
                    <OptionBtn icon={Shield} label={tt({ en: "General Health", hi: "सामान्य स्वास्थ्य", mr: "सामान्य आरोग्य" })} current={form.focus} onClick={() => update("focus", tt({ en: "General Health", hi: "सामान्य स्वास्थ्य", mr: "सामान्य आरोग्य" }))} />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-10 text-center rounded-[2.5rem] bg-gradient-to-br from-secondary/50 to-secondary/10 p-10 border border-border shadow-2xl backdrop-blur-sm">
                  <h2 className="text-4xl font-extrabold text-maroon tracking-tight">{tt({ en: "Ready to curate your menu!", hi: "आपका मेनू तैयार करने के लिए तैयार!", mr: "तुमचा मेनू तयार करण्यासाठी तयार!" })}</h2>
                  <p className="text-lg font-medium text-muted-foreground">{tt({ en: "We will generate personalized meal options based on your selections.", hi: "हम आपके चयनों के आधार पर व्यक्तिगत भोजन विकल्प तैयार करेंगे।", mr: "आम्ही तुमच्या निवडीनुसार वैयक्तिकृत जेवण पर्याय तयार करू." })}</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/>{form.target}</span>
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/>{form.budget}</span>
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/>{form.diet}</span>
                    <span className="rounded-full bg-background px-6 py-3 border border-border shadow-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/>{form.focus}</span>
                  </div>
                  <button 
                    onClick={generatePlan}
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-xl font-extrabold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-2xl"
                  >
                    <Sparkles className="h-6 w-6" />
                    {tt({ en: "Generate Options", hi: "विकल्प बनाएं", mr: "पर्याय तयार करा" })}
                  </button>
                </div>
              )}

              {step < 5 && (
                <div className="mt-12 flex justify-between items-center">
                  <button 
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                    className={`inline-flex items-center gap-2 px-6 py-3 font-bold text-muted-foreground hover:text-foreground transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
                  >
                    <ArrowLeft className="h-5 w-5" /> {tt({ en: "Back", hi: "पीछे", mr: "मागे" })}
                  </button>
                  <button 
                    onClick={() => setStep((s) => Math.min(5, s + 1))}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-bold text-background hover:bg-foreground/90 transition-transform hover:scale-105 shadow-lg"
                  >
                    {tt({ en: "Continue", hi: "जारी रखें", mr: "पुढे चालू ठेवा" })} <ArrowRight className="h-5 w-5" />
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
                <h2 className="text-4xl font-extrabold text-maroon animate-pulse tracking-tight">{tt({ en: "Crafting your menu...", hi: "आपका मेनू तैयार हो रहा है...", mr: "तुमचा मेनू तयार होत आहे..." })}</h2>
                <p className="text-xl text-muted-foreground font-medium">{tt({ en: "Sourcing cheap, healthy, and local ingredients.", hi: "सस्ते, स्वस्थ और स्थानीय सामग्री खोज रहे हैं।", mr: "स्वस्त, निरोगी आणि स्थानिक घटक शोधत आहे." })}</p>
              </div>
            ) : error ? (
              <div className="mx-auto max-w-xl rounded-[2.5rem] border-2 border-red-500/20 bg-red-500/5 p-10 text-center print:hidden">
                <AlertTriangle className="mx-auto mb-6 h-16 w-16 text-red-500" />
                <h3 className="mb-4 text-3xl font-extrabold text-red-600 tracking-tight">{tt({ en: "Oops! Something went wrong.", hi: "उफ़! कुछ गलत हो गया।", mr: "अरेरे! काहीतरी चूक झाली." })}</h3>
                <p className="text-red-600/80 font-medium mb-8 text-lg">{error}</p>
                <button onClick={() => setStep(5)} className="inline-flex items-center gap-2 font-bold text-red-600 bg-red-100 px-6 py-3 rounded-full hover:bg-red-200 transition-colors">
                  <RotateCcw className="h-5 w-5" /> {tt({ en: "Try Again", hi: "फिर से प्रयास करें", mr: "पुन्हा प्रयत्न करा" })}
                </button>
              </div>
            ) : plan ? (
              <div className="space-y-16">
                
                {/* Header Actions (hidden in print) */}
                <div className="print:hidden flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border pb-8">
                  <div>
                    <h2 className="text-4xl font-extrabold text-maroon tracking-tight">{tt({ en: "Your Custom Menu Options", hi: "आपके कस्टम मेनू विकल्प", mr: "तुमचे सानुकूल मेनू पर्याय" })}</h2>
                    <p className="text-muted-foreground mt-2 font-medium text-lg">{tt({ en: "Mix and match these AI-generated meals to build your perfect week.", hi: "अपने सही सप्ताह को बनाने के लिए इन AI-जनित भोजन विकल्पों को मिलाएं।", mr: "तुमचा परिपूर्ण आठवडा तयार करण्यासाठी हे AI-निर्मित जेवण पर्याय एकत्र करा." })}</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground hover:bg-secondary/80 transition-colors">
                      <RotateCcw className="h-4 w-4" /> {tt({ en: "Start Over", hi: "शुरू से शुरू करें", mr: "पुन्हा सुरू करा" })}
                    </button>
                    <button onClick={downloadPDF} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg">
                      <Download className="h-4 w-4" /> {tt({ en: "Save PDF", hi: "PDF सहेजें", mr: "PDF जतन करा" })}
                    </button>
                  </div>
                </div>

                {/* Print Only Header */}
                <div className="hidden print:block text-center border-b pb-6 mb-8">
                  <h1 className="text-3xl font-extrabold text-maroon">NOURISH Meal Plan</h1>
                  <p className="text-gray-500 mt-2">Customized for {form.target} • {form.diet} • {form.focus}</p>
                </div>

                {/* Meal Options Pool (Prints because we removed print:hidden) */}
                <div className="space-y-12">
                  {(["breakfast", "lunch", "dinner", "snacks"] as const).map((mealType) => (
                    <div key={mealType}>
                      <h3 className="text-2xl font-extrabold capitalize text-foreground mb-6 flex items-center gap-3">
                        <span className="bg-primary/10 text-primary p-2 rounded-xl">
                          {mealType === "breakfast" ? "🌅" : mealType === "lunch" ? "☀️" : mealType === "dinner" ? "🌙" : "🍎"}
                        </span>
                        {tt({
                          en: `${mealType} Options`,
                          hi: mealType === "breakfast" ? "नाश्ते के विकल्प" : mealType === "lunch" ? "दोपहर के भोजन के विकल्प" : mealType === "dinner" ? "रात के खाने के विकल्प" : "स्नैक के विकल्प",
                          mr: mealType === "breakfast" ? "नाश्त्याचे पर्याय" : mealType === "lunch" ? "दुपारच्या जेवणाचे पर्याय" : mealType === "dinner" ? "रात्रीच्या जेवणाचे पर्याय" : "स्नॅकचे पर्याय"
                        })}
                      </h3>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {plan[mealType]?.map((meal, idx) => (
                          <div key={idx} className="group flex flex-col rounded-[2rem] border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 print:shadow-none print:border-gray-200">
                            <h4 className="text-xl font-bold text-foreground mb-2">{meal.name}</h4>
                            <p className="text-muted-foreground text-sm font-medium flex-grow mb-4 leading-relaxed">{meal.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {meal.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold tracking-wide print:border print:border-gray-300">
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

                {/* Consult Call to Action (hidden in print) */}
                <div className="print:hidden mt-20 rounded-[2.5rem] bg-gradient-to-r from-earth/20 to-earth/5 border border-earth/20 p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-earth/10 blur-3xl"></div>
                  <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-maroon/5 blur-3xl"></div>
                  
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-maroon mb-6 tracking-tight">{tt({ en: "Need expert guidance?", hi: "विशेषज्ञ मार्गदर्शन चाहिए?", mr: "तज्ञ मार्गदर्शन हवे आहे?" })}</h2>
                    <p className="text-xl text-foreground/80 font-medium mb-10 leading-relaxed">
                      {tt({ 
                        en: "Our volunteer nutritionists are here to help you tailor your plan perfectly to your needs. Get a free consultation today!",
                        hi: "हमारे स्वयंसेवी पोषण विशेषज्ञ आपकी ज़रूरतों के अनुसार आपकी योजना तैयार करने में मदद करने के लिए यहाँ हैं। आज ही निःशुल्क परामर्श प्राप्त करें!",
                        mr: "आमचे स्वयंसेवक पोषणतज्ञ तुमच्या गरजेनुसार तुमची योजना तयार करण्यात मदत करण्यासाठी येथे आहेत. आजच मोफत सल्ला मिळवा!"
                      })}
                    </p>
                    <Link to="/consult" className="inline-flex items-center gap-3 rounded-full bg-earth px-10 py-5 text-xl font-extrabold text-white shadow-xl hover:bg-earth/90 hover:scale-105 transition-all duration-300">
                      {tt({ en: "Book Free Consult", hi: "मुफ्त परामर्श बुक करें", mr: "मोफत सल्ला बुक करा" })} <ArrowRight className="h-6 w-6" />
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
