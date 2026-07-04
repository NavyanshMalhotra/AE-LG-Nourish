import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Apple, Video, Phone, ArrowRight, User, Baby, Sparkles, ChefHat
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
      <section className="relative flex-1 w-full flex flex-col items-center justify-center overflow-hidden px-4 py-8 sm:p-6 text-center">
        {/* Soft, premium animated background blobs */}
        <div className="absolute inset-0 -z-10 bg-background/50" />
        <div className="absolute -top-[20%] left-[10%] -z-10 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-turmeric/20 blur-[150px]" />

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-3xl mx-auto space-y-10">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-maroon via-maroon to-primary/80">
              {tt({ en: "Welcome to NOURISH", hi: "NOURISH में आपका स्वागत है", mr: "NOURISH मध्ये आपले स्वागत आहे" })}
            </h1>
            <p className="text-xl sm:text-3xl font-medium text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              {tt({ 
                en: "Simple, healthy, and affordable food for your family.", 
                hi: "आपके परिवार के लिए आसान, स्वस्थ और किफायती भोजन।", 
                mr: "तुमच्या कुटुंबासाठी सोपे, निरोगी आणि परवडणारे अन्न." 
              })}
            </p>
            <div className="pt-8">
              <button 
                onClick={() => setStep(2)}
                className="group relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-primary to-primary/80 px-10 py-5 text-xl font-bold text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] active:scale-95"
              >
                {tt({ en: "Start Here", hi: "यहाँ से शुरू करें", mr: "येथून सुरू करा" })}
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 max-w-4xl mx-auto w-full">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-12">
              {tt({ en: "Who needs nutrition help today?", hi: "आज किसे पोषण की मदद चाहिए?", mr: "आज कोणाला पोषणाची गरज आहे?" })}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Women Card */}
              <button 
                onClick={() => setStep(3)} 
                className="group relative flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[32px] border border-white/40 bg-white/60 p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] active:scale-[0.98]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="rounded-full bg-primary/10 p-8 shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <User className="h-20 w-20 text-primary" />
                </div>
                <span className="text-4xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {tt({ en: "Women", hi: "महिलाएं", mr: "महिला" })}
                </span>
              </button>

              {/* Children Card */}
              <button 
                onClick={() => setStep(3)} 
                className="group relative flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[32px] border border-white/40 bg-white/60 p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] active:scale-[0.98]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-earth/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="rounded-full bg-earth/10 p-8 shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <Baby className="h-20 w-20 text-earth" />
                </div>
                <span className="text-4xl font-bold text-foreground transition-colors group-hover:text-earth">
                  {tt({ en: "Children", hi: "बच्चे", mr: "मुले" })}
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-6xl mx-auto w-full">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon mb-12">
              {tt({ en: "What would you like to do?", hi: "आप क्या करना चाहेंगे?", mr: "तुम्हाला काय करायला आवडेल?" })}
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  to: "/planner", 
                  icon: Sparkles, 
                  color: "primary",
                  title: { en: "Custom Meal Plan", hi: "कस्टम भोजन योजना", mr: "सानुकूल जेवण योजना" },
                  desc: { en: "Get a personalized weekly plan", hi: "एक व्यक्तिगत साप्ताहिक योजना प्राप्त करें", mr: "वैयक्तिकृत साप्ताहिक योजना मिळवा" }
                },
                { 
                  to: "/recipes", 
                  icon: ChefHat, 
                  color: "maroon",
                  bgStyle: "turmeric/30",
                  title: { en: "Healthy Recipes", hi: "स्वस्थ रेसिपी", mr: "निरोगी रेसिपी" },
                  desc: { en: "Browse local meals", hi: "स्थानीय भोजन ब्राउज़ करें", mr: "स्थानिक जेवण ब्राउझ करा" }
                },
                { 
                  to: "/ingredients", 
                  icon: Apple, 
                  color: "earth",
                  title: { en: "Find Ingredients", hi: "सामग्री खोजें", mr: "साहित्य शोधा" },
                  desc: { en: "Local prices & benefits", hi: "स्थानीय कीमतें और लाभ", mr: "स्थानिक किमती आणि फायदे" }
                },
                { 
                  to: "/videos", 
                  icon: Video, 
                  color: "primary",
                  title: { en: "Doctor Videos", hi: "डॉक्टर के वीडियो", mr: "डॉक्टरांचे व्हिडिओ" },
                  desc: { en: "Learn from experts", hi: "विशेषज्ञों से सीखें", mr: "तज्ज्ञांकडून शिका" }
                },
                { 
                  to: "/consult", 
                  icon: Phone, 
                  color: "earth",
                  colSpan: "sm:col-span-2 lg:col-span-1",
                  title: { en: "Free Consult", hi: "मुफ्त सलाह", mr: "मोफत सल्ला" },
                  desc: { en: "Call a nutritionist", hi: "पोषण विशेषज्ञ को कॉल करें", mr: "पोषणतज्ञांना कॉल करा" }
                }
              ].map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.to} 
                  className={`group relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-[32px] border border-white/40 bg-white/60 p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] active:scale-[0.98] ${item.colSpan || ''}`}
                >
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-br from-${item.color}/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className={`rounded-full bg-${item.bgStyle || item.color + '/10'} p-6 shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className={`h-14 w-14 text-${item.color}`} />
                  </div>
                  <div className="space-y-2">
                    <span className={`block text-2xl font-bold text-foreground transition-colors group-hover:text-${item.color}`}>
                      {tt(item.title)}
                    </span>
                    <p className="text-[17px] text-foreground/70 font-medium">
                      {tt(item.desc)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <button 
              onClick={() => setStep(2)}
              className="mt-16 inline-flex items-center gap-2 rounded-full px-6 py-3 text-lg font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
            >
              ← {tt({ en: "Go Back", hi: "पीछे जाएं", mr: "मागे जा" })}
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
