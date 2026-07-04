import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/consult")({
  head: () => ({
    meta: [
      { title: "Free Nutrition Consultations — NOURISH" },
      { name: "description", content: "Book a free short consultation with volunteer nutritionists. WhatsApp, phone, or in-person camps." },
      { property: "og:title", content: "Free Nutrition Consultations — NOURISH" },
      { property: "og:description", content: "Free nutrition guidance for women, parents, and community workers." },
    ],
  }),
  component: ConsultPage,
});

function ConsultPage() {
  const { tt } = useI18n();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", lang: "Marathi", userType: "Woman", concern: "anemia",
    question: "", mode: "WhatsApp", date: "",
  });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error(tt({ en: "Please share your name and phone number.", hi: "कृपया अपना नाम और फोन नंबर साझा करें।", mr: "कृपया तुमचे नाव आणि फोन नंबर शेअर करा." }));
      return;
    }
    setDone(true);
    toast.success(tt({ en: "Request received", hi: "अनुरोध प्राप्त हुआ", mr: "विनंती मिळाली" }));
  };
  return (
    <SiteLayout>
      <PageHero
        title={tt({ en: "Free Nutrition Consultations", hi: "मुफ्त पोषण परामर्श", mr: "मोफत पोषण सल्ला" })}
        subtitle={tt({ en: "Ask questions or book a short session with volunteer nutritionists.", hi: "प्रश्न पूछें या स्वयंसेवी पोषण विशेषज्ञों के साथ छोटा सत्र बुक करें।", mr: "प्रश्न विचारा किंवा स्वयंसेवक पोषणतज्ञांसोबत लहान सत्र बुक करा." })}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[2fr_1fr]">
        {!done ? (
          <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={tt({ en: "Name", hi: "नाम", mr: "नाव" })}><input className="inp" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
              <Field label={tt({ en: "Phone number", hi: "फोन नंबर", mr: "फोन नंबर" })}><input className="inp" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></Field>
              <Field label={tt({ en: "Preferred language", hi: "पसंदीदा भाषा", mr: "पसंतीची भाषा" })}>
                <select className="inp" value={form.lang} onChange={(e) => setForm({ ...form, lang: e.target.value })}>
                  <option>English</option><option>हिंदी</option><option>मराठी</option>
                </select>
              </Field>
              <Field label={tt({ en: "I am a", hi: "मैं हूं", mr: "मी आहे" })}>
                <select className="inp" value={form.userType} onChange={(e) => setForm({ ...form, userType: e.target.value })}>
                  <option>{tt({ en: "Woman", hi: "महिला", mr: "महिला" })}</option>
                  <option>{tt({ en: "Parent", hi: "माता-पिता", mr: "पालक" })}</option>
                  <option>{tt({ en: "Child", hi: "बच्चा", mr: "मूल" })}</option>
                  <option>{tt({ en: "Community Worker", hi: "सामुदायिक कार्यकर्ता", mr: "सामुदायिक कार्यकर्ता" })}</option>
                </select>
              </Field>
              <Field label={tt({ en: "Main concern", hi: "मुख्य चिंता", mr: "मुख्य चिंता" })}>
                <select className="inp" value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })}>
                  <option value="anemia">{tt({ en: "Anemia", hi: "एनीमिया", mr: "रक्तक्षय" })}</option>
                  <option value="child">{tt({ en: "Child nutrition", hi: "बच्चों का पोषण", mr: "मुलांचे पोषण" })}</option>
                  <option value="budget">{tt({ en: "Affordable diets", hi: "किफायती आहार", mr: "परवडणारे आहार" })}</option>
                  <option value="menstrual">{tt({ en: "Menstrual health", hi: "मासिक स्वास्थ्य", mr: "मासिक आरोग्य" })}</option>
                  <option value="energy">{tt({ en: "Low energy", hi: "कम ऊर्जा", mr: "कमी ऊर्जा" })}</option>
                  <option value="other">{tt({ en: "Other", hi: "अन्य", mr: "इतर" })}</option>
                </select>
              </Field>
              <Field label={tt({ en: "Consultation mode", hi: "परामर्श माध्यम", mr: "सल्ला माध्यम" })}>
                <select className="inp" value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })}>
                  <option>WhatsApp</option>
                  <option>{tt({ en: "Phone call", hi: "फोन कॉल", mr: "फोन कॉल" })}</option>
                  <option>{tt({ en: "In-person camp", hi: "व्यक्तिगत शिविर", mr: "प्रत्यक्ष शिबिर" })}</option>
                </select>
              </Field>
              <Field label={tt({ en: "Preferred date & time", hi: "पसंदीदा दिनांक और समय", mr: "पसंतीचा दिनांक आणि वेळ" })} full>
                <input className="inp" type="datetime-local" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </Field>
              <Field label={tt({ en: "Your question", hi: "आपका प्रश्न", mr: "तुमचा प्रश्न" })} full>
                <textarea rows={4} className="inp" value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} placeholder={tt({ en: "Tell us briefly what you'd like help with.", hi: "संक्षेप में बताएं आपको किस बारे में मदद चाहिए।", mr: "तुम्हाला कशासाठी मदत हवी आहे ते थोडक्यात सांगा." })} />
              </Field>
            </div>
            <button type="submit" className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              {tt({ en: "Submit request", hi: "अनुरोध भेजें", mr: "विनंती पाठवा" })}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              {tt({ en: "This service provides general nutrition guidance and does not replace medical diagnosis or emergency care.", hi: "यह सेवा सामान्य पोषण मार्गदर्शन प्रदान करती है और चिकित्सा निदान या आपातकालीन देखभाल का विकल्प नहीं है।", mr: "ही सेवा सामान्य पोषण मार्गदर्शन प्रदान करते आणि वैद्यकीय निदान किंवा आपत्कालीन काळजीला पर्याय नाही." })}
            </p>
            <style>{`.inp{width:100%;border:1px solid var(--color-border);background:var(--color-background);padding:.625rem .75rem;border-radius:.75rem;font-size:.875rem}`}</style>
          </form>
        ) : (
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h2 className="mt-3 font-display text-2xl font-bold text-maroon">{tt({ en: "Thank you", hi: "धन्यवाद", mr: "धन्यवाद" })}</h2>
            <p className="mt-2 text-foreground/80">{tt({ en: "A volunteer nutritionist will contact you soon.", hi: "एक स्वयंसेवी पोषण विशेषज्ञ जल्द ही आपसे संपर्क करेगा।", mr: "स्वयंसेवक पोषणतज्ञ लवकरच तुमच्याशी संपर्क साधेल." })}</p>
            <button onClick={() => { setDone(false); setForm({ ...form, question: "" }); }} className="mt-5 rounded-full border-2 border-maroon px-5 py-2 text-sm font-semibold text-maroon">{tt({ en: "Submit another", hi: "एक और भेजें", mr: "आणखी पाठवा" })}</button>
          </div>
        )}

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-cream p-5">
            <h3 className="font-display text-lg font-bold text-maroon">{tt({ en: "What we help with", hi: "हम किसमें मदद करते हैं", mr: "आम्ही कशात मदत करतो" })}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                tt({ en: "Child nutrition", hi: "बच्चों का पोषण", mr: "मुलांचे पोषण" }),
                tt({ en: "Affordable diets", hi: "किफायती आहार", mr: "परवडणारे आहार" }),
                tt({ en: "Women's health", hi: "महिलाओं का स्वास्थ्य", mr: "महिलांचे आरोग्य" }),
                tt({ en: "Anemia prevention", hi: "एनीमिया रोकथाम", mr: "रक्तक्षय प्रतिबंध" }),
              ].map((x) => (
                <li key={x} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-lg font-bold text-maroon">{tt({ en: "Volunteer nutritionists", hi: "स्वयंसेवी पोषण विशेषज्ञ", mr: "स्वयंसेवक पोषणतज्ञ" })}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tt({ en: "Our team includes practicing nutritionists who volunteer time each week for community sessions in English, Hindi, and Marathi.", hi: "हमारी टीम में अभ्यासरत पोषण विशेषज्ञ शामिल हैं जो अंग्रेजी, हिंदी और मराठी में सामुदायिक सत्रों के लिए हर सप्ताह समय देते हैं।", mr: "आमच्या टीममध्ये कार्यरत पोषणतज्ञ आहेत जे इंग्रजी, हिंदी आणि मराठीत सामुदायिक सत्रांसाठी दर आठवड्याला वेळ देतात." })}</p>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-foreground/70">{label}</span>
      {children}
    </label>
  );
}
