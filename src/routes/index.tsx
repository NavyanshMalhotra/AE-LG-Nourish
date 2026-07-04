import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Apple, Video, Phone, ArrowRight, HeartPulse, Baby, Sparkles, ChefHat
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { tt } = useI18n();
  const [step, setStep] = useState<number>(1);

  return (
    <SiteLayout>
      <section className="min-h-[85vh] bg-gradient-to-b from-turmeric/20 to-background flex flex-col items-center justify-center p-6 text-center">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-2xl mx-auto space-y-8">
            <h1 className="font-display text-5xl sm:text-7xl font-extrabold text-maroon leading-tight tracking-tight">
              {tt({ en: "Welcome to NOURISH", hi: "NOURISH में आपका स्वागत है", mr: "NOURISH मध्ये आपले स्वागत आहे" })}
            </h1>
            <p className="text-2xl sm:text-3xl font-medium text-foreground/80 leading-snug">
              {tt({ 
                en: "Simple, healthy, and affordable food for your family.", 
                hi: "आपके परिवार के लिए आसान, स्वस्थ और किफायती भोजन।", 
                mr: "तुमच्या कुटुंबासाठी सोपे, निरोगी आणि परवडणारे अन्न." 
              })}
            </p>
            <button 
              onClick={() => setStep(2)}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-xl font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              {tt({ en: "Start Here", hi: "यहाँ से शुरू करें", mr: "येथून सुरू करा" })}
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-4xl mx-auto w-full">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-10">
              {tt({ en: "Who needs nutrition help today?", hi: "आज किसे पोषण की मदद चाहिए?", mr: "आज कोणाला पोषणाची गरज आहे?" })}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <button onClick={() => setStep(3)} className="group flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-primary/20 bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl">
                <div className="rounded-full bg-primary/10 p-6">
                  <HeartPulse className="h-16 w-16 text-primary" />
                </div>
                <span className="text-3xl font-bold text-foreground">
                  {tt({ en: "Women", hi: "महिलाएं", mr: "महिला" })}
                </span>
              </button>
              <button onClick={() => setStep(3)} className="group flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-earth/20 bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:border-earth/60 hover:shadow-xl">
                <div className="rounded-full bg-earth/10 p-6">
                  <Baby className="h-16 w-16 text-earth" />
                </div>
                <span className="text-3xl font-bold text-foreground">
                  {tt({ en: "Children", hi: "बच्चे", mr: "मुले" })}
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-5xl mx-auto w-full">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-10">
              {tt({ en: "What would you like to do?", hi: "आप क्या करना चाहेंगे?", mr: "तुम्हाला काय करायला आवडेल?" })}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link to="/planner" className="group flex flex-col items-center justify-center gap-5 rounded-3xl border-2 border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="rounded-full bg-primary/10 p-6">
                  <Sparkles className="h-14 w-14 text-primary" />
                </div>
                <div className="space-y-2">
                  <span className="block text-2xl font-bold text-foreground">
                    {tt({ en: "Custom Meal Plan", hi: "कस्टम भोजन योजना", mr: "सानुकूल जेवण योजना" })}
                  </span>
                  <p className="text-lg text-muted-foreground font-medium">
                    {tt({ en: "Get a personalized weekly plan", hi: "एक व्यक्तिगत साप्ताहिक योजना प्राप्त करें", mr: "वैयक्तिकृत साप्ताहिक योजना मिळवा" })}
                  </p>
                </div>
              </Link>
              
              <Link to="/recipes" className="group flex flex-col items-center justify-center gap-5 rounded-3xl border-2 border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-maroon/40 hover:shadow-xl">
                <div className="rounded-full bg-turmeric/40 p-6">
                  <ChefHat className="h-14 w-14 text-maroon" />
                </div>
                <div className="space-y-2">
                  <span className="block text-2xl font-bold text-foreground">
                    {tt({ en: "Healthy Recipes", hi: "स्वस्थ रेसिपी", mr: "निरोगी रेसिपी" })}
                  </span>
                  <p className="text-lg text-muted-foreground font-medium">
                    {tt({ en: "Browse local meals", hi: "स्थानीय भोजन ब्राउज़ करें", mr: "स्थानिक जेवण ब्राउझ करा" })}
                  </p>
                </div>
              </Link>
              
              <Link to="/ingredients" className="group flex flex-col items-center justify-center gap-5 rounded-3xl border-2 border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-earth/40 hover:shadow-xl">
                <div className="rounded-full bg-earth/10 p-6">
                  <Apple className="h-14 w-14 text-earth" />
                </div>
                <div className="space-y-2">
                  <span className="block text-2xl font-bold text-foreground">
                    {tt({ en: "Find Ingredients", hi: "सामग्री खोजें", mr: "साहित्य शोधा" })}
                  </span>
                  <p className="text-lg text-muted-foreground font-medium">
                    {tt({ en: "Local prices & benefits", hi: "स्थानीय कीमतें और लाभ", mr: "स्थानिक किमती आणि फायदे" })}
                  </p>
                </div>
              </Link>
              
              <Link to="/videos" className="group flex flex-col items-center justify-center gap-5 rounded-3xl border-2 border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="rounded-full bg-primary/10 p-6">
                  <Video className="h-14 w-14 text-primary" />
                </div>
                <div className="space-y-2">
                  <span className="block text-2xl font-bold text-foreground">
                    {tt({ en: "Doctor Videos", hi: "डॉक्टर के वीडियो", mr: "डॉक्टरांचे व्हिडिओ" })}
                  </span>
                  <p className="text-lg text-muted-foreground font-medium">
                    {tt({ en: "Learn from experts", hi: "विशेषज्ञों से सीखें", mr: "तज्ज्ञांकडून शिका" })}
                  </p>
                </div>
              </Link>

              <Link to="/consult" className="group flex flex-col items-center justify-center gap-5 rounded-3xl border-2 border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-earth/40 hover:shadow-xl sm:col-span-2 lg:col-span-1">
                <div className="rounded-full bg-earth/10 p-6">
                  <Phone className="h-14 w-14 text-earth" />
                </div>
                <div className="space-y-2">
                  <span className="block text-2xl font-bold text-foreground">
                    {tt({ en: "Free Consult", hi: "मुफ्त सलाह", mr: "मोफत सल्ला" })}
                  </span>
                  <p className="text-lg text-muted-foreground font-medium">
                    {tt({ en: "Call a nutritionist", hi: "पोषण विशेषज्ञ को कॉल करें", mr: "पोषणतज्ञांना कॉल करा" })}
                  </p>
                </div>
              </Link>
            </div>
            <button 
              onClick={() => setStep(2)}
              className="mt-12 text-lg font-bold text-muted-foreground hover:text-foreground underline decoration-2 underline-offset-4"
            >
              {tt({ en: "Go Back", hi: "पीछे जाएं", mr: "मागे जा" })}
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
