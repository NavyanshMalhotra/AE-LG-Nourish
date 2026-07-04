import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { useState } from "react";
import { Play, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Doctor & Nutrition Videos — NOURISH" },
      { name: "description", content: "Short, simple videos by doctors and nutritionists explaining nutrition in everyday language." },
      { property: "og:title", content: "Doctor & Nutrition Videos — NOURISH" },
      { property: "og:description", content: "Trusted nutrition advice in English, Hindi, and Marathi." },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  const { tt } = useI18n();
  const categories = [
    { id: "All", label: tt({ en: "All", hi: "सभी", mr: "सर्व" }) },
    { id: "Anemia", label: tt({ en: "Anemia", hi: "एनीमिया", mr: "रक्तक्षय" }) },
    { id: "Affordable Healthy Eating", label: tt({ en: "Affordable Healthy Eating", hi: "किफायती स्वस्थ भोजन", mr: "परवडणारे आरोग्यदायी जेवण" }) },
    { id: "Nutrition Myths", label: tt({ en: "Nutrition Myths", hi: "पोषण मिथक", mr: "पोषण समज" }) },
    { id: "Children's Growth", label: tt({ en: "Children's Growth", hi: "बच्चों का विकास", mr: "मुलांची वाढ" }) },
    { id: "Hydration", label: tt({ en: "Hydration", hi: "हाइड्रेशन", mr: "हायड्रेशन" }) },
    { id: "Protein on a Budget", label: tt({ en: "Protein on a Budget", hi: "बजट में प्रोटीन", mr: "बजेटमध्ये प्रथिने" }) },
    { id: "Menstrual Health", label: tt({ en: "Menstrual Health", hi: "मासिक स्वास्थ्य", mr: "मासिक आरोग्य" }) },
    { id: "Millet-Based Meals", label: tt({ en: "Millet-Based Meals", hi: "बाजरा आधारित भोजन", mr: "बाजरी आधारित जेवण" }) },
  ];

  const videos = [
    { title: tt({ en: "What is anemia and how can food help?", hi: "एनीमिया क्या है और भोजन कैसे मदद कर सकता है?", mr: "रक्तक्षय म्हणजे काय आणि अन्न कशी मदत करू शकते?" }), cat: "Anemia", catLabel: tt({ en: "Anemia", hi: "एनीमिया", mr: "रक्तक्षय" }), lang: tt({ en: "Hindi", hi: "हिंदी", mr: "हिंदी" }), duration: "4:20", doctor: tt({ en: "Dr. Priya Joshi", hi: "डॉ. प्रिया जोशी", mr: "डॉ. प्रिया जोशी" }), desc: tt({ en: "Simple foods that fight anemia, available at any local market.", hi: "एनीमिया से लड़ने वाले सरल खाद्य पदार्थ, किसी भी स्थानीय बाजार में उपलब्ध।", mr: "रक्तक्षयाशी लढणारे साधे अन्न, कोणत्याही स्थानिक बाजारात उपलब्ध." }) },
    { title: tt({ en: "How to eat healthy under ₹50 a meal", hi: "₹50 में एक भोजन कैसे स्वस्थ खाएं", mr: "₹50 मध्ये एक जेवण कसे आरोग्यदायी खावे" }), cat: "Affordable Healthy Eating", catLabel: tt({ en: "Affordable Healthy Eating", hi: "किफायती स्वस्थ भोजन", mr: "परवडणारे आरोग्यदायी जेवण" }), lang: tt({ en: "Marathi", hi: "मराठी", mr: "मराठी" }), duration: "6:10", doctor: tt({ en: "Nutritionist Reema P.", hi: "पोषण विशेषज्ञ रीमा पी.", mr: "पोषणतज्ञ रीमा पी." }), desc: tt({ en: "Real meal examples for a working family budget.", hi: "कामकाजी परिवार के बजट के लिए वास्तविक भोजन उदाहरण।", mr: "कामकरी कुटुंबाच्या बजेटसाठी प्रत्यक्ष जेवण उदाहरणे." }) },
    { title: tt({ en: "Protein does not have to be expensive", hi: "प्रोटीन महंगा होना ज़रूरी नहीं", mr: "प्रथिने महाग असण्याची गरज नाही" }), cat: "Protein on a Budget", catLabel: tt({ en: "Protein on a Budget", hi: "बजट में प्रोटीन", mr: "बजेटमध्ये प्रथिने" }), lang: tt({ en: "Hindi", hi: "हिंदी", mr: "हिंदी" }), duration: "5:00", doctor: tt({ en: "Dr. Anand K.", hi: "डॉ. आनंद के.", mr: "डॉ. आनंद के." }), desc: tt({ en: "Dal, sprouts, eggs, peanuts — daily protein on a tight budget.", hi: "दाल, स्प्राउट्स, अंडे, मूंगफली — कम बजट में दैनिक प्रोटीन।", mr: "डाळ, मोड, अंडी, शेंगदाणे — कमी बजेटमध्ये दैनंदिन प्रथिने." }) },
    { title: tt({ en: "Best tiffin ideas for school children", hi: "स्कूली बच्चों के लिए बेहतरीन टिफिन विचार", mr: "शाळेतील मुलांसाठी सर्वोत्तम डबा कल्पना" }), cat: "Children's Growth", catLabel: tt({ en: "Children's Growth", hi: "बच्चों का विकास", mr: "मुलांची वाढ" }), lang: tt({ en: "Marathi", hi: "मराठी", mr: "मराठी" }), duration: "3:45", doctor: tt({ en: "Nutritionist Reema P.", hi: "पोषण विशेषज्ञ रीमा पी.", mr: "पोषणतज्ञ रीमा पी." }), desc: tt({ en: "Tiffin that travels well and keeps kids full till evening.", hi: "टिफिन जो अच्छी तरह सफर करे और बच्चों को शाम तक भरा रखे।", mr: "डबा जो चांगला प्रवास करतो आणि मुलांना संध्याकाळपर्यंत भरून ठेवतो." }) },
    { title: tt({ en: "Why millets like jowar, bajra, and ragi are useful", hi: "ज्वार, बाजरा और रागी जैसे मिलेट क्यों उपयोगी हैं", mr: "ज्वारी, बाजरी आणि नाचणीसारखे भरडधान्य का उपयुक्त आहेत" }), cat: "Millet-Based Meals", catLabel: tt({ en: "Millet-Based Meals", hi: "बाजरा आधारित भोजन", mr: "बाजरी आधारित जेवण" }), lang: tt({ en: "English", hi: "अंग्रेजी", mr: "इंग्रजी" }), duration: "7:30", doctor: tt({ en: "Dr. Priya Joshi", hi: "डॉ. प्रिया जोशी", mr: "डॉ. प्रिया जोशी" }), desc: tt({ en: "Iron, fibre, energy — millets explained simply.", hi: "आयरन, फाइबर, ऊर्जा — मिलेट सरल भाषा में।", mr: "लोह, तंतू, ऊर्जा — भरडधान्य सोप्या भाषेत." }) },
    { title: tt({ en: "Common myths about women's nutrition", hi: "महिलाओं के पोषण के बारे में आम मिथक", mr: "महिलांच्या पोषणाबद्दल सामान्य समज" }), cat: "Nutrition Myths", catLabel: tt({ en: "Nutrition Myths", hi: "पोषण मिथक", mr: "पोषण समज" }), lang: tt({ en: "Hindi", hi: "हिंदी", mr: "हिंदी" }), duration: "5:15", doctor: tt({ en: "Dr. Sunita M.", hi: "डॉ. सुनीता एम.", mr: "डॉ. सुनीता एम." }), desc: tt({ en: "Skip-meals, expensive supplements — what's true and what's not.", hi: "भोजन छोड़ना, महंगे सप्लीमेंट — क्या सच है और क्या नहीं।", mr: "जेवण वगळणे, महाग सप्लिमेंट — काय खरे आणि काय नाही." }) },
    { title: tt({ en: "Healthy hydration for hot work days", hi: "गर्म कार्य दिनों के लिए स्वस्थ हाइड्रेशन", mr: "उष्ण कामाच्या दिवसांसाठी निरोगी हायड्रेशन" }), cat: "Hydration", catLabel: tt({ en: "Hydration", hi: "हाइड्रेशन", mr: "हायड्रेशन" }), lang: tt({ en: "Marathi", hi: "मराठी", mr: "मराठी" }), duration: "3:00", doctor: tt({ en: "Dr. Anand K.", hi: "डॉ. आनंद के.", mr: "डॉ. आनंद के." }), desc: tt({ en: "Cheap home drinks that beat sugary sodas.", hi: "सस्ते घरेलू पेय जो शक्करयुक्त सोडा से बेहतर हैं।", mr: "स्वस्त घरगुती पेये जे साखरयुक्त सोड्यापेक्षा चांगले आहेत." }) },
    { title: tt({ en: "Iron-rich foods for monthly health", hi: "मासिक स्वास्थ्य के लिए आयरन युक्त भोजन", mr: "मासिक आरोग्यासाठी लोह-समृद्ध अन्न" }), cat: "Menstrual Health", catLabel: tt({ en: "Menstrual Health", hi: "मासिक स्वास्थ्य", mr: "मासिक आरोग्य" }), lang: tt({ en: "Hindi", hi: "हिंदी", mr: "हिंदी" }), duration: "4:45", doctor: tt({ en: "Dr. Sunita M.", hi: "डॉ. सुनीता एम.", mr: "डॉ. सुनीता एम." }), desc: tt({ en: "Iron, magnesium, and hydration during the cycle.", hi: "चक्र के दौरान आयरन, मैग्नीशियम और हाइड्रेशन।", mr: "पाळीदरम्यान लोह, मॅग्नेशियम आणि हायड्रेशन." }) },
  ];

  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? videos : videos.filter((v) => v.cat === cat);
  return (
    <SiteLayout>
      <PageHero
        title={tt({ en: "Doctor & Nutrition Videos", hi: "डॉक्टर और पोषण वीडियो", mr: "डॉक्टर आणि पोषण व्हिडिओ" })}
        subtitle={tt({ en: "Short, simple videos explaining nutrition in everyday language.", hi: "रोज़मर्रा की भाषा में पोषण समझाने वाले छोटे, सरल वीडियो।", mr: "रोजच्या भाषेत पोषण समजावणारे छोटे, सोपे व्हिडिओ." })}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <article key={v.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative grid aspect-video place-items-center bg-gradient-to-br from-primary/20 via-turmeric/30 to-earth/20">
                <button className="grid h-14 w-14 place-items-center rounded-full bg-maroon text-maroon-foreground shadow-lg transition-transform hover:scale-105">
                  <Play className="h-6 w-6 fill-current" />
                </button>
                <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-background/90 px-2 py-0.5 text-xs font-semibold">
                  <Clock className="h-3 w-3" />{v.duration}
                </span>
                <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">{v.lang}</span>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{v.catLabel}</p>
                <h3 className="mt-1 font-bold text-foreground">{v.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{v.doctor}</p>
                <p className="mt-2 text-sm text-foreground/75">{v.desc}</p>
                <button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                  <Play className="h-3.5 w-3.5" /> {tt({ en: "Watch", hi: "देखें", mr: "पहा" })}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
