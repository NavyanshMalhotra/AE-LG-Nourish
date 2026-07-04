import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { useMemo, useState } from "react";
import { Search, IndianRupee } from "lucide-react";
import { useI18n, type TT } from "@/lib/i18n";

export const Route = createFileRoute("/ingredients")({
  head: () => ({
    meta: [
      { title: "Affordable Foods Database — NOURISH" },
      { name: "description", content: "Search local, affordable foods in Maharashtra. Prices, benefits, substitutes, and easy recipes." },
      { property: "og:title", content: "Affordable Foods Database — NOURISH" },
      { property: "og:description", content: "Local foods, prices, and nutrition benefits." },
    ],
  }),
  component: IngredientsPage,
});

type FoodCat = "Grains" | "Lentils" | "Vegetables" | "Fruits" | "Protein Sources";
type Food = {
  name: TT; category: FoodCat; price: number;
  benefits: TT; substitutes: TT; useFor: string[]; local: TT;
};

const foods: Food[] = [
  { name: { en: "Bajra", hi: "बाजरा", mr: "बाजरी" }, category: "Grains", price: 45, benefits: { en: "Iron, magnesium, sustained energy", hi: "आयरन, मैग्नीशियम, स्थायी ऊर्जा", mr: "लोह, मॅग्नेशियम, टिकाऊ ऊर्जा" }, substitutes: { en: "Jowar, ragi", hi: "ज्वार, रागी", mr: "ज्वारी, नाचणी" }, useFor: ["iron", "energy", "millet"], local: { en: "Widely grown in Maharashtra", hi: "महाराष्ट्र में व्यापक रूप से उगाया जाता है", mr: "महाराष्ट्रात मोठ्या प्रमाणावर पिकवले जाते" } },
  { name: { en: "Jowar", hi: "ज्वार", mr: "ज्वारी" }, category: "Grains", price: 40, benefits: { en: "Fibre, iron, B-vitamins", hi: "फाइबर, आयरन, बी-विटामिन", mr: "तंतू, लोह, बी-जीवनसत्त्व" }, substitutes: { en: "Bajra, wheat", hi: "बाजरा, गेहूं", mr: "बाजरी, गहू" }, useFor: ["energy", "millet"], local: { en: "Common in rural belts", hi: "ग्रामीण क्षेत्रों में आम", mr: "ग्रामीण भागात सामान्य" } },
  { name: { en: "Ragi", hi: "रागी", mr: "नाचणी" }, category: "Grains", price: 60, benefits: { en: "Calcium, iron, child growth", hi: "कैल्शियम, आयरन, बच्चों का विकास", mr: "कॅल्शियम, लोह, मुलांची वाढ" }, substitutes: { en: "Bajra", hi: "बाजरा", mr: "बाजरी" }, useFor: ["calcium", "child", "millet"], local: { en: "Available year-round", hi: "साल भर उपलब्ध", mr: "वर्षभर उपलब्ध" } },
  { name: { en: "Rice", hi: "चावल", mr: "तांदूळ" }, category: "Grains", price: 50, benefits: { en: "Energy, easy to digest", hi: "ऊर्जा, पचाने में आसान", mr: "ऊर्जा, पचण्यास सोपे" }, substitutes: { en: "Jowar, bajra", hi: "ज्वार, बाजरा", mr: "ज्वारी, बाजरी" }, useFor: ["energy"], local: { en: "Staple", hi: "मुख्य आहार", mr: "प्रमुख आहार" } },
  { name: { en: "Wheat", hi: "गेहूं", mr: "गहू" }, category: "Grains", price: 35, benefits: { en: "Energy, fibre", hi: "ऊर्जा, फाइबर", mr: "ऊर्जा, तंतू" }, substitutes: { en: "Jowar", hi: "ज्वार", mr: "ज्वारी" }, useFor: ["energy"], local: { en: "Staple", hi: "मुख्य आहार", mr: "प्रमुख आहार" } },
  { name: { en: "Moong dal", hi: "मूंग दाल", mr: "मूग डाळ" }, category: "Lentils", price: 110, benefits: { en: "Easy protein, light", hi: "आसान प्रोटीन, हल्की", mr: "सोपे प्रथिने, हलकी" }, substitutes: { en: "Masoor, toor", hi: "मसूर, तूर", mr: "मसूर, तूर" }, useFor: ["protein", "child"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Masoor dal", hi: "मसूर दाल", mr: "मसूर डाळ" }, category: "Lentils", price: 90, benefits: { en: "Iron, protein, cooks fast", hi: "आयरन, प्रोटीन, जल्दी पकती", mr: "लोह, प्रथिने, झटपट शिजते" }, substitutes: { en: "Moong dal", hi: "मूंग दाल", mr: "मूग डाळ" }, useFor: ["iron", "protein"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Chana dal", hi: "चना दाल", mr: "चणा डाळ" }, category: "Lentils", price: 95, benefits: { en: "Protein, fibre", hi: "प्रोटीन, फाइबर", mr: "प्रथिने, तंतू" }, substitutes: { en: "Toor dal", hi: "तूर दाल", mr: "तूर डाळ" }, useFor: ["protein"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Toor dal", hi: "तूर दाल", mr: "तूर डाळ" }, category: "Lentils", price: 130, benefits: { en: "Daily protein", hi: "दैनिक प्रोटीन", mr: "दैनंदिन प्रथिने" }, substitutes: { en: "Chana, masoor", hi: "चना, मसूर", mr: "चणा, मसूर" }, useFor: ["protein"], local: { en: "Staple", hi: "मुख्य आहार", mr: "प्रमुख आहार" } },
  { name: { en: "Whole chana", hi: "साबुत चना", mr: "अख्खे चणे" }, category: "Lentils", price: 80, benefits: { en: "Iron, protein, slow energy", hi: "आयरन, प्रोटीन, धीमी ऊर्जा", mr: "लोह, प्रथिने, हळू ऊर्जा" }, substitutes: { en: "Matki", hi: "मटकी", mr: "मटकी" }, useFor: ["iron", "protein", "women"], local: { en: "Affordable", hi: "किफायती", mr: "परवडणारे" } },
  { name: { en: "Matki", hi: "मटकी", mr: "मटकी" }, category: "Lentils", price: 100, benefits: { en: "Sprouting, iron, protein", hi: "अंकुरण, आयरन, प्रोटीन", mr: "मोड येणारे, लोह, प्रथिने" }, substitutes: { en: "Moong", hi: "मूंग", mr: "मूग" }, useFor: ["iron", "protein", "nocook"], local: { en: "Local favourite", hi: "स्थानीय पसंदीदा", mr: "स्थानिक आवडते" } },
  { name: { en: "Spinach", hi: "पालक", mr: "पालक" }, category: "Vegetables", price: 15, benefits: { en: "Iron, folate, vitamin C", hi: "आयरन, फोलेट, विटामिन C", mr: "लोह, फोलेट, जीवनसत्त्व C" }, substitutes: { en: "Methi", hi: "मेथी", mr: "मेथी" }, useFor: ["iron", "women", "under20"], local: { en: "Winter & monsoon", hi: "सर्दी और मानसून", mr: "हिवाळा आणि पावसाळा" } },
  { name: { en: "Methi", hi: "मेथी", mr: "मेथी" }, category: "Vegetables", price: 15, benefits: { en: "Iron, fibre", hi: "आयरन, फाइबर", mr: "लोह, तंतू" }, substitutes: { en: "Spinach", hi: "पालक", mr: "पालक" }, useFor: ["iron", "women", "under20"], local: { en: "Cool season", hi: "ठंडा मौसम", mr: "थंड हंगाम" } },
  { name: { en: "Pumpkin", hi: "कद्दू", mr: "भोपळा" }, category: "Vegetables", price: 20, benefits: { en: "Vitamin A, fibre", hi: "विटामिन A, फाइबर", mr: "जीवनसत्त्व A, तंतू" }, substitutes: { en: "Carrot", hi: "गाजर", mr: "गाजर" }, useFor: ["child", "under20"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Cabbage", hi: "पत्ता गोभी", mr: "कोबी" }, category: "Vegetables", price: 20, benefits: { en: "Vitamin C, low cost", hi: "विटामिन C, कम लागत", mr: "जीवनसत्त्व C, कमी खर्च" }, substitutes: { en: "Cauliflower", hi: "फूल गोभी", mr: "फुलकोबी" }, useFor: ["under20"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Carrots", hi: "गाजर", mr: "गाजर" }, category: "Vegetables", price: 30, benefits: { en: "Vitamin A, fibre", hi: "विटामिन A, फाइबर", mr: "जीवनसत्त्व A, तंतू" }, substitutes: { en: "Pumpkin", hi: "कद्दू", mr: "भोपळा" }, useFor: ["child"], local: { en: "Winter", hi: "सर्दी", mr: "हिवाळा" } },
  { name: { en: "Potatoes", hi: "आलू", mr: "बटाटा" }, category: "Vegetables", price: 25, benefits: { en: "Energy, potassium", hi: "ऊर्जा, पोटैशियम", mr: "ऊर्जा, पोटॅशियम" }, substitutes: { en: "Sweet potato", hi: "शकरकंद", mr: "रताळे" }, useFor: ["energy", "child"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Onions", hi: "प्याज", mr: "कांदा" }, category: "Vegetables", price: 30, benefits: { en: "Flavour, vitamin C", hi: "स्वाद, विटामिन C", mr: "चव, जीवनसत्त्व C" }, substitutes: { en: "—", hi: "—", mr: "—" }, useFor: [], local: { en: "Staple", hi: "मुख्य आहार", mr: "प्रमुख आहार" } },
  { name: { en: "Tomatoes", hi: "टमाटर", mr: "टोमॅटो" }, category: "Vegetables", price: 30, benefits: { en: "Vitamin C, lycopene", hi: "विटामिन C, लाइकोपीन", mr: "जीवनसत्त्व C, लायकोपीन" }, substitutes: { en: "—", hi: "—", mr: "—" }, useFor: [], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Banana", hi: "केला", mr: "केळी" }, category: "Fruits", price: 10, benefits: { en: "Energy, potassium", hi: "ऊर्जा, पोटैशियम", mr: "ऊर्जा, पोटॅशियम" }, substitutes: { en: "Guava", hi: "अमरूद", mr: "पेरू" }, useFor: ["child", "energy", "under20", "nocook"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Guava", hi: "अमरूद", mr: "पेरू" }, category: "Fruits", price: 15, benefits: { en: "Vitamin C, fibre", hi: "विटामिन C, फाइबर", mr: "जीवनसत्त्व C, तंतू" }, substitutes: { en: "Banana", hi: "केला", mr: "केळी" }, useFor: ["child", "under20", "nocook"], local: { en: "Winter", hi: "सर्दी", mr: "हिवाळा" } },
  { name: { en: "Papaya", hi: "पपीता", mr: "पपई" }, category: "Fruits", price: 30, benefits: { en: "Vitamin A & C, digestion", hi: "विटामिन A और C, पाचन", mr: "जीवनसत्त्व A आणि C, पचन" }, substitutes: { en: "—", hi: "—", mr: "—" }, useFor: ["women", "child"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Eggs", hi: "अंडे", mr: "अंडी" }, category: "Protein Sources", price: 7, benefits: { en: "Protein, B12, complete amino acids", hi: "प्रोटीन, B12, पूर्ण अमीनो एसिड", mr: "प्रथिने, B12, संपूर्ण अमिनो आम्ले" }, substitutes: { en: "Paneer, dal", hi: "पनीर, दाल", mr: "पनीर, डाळ" }, useFor: ["protein", "child", "women", "under20"], local: { en: "Widely available", hi: "व्यापक रूप से उपलब्ध", mr: "मोठ्या प्रमाणावर उपलब्ध" } },
  { name: { en: "Sprouts (moong)", hi: "स्प्राउट्स (मूंग)", mr: "मोड (मूग)" }, category: "Protein Sources", price: 50, benefits: { en: "Protein, iron, no cooking needed", hi: "प्रोटीन, आयरन, पकाने की ज़रूरत नहीं", mr: "प्रथिने, लोह, शिजवण्याची गरज नाही" }, substitutes: { en: "Matki", hi: "मटकी", mr: "मटकी" }, useFor: ["protein", "iron", "women", "nocook"], local: { en: "Make at home", hi: "घर पर बनाएं", mr: "घरी बनवा" } },
  { name: { en: "Peanuts", hi: "मूंगफली", mr: "शेंगदाणे" }, category: "Protein Sources", price: 120, benefits: { en: "Protein, healthy fats", hi: "प्रोटीन, स्वस्थ वसा", mr: "प्रथिने, निरोगी स्निग्ध" }, substitutes: { en: "Roasted chana", hi: "भुना चना", mr: "भाजलेले चणे" }, useFor: ["protein", "energy", "child"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Curd", hi: "दही", mr: "दही" }, category: "Protein Sources", price: 60, benefits: { en: "Calcium, probiotics, protein", hi: "कैल्शियम, प्रोबायोटिक्स, प्रोटीन", mr: "कॅल्शियम, प्रोबायोटिक्स, प्रथिने" }, substitutes: { en: "Milk", hi: "दूध", mr: "दूध" }, useFor: ["child", "women", "nocook"], local: { en: "Year-round", hi: "साल भर", mr: "वर्षभर" } },
  { name: { en: "Milk", hi: "दूध", mr: "दूध" }, category: "Protein Sources", price: 60, benefits: { en: "Calcium, protein", hi: "कैल्शियम, प्रोटीन", mr: "कॅल्शियम, प्रथिने" }, substitutes: { en: "Curd", hi: "दही", mr: "दही" }, useFor: ["child", "women"], local: { en: "Daily", hi: "दैनिक", mr: "दररोज" } },
  { name: { en: "Soy chunks", hi: "सोया चंक्स", mr: "सोया चंक्स" }, category: "Protein Sources", price: 80, benefits: { en: "High protein, low cost", hi: "उच्च प्रोटीन, कम लागत", mr: "उच्च प्रथिने, कमी खर्च" }, substitutes: { en: "Paneer", hi: "पनीर", mr: "पनीर" }, useFor: ["protein", "women"], local: { en: "Available in stores", hi: "दुकानों में उपलब्ध", mr: "दुकानांमध्ये उपलब्ध" } },
  { name: { en: "Fish (small)", hi: "मछली (छोटी)", mr: "मासे (लहान)" }, category: "Protein Sources", price: 120, benefits: { en: "Protein, omega-3", hi: "प्रोटीन, ओमेगा-3", mr: "प्रथिने, ओमेगा-3" }, substitutes: { en: "Eggs", hi: "अंडे", mr: "अंडी" }, useFor: ["protein", "women", "child"], local: { en: "Coastal areas", hi: "तटीय क्षेत्र", mr: "किनारी भाग" } },
];

function IngredientsPage() {
  const { tt } = useI18n();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<string[]>([]);
  const toggle = (id: string) => setActive((a) => a.includes(id) ? a.filter((x) => x !== id) : [...a, id]);

  const filterDefs = [
    { id: "under20", label: tt({ en: "Under ₹20", hi: "₹20 से कम", mr: "₹20 पेक्षा कमी" }) },
    { id: "under50", label: tt({ en: "Under ₹50", hi: "₹50 से कम", mr: "₹50 पेक्षा कमी" }) },
    { id: "protein", label: tt({ en: "High protein", hi: "उच्च प्रोटीन", mr: "उच्च प्रथिने" }) },
    { id: "iron", label: tt({ en: "Iron-rich", hi: "आयरन युक्त", mr: "लोह समृद्ध" }) },
    { id: "child", label: tt({ en: "Good for children", hi: "बच्चों के लिए अच्छा", mr: "मुलांसाठी चांगले" }) },
    { id: "women", label: tt({ en: "Good for women", hi: "महिलाओं के लिए अच्छा", mr: "महिलांसाठी चांगले" }) },
    { id: "millet", label: tt({ en: "Millet-based", hi: "बाजरा आधारित", mr: "बाजरी आधारित" }) },
    { id: "nocook", label: tt({ en: "No cooking needed", hi: "पकाने की ज़रूरत नहीं", mr: "शिजवण्याची गरज नाही" }) },
  ];

  const categoryDefs: { id: string; label: string }[] = [
    { id: "All", label: tt({ en: "All", hi: "सभी", mr: "सर्व" }) },
    { id: "Grains", label: tt({ en: "Grains", hi: "अनाज", mr: "धान्य" }) },
    { id: "Lentils", label: tt({ en: "Lentils", hi: "दालें", mr: "डाळी" }) },
    { id: "Vegetables", label: tt({ en: "Vegetables", hi: "सब्ज़ियां", mr: "भाज्या" }) },
    { id: "Fruits", label: tt({ en: "Fruits", hi: "फल", mr: "फळे" }) },
    { id: "Protein Sources", label: tt({ en: "Protein Sources", hi: "प्रोटीन स्रोत", mr: "प्रथिने स्रोत" }) },
  ];

  const results = useMemo(() => foods.filter((f) => {
    if (cat !== "All" && f.category !== cat) return false;
    if (q && !`${tt(f.name)} ${tt(f.benefits)} ${f.price}`.toLowerCase().includes(q.toLowerCase())) return false;
    for (const id of active) {
      if (id === "under20" && f.price > 20) return false;
      if (id === "under50" && f.price > 50) return false;
      if (!["under20", "under50"].includes(id) && !f.useFor.includes(id)) return false;
    }
    return true;
  }), [q, cat, active, tt]);

  return (
    <SiteLayout>
      <PageHero
        title={tt({ en: "Affordable Ingredients", hi: "किफायती सामग्री", mr: "परवडणारे साहित्य" })}
        subtitle={tt({ en: "Find low-cost, local foods that support nutrition.", hi: "कम लागत, स्थानीय खाद्य खोजें जो पोषण में मदद करें।", mr: "कमी खर्चाचे, स्थानिक अन्न शोधा." })}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={tt({ en: "Search foods, prices, or benefits", hi: "खाद्य, कीमत या लाभ खोजें", mr: "अन्न, किंमत किंवा फायदे शोधा" })}
              className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-3 text-sm"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {categoryDefs.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {filterDefs.map((f) => (
              <button key={f.id} onClick={() => toggle(f.id)} className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${active.includes(f.id) ? "border-primary bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground"}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((f) => (
            <div key={tt(f.name)} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-maroon">{tt(f.name)}</h3>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-turmeric/40 px-2 py-0.5 text-xs font-bold text-maroon">
                  <IndianRupee className="h-3 w-3" />{f.price}
                </span>
              </div>
              <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">
                {categoryDefs.find((c) => c.id === f.category)?.label ?? f.category}
              </p>
              <p className="mt-2 text-sm text-foreground/85"><span className="font-semibold">{tt({ en: "Benefits:", hi: "लाभ:", mr: "फायदे:" })}</span> {tt(f.benefits)}</p>
              <p className="mt-1 text-sm text-foreground/75"><span className="font-semibold">{tt({ en: "Substitutes:", hi: "विकल्प:", mr: "पर्याय:" })}</span> {tt(f.substitutes)}</p>
              <p className="mt-1 text-xs text-muted-foreground">{tt(f.local)}</p>
            </div>
          ))}
          {results.length === 0 && <p className="col-span-full py-10 text-center text-muted-foreground">{tt({ en: "No foods match those filters.", hi: "उन फिल्टर से कोई खाद्य मेल नहीं खाता।", mr: "त्या फिल्टरशी कोणतेही अन्न जुळत नाही." })}</p>}
        </div>
      </div>
    </SiteLayout>
  );
}
