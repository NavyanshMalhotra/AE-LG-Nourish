import type { TT } from "./i18n";

export type Recipe = {
  name: string | TT;
  ingredients: string | TT;
  cost: string | TT;
  benefits: string | TT;
  time: string | TT;
  tag?: string | TT;
  category?: string | TT;
  steps: (string | TT)[];
};


export const ironEnergyRecipes: Recipe[] = [
  {
    name: { en: "Palak Chana Power Bowl", hi: "पालक चना पावर बाउल", mr: "पालक चना पॉवर बाऊल" },
    ingredients: { en: "Boiled chana, spinach, onion, tomato, garlic, jeera, haldi, chilli powder, garam masala, lemon, rice or roti.", hi: "उबले हुए चने, पालक, प्याज, टमाटर, लहसुन, जीरा, हल्दी, मिर्च पाउडर, गरम मसाला, नींबू, चावल या रोटी।", mr: "उकडलेले चणे, पालक, कांदा, टोमॅटो, लसूण, जिरे, हळद, तिखट, गरम मसाला, लिंबू, भात किंवा पोळी." },
    cost: { en: "₹45 to ₹70 per serving", hi: "₹45 से ₹70 प्रति सर्विंग", mr: "₹45 ते ₹70 प्रति सर्व्हिंग" },
    benefits: { en: "Plant-based iron, protein, fibre, and slow-release energy. Lemon helps improve iron absorption.", hi: "पौधे-आधारित आयरन, प्रोटीन, फाइबर और धीमी गति से जारी होने वाली ऊर्जा। नींबू आयरन के अवशोषण में मदद करता है।", mr: "वनस्पती-आधारित लोह, प्रथिने, फायबर आणि हळू सोडणारी ऊर्जा. लिंबू लोहाचे शोषण सुधारण्यास मदत करते." },
    time: { en: "20 to 25 min", hi: "20 से 25 मिनट", mr: "20 ते 25 मिनिटे" },
    category: { en: "Iron & Energy", hi: "आयरन और ऊर्जा", mr: "लोह आणि ऊर्जा" },
    steps: [
      { en: "Heat oil, splutter jeera, then add chopped garlic and onion. Sauté till golden.", hi: "तेल गरम करें, जीरा चटकाएं, फिर कटा हुआ लहसुन और प्याज डालें। सुनहरा होने तक भूनें।", mr: "तेल गरम करा, जिरे तडतडू द्या, नंतर चिरलेला लसूण आणि कांदा घाला. सोनेरी होईपर्यंत परता." },
      { en: "Add tomato, haldi, chilli powder and a pinch of salt. Cook till soft and oil separates.", hi: "टमाटर, हल्दी, मिर्च पाउडर और चुटकी भर नमक डालें। नरम होने और तेल अलग होने तक पकाएं।", mr: "टोमॅटो, हळद, तिखट आणि चिमूटभर मीठ घाला. मऊ होईपर्यंत आणि तेल वेगळे होईपर्यंत शिजवा." },
      { en: "Stir in chopped spinach and cook 2–3 min till it wilts.", hi: "कटा हुआ पालक डालें और 2-3 मिनट तक पकाएं जब तक कि यह मुरझा न जाए।", mr: "चिरलेला पालक घाला आणि तो शिजेपर्यंत 2-3 मिनिटे शिजवा." },
      { en: "Add boiled chana with a little water; simmer 5–7 min and sprinkle garam masala.", hi: "थोड़े से पानी के साथ उबला हुआ चना डालें; 5-7 मिनट तक उबालें और गरम मसाला छिड़कें।", mr: "थोड्या पाण्यासोबत उकडलेले चणे घाला; 5-7 मिनिटे उकळवा आणि गरम मसाला शिंपडा." },
      { en: "Finish with lemon juice and serve hot with rice or roti.", hi: "नींबू के रस के साथ समाप्त करें और चावल या रोटी के साथ गरमागरम परोसें।", mr: "लिंबाचा रस घाला आणि भात किंवा पोळीसोबत गरम सर्व्ह करा." }
    ]
  },
  {
    name: { en: "Ragi Dosa with Sambar", hi: "रागी डोसा सांबर के साथ", mr: "नाचणी डोसा सांबारसोबत" },
    ingredients: { en: "Ragi flour, rice flour or dosa batter, curd or water, salt, sambar with dal and vegetables, tomato chutney.", hi: "रागी का आटा, चावल का आटा या डोसा बैटर, दही या पानी, नमक, दाल और सब्जियों के साथ सांबर, टमाटर की चटनी।", mr: "नाचणीचे पीठ, तांदळाचे पीठ किंवा डोसा पीठ, दही किंवा पाणी, मीठ, डाळ आणि भाज्यांसोबत सांबार, टोमॅटोची चटणी." },
    cost: { en: "₹40 to ₹60 per serving", hi: "₹40 से ₹60 प्रति सर्विंग", mr: "₹40 ते ₹60 प्रति सर्व्हिंग" },
    benefits: { en: "Ragi gives iron and complex carbs. Sambar adds protein, fibre and minerals from dal and vegetables.", hi: "रागी आयरन और कॉम्प्लेक्स कार्ब्स देता है। सांबर दाल और सब्जियों से प्रोटीन, फाइबर और खनिज जोड़ता है।", mr: "नाचणी लोह आणि कॉम्प्लेक्स कर्बोदके देते. सांबार डाळ आणि भाज्यांमधून प्रथिने, फायबर आणि खनिजे जोडते." },
    time: { en: "20 min", hi: "20 मिनट", mr: "20 मिनिटे" },
    category: { en: "Iron & Energy", hi: "आयरन और ऊर्जा", mr: "लोह आणि ऊर्जा" },
    steps: [
      { en: "Mix ragi flour, rice flour, salt and enough water/curd to a thin pouring batter. Rest 10 min.", hi: "रागी का आटा, चावल का आटा, नमक और पर्याप्त पानी/दही मिलाकर एक पतला घोल बना लें। 10 मिनट आराम दें।", mr: "नाचणीचे पीठ, तांदळाचे पीठ, मीठ आणि पुरेसे पाणी/दही मिसळून पातळ पीठ बनवा. 10 मिनिटे विश्रांती द्या." },
      { en: "Heat a tawa, pour a ladle of batter and spread thin from the centre outwards.", hi: "एक तवा गरम करें, एक कलछी घोल डालें और बीच से बाहर की ओर पतला फैलाएं।", mr: "तवा गरम करा, पिठाचा पळीभर गोळा घाला आणि मध्यभागातून बाहेरच्या बाजूला पातळ पसरा." },
      { en: "Drizzle a little oil; cook till the edges lift and the base is crisp.", hi: "थोड़ा सा तेल छिड़कें; किनारों के उठने और आधार के कुरकुरा होने तक पकाएं।", mr: "थोडे तेल शिंपडा; कडा वर येईपर्यंत आणि बेस कुरकुरीत होईपर्यंत शिजवा." },
      { en: "Fold and serve hot with warm sambar and tomato chutney.", hi: "मोड़ें और गरम सांबर और टमाटर की चटनी के साथ गरमागरम परोसें।", mr: "दुमडून गरम सांबार आणि टोमॅटोच्या चटणीसोबत गरम सर्व्ह करा." }
    ]
  },
  {
    name: { en: "Black Chana Chaat", hi: "काला चना चाट", mr: "काळा चना चाट" },
    ingredients: { en: "Boiled black chana, onion, tomato, cucumber, coriander, green chilli, chaat masala, roasted jeera, lemon juice.", hi: "उबले हुए काले चने, प्याज, टमाटर, खीरा, धनिया, हरी मिर्च, चाट मसाला, भुना हुआ जीरा, नींबू का रस।", mr: "उकडलेले काळे चणे, कांदा, टोमॅटो, काकडी, कोथिंबीर, हिरवी मिरची, चाट मसाला, भाजलेले जिरे, लिंबाचा रस." },
    cost: { en: "₹35 to ₹50 per serving", hi: "₹35 से ₹50 प्रति सर्विंग", mr: "₹35 ते ₹50 प्रति सर्व्हिंग" },
    benefits: { en: "Rich in plant iron, protein and fibre. Steady energy. Lemon adds vitamin C for iron absorption.", hi: "पौधे के लोहे, प्रोटीन और फाइबर में भरपूर। स्थिर ऊर्जा। नींबू लोहे के अवशोषण के लिए विटामिन सी जोड़ता है।", mr: "वनस्पती लोह, प्रथिने आणि फायबरने समृद्ध. स्थिर ऊर्जा. लिंबू लोहाच्या शोषणासाठी व्हिटॅमिन सी जोडते." },
    time: { en: "10 min", hi: "10 मिनट", mr: "10 मिनिटे" },
    category: { en: "Iron & Energy", hi: "आयरन और ऊर्जा", mr: "लोह आणि ऊर्जा" },
    steps: [
      { en: "Drain warm boiled chana into a bowl.", hi: "एक कटोरे में गर्म उबले हुए चने डालें।", mr: "एका वाडग्यात गरम उकडलेले चणे गाळून घ्या." },
      { en: "Add finely chopped onion, tomato, cucumber, green chilli and coriander.", hi: "बारीक कटा हुआ प्याज, टमाटर, खीरा, हरी मिर्च और धनिया डालें।", mr: "बारीक चिरलेला कांदा, टोमॅटो, काकडी, हिरवी मिरची आणि कोथिंबीर घाला." },
      { en: "Sprinkle chaat masala, roasted jeera and salt to taste.", hi: "चाट मसाला, भुना हुआ जीरा और स्वादानुसार नमक छिड़कें।", mr: "चाट मसाला, भाजलेले जिरे आणि चवीनुसार मीठ शिंपडा." },
      { en: "Squeeze in fresh lemon, toss well and serve immediately.", hi: "ताजा नींबू निचोड़ें, अच्छी तरह मिलाएँ और तुरंत परोसें।", mr: "ताजे लिंबू पिळून घ्या, चांगले मिसळा आणि लगेच सर्व्ह करा." }
    ]
  },
  {
    name: { en: "Moringa Dal Rice Bowl", hi: "सहजन दाल राइस बाउल", mr: "शेवगा डाळ राईस बाऊल" },
    ingredients: { en: "Toor or moong dal, moringa leaves, garlic, jeera, hing, haldi, tomato, ghee, lemon, rice.", hi: "तूर या मूंग दाल, सहजन के पत्ते, लहसुन, जीरा, हींग, हल्दी, टमाटर, घी, नींबू, चावल।", mr: "तूर किंवा मूग डाळ, शेवग्याची पाने, लसूण, जिरे, हिंग, हळद, टोमॅटो, तूप, लिंबू, भात." },
    cost: { en: "₹45 to ₹65 per serving", hi: "₹45 से ₹65 प्रति सर्विंग", mr: "₹45 ते ₹65 प्रति सर्व्हिंग" },
    benefits: { en: "Moringa leaves add iron and micronutrients. Dal gives protein, rice adds energy. Lemon helps iron absorption.", hi: "सहजन के पत्ते आयरन और सूक्ष्म पोषक तत्व जोड़ते हैं। दाल प्रोटीन देती है, चावल ऊर्जा जोड़ता है। नींबू आयरन अवशोषण में मदद करता है।", mr: "शेवग्याची पाने लोह आणि सूक्ष्म पोषक घटक जोडतात. डाळ प्रथिने देते, भात ऊर्जा जोडतो. लिंबू लोह शोषण्यास मदत करते." },
    time: { en: "30 to 35 min", hi: "30 से 35 मिनट", mr: "30 ते 35 मिनिटे" },
    category: { en: "Iron & Energy", hi: "आयरन और ऊर्जा", mr: "लोह आणि ऊर्जा" },
    steps: [
      { en: "Pressure-cook dal with haldi and a little salt till soft.", hi: "हल्दी और थोड़े से नमक के साथ दाल को नरम होने तक प्रेशर-कुक करें।", mr: "हळद आणि थोडे मीठ घालून डाळ मऊ होईपर्यंत प्रेशर-कूक करा." },
      { en: "Heat ghee, splutter jeera, add hing, garlic and chopped tomato; cook till soft.", hi: "घी गरम करें, जीरा चटकाएं, हींग, लहसुन और कटा हुआ टमाटर डालें; नरम होने तक पकाएं।", mr: "तूप गरम करा, जिरे तडतडू द्या, हिंग, लसूण आणि चिरलेला टोमॅटो घाला; मऊ होईपर्यंत शिजवा." },
      { en: "Add moringa leaves; sauté 2 min, then pour in the cooked dal with water as needed.", hi: "सहजन के पत्ते डालें; 2 मिनट भूनें, फिर आवश्यकतानुसार पानी के साथ पकी हुई दाल डालें।", mr: "शेवग्याची पाने घाला; 2 मिनिटे परता, नंतर आवश्यकतेनुसार पाण्यासोबत शिजलेली डाळ घाला." },
      { en: "Simmer 5 min, finish with lemon and serve over hot rice.", hi: "5 मिनट तक उबालें, नींबू के साथ समाप्त करें और गरम चावल के ऊपर परोसें।", mr: "5 मिनिटे उकळवा, लिंबू घाला आणि गरम भातावर सर्व्ह करा." }
    ]
  },
  {
    name: { en: "Rajma Rice with Kachumber", hi: "राजमा चावल और कचुंबर", mr: "राजमा राईस आणि कचुंबर" },
    ingredients: { en: "Boiled rajma, onion, tomato, ginger-garlic, jeera, rajma masala, rice, cucumber, onion, tomato, lemon.", hi: "उबला हुआ राजमा, प्याज, टमाटर, अदरक-लहसुन, जीरा, राजमा मसाला, चावल, खीरा, प्याज, टमाटर, नींबू।", mr: "उकडलेले राजमा, कांदा, टोमॅटो, आले-लसूण, जिरे, राजमा मसाला, भात, काकडी, कांदा, टोमॅटो, लिंबू." },
    cost: { en: "₹50 to ₹75 per serving", hi: "₹50 से ₹75 प्रति सर्विंग", mr: "₹50 ते ₹75 प्रति सर्व्हिंग" },
    benefits: { en: "Rajma adds iron, protein and fibre. Rice gives energy. Lemon kachumber adds vitamin C for iron absorption.", hi: "राजमा आयरन, प्रोटीन और फाइबर जोड़ता है। चावल ऊर्जा देता है। नींबू कचुंबर आयरन अवशोषण के लिए विटामिन सी जोड़ता है।", mr: "राजमा लोह, प्रथिने आणि फायबर जोडतो. भात ऊर्जा देतो. लिंबू कचुंबर लोह शोषण्यासाठी व्हिटॅमिन सी जोडते." },
    time: { en: "25–30 min", hi: "25-30 मिनट", mr: "25-30 मिनिटे" },
    category: { en: "Iron & Energy", hi: "आयरन और ऊर्जा", mr: "लोह आणि ऊर्जा" },
    steps: [
      { en: "Heat oil, splutter jeera, sauté onion till golden, add ginger-garlic paste.", hi: "तेल गरम करें, जीरा चटकाएं, प्याज को सुनहरा होने तक भूनें, अदरक-लहसुन का पेस्ट डालें।", mr: "तेल गरम करा, जिरे तडतडू द्या, कांदा सोनेरी होईपर्यंत परता, आले-लसूण पेस्ट घाला." },
      { en: "Add tomato puree and rajma masala; cook till oil separates.", hi: "टमाटर की प्यूरी और राजमा मसाला डालें; तेल अलग होने तक पकाएं।", mr: "टोमॅटोची प्युरी आणि राजमा मसाला घाला; तेल वेगळे होईपर्यंत शिजवा." },
      { en: "Add boiled rajma with a cup of water; simmer 10 min till thick.", hi: "एक कप पानी के साथ उबला हुआ राजमा डालें; गाढ़ा होने तक 10 मिनट उबालें।", mr: "एका कप पाण्यासोबत उकडलेले राजमा घाला; घट्ट होईपर्यंत 10 मिनिटे उकळवा." },
      { en: "Mix cucumber, onion, tomato and lemon for kachumber and serve with hot rice.", hi: "कचुंबर के लिए खीरा, प्याज, टमाटर और नींबू मिलाएं और गरम चावल के साथ परोसें।", mr: "कचुंबरसाठी काकडी, कांदा, टोमॅटो आणि लिंबू मिसळा आणि गरम भातासोबत सर्व्ह करा." }
    ]
  },
  {
    name: { en: "Egg Bhurji Roti Plate", hi: "अंडा भुर्जी रोटी प्लेट", mr: "अंडा भुर्जी पोळी प्लेट" },
    ingredients: { en: "Eggs, onion, tomato, capsicum, green chilli, haldi, chilli powder, coriander, roti.", hi: "अंडे, प्याज, टमाटर, शिमला मिर्च, हरी मिर्च, हल्दी, मिर्च पाउडर, धनिया, रोटी।", mr: "अंडी, कांदा, टोमॅटो, शिमला मिरची, हिरवी मिरची, हळद, तिखट, कोथिंबीर, पोळी." },
    cost: { en: "₹45 to ₹70 per serving", hi: "₹45 से ₹70 प्रति सर्विंग", mr: "₹45 ते ₹70 प्रति सर्व्हिंग" },
    benefits: { en: "Eggs give protein and B vitamins for energy.", hi: "अंडे ऊर्जा के लिए प्रोटीन और बी विटामिन देते हैं।", mr: "अंडी ऊर्जेसाठी प्रथिने आणि बी जीवनसत्त्वे देतात." },
    time: { en: "15 to 20 min", hi: "15 से 20 मिनट", mr: "15 ते 20 मिनिटे" },
    category: { en: "Iron & Energy", hi: "आयरन और ऊर्जा", mr: "लोह आणि ऊर्जा" },
    steps: [
      { en: "Heat oil, sauté onion, green chilli and capsicum till soft.", hi: "तेल गरम करें, प्याज, हरी मिर्च और शिमला मिर्च को नरम होने तक भूनें।", mr: "तेल गरम करा, कांदा, हिरवी मिरची आणि शिमला मिरची मऊ होईपर्यंत परता." },
      { en: "Add tomato, haldi, chilli powder and salt; cook till mushy.", hi: "टमाटर, हल्दी, मिर्च पाउडर और नमक डालें; गूदेदार होने तक पकाएं।", mr: "टोमॅटो, हळद, तिखट आणि मीठ घाला; मऊ होईपर्यंत शिजवा." },
      { en: "Pour in beaten eggs and scramble on low heat till just set.", hi: "फेंटे हुए अंडे डालें और धीमी आंच पर जमने तक भूनें।", mr: "फेटलेली अंडी घाला आणि मंद आचेवर घट्ट होईपर्यंत परता." },
      { en: "Garnish with coriander and serve with warm roti.", hi: "धनिया से सजाएं और गरम रोटी के साथ परोसें।", mr: "कोथिंबीरने सजवा आणि गरम पोळीसोबत सर्व्ह करा." }
    ]
  }
];

export const menstrualRecipes: Recipe[] = [
  {
    name: { en: "Palak Moong Dal Khichdi", hi: "पालक मूंग दाल खिचड़ी", mr: "पालक मूग डाळ खिचडी" },
    ingredients: { en: "Moong dal, rice, spinach, ghee, jeera, hing, haldi, ginger, garlic, salt, lemon.", hi: "मूंग दाल, चावल, पालक, घी, जीरा, हींग, हल्दी, अदरक, लहसुन, नमक, नींबू।", mr: "मूग डाळ, भात, पालक, तूप, जिरे, हिंग, हळद, आले, लसूण, मीठ, लिंबू." },
    cost: { en: "₹40 to ₹60 per serving", hi: "₹40 से ₹60 प्रति सर्विंग", mr: "₹40 ते ₹60 प्रति सर्व्हिंग" },
    benefits: { en: "Gentle on digestion for low-energy days. Moong adds protein, spinach gives iron and folate.", hi: "कम ऊर्जा वाले दिनों के लिए पाचन पर कोमल। मूंग प्रोटीन जोड़ता है, पालक आयरन और फोलेट देता है।", mr: "कमी ऊर्जेच्या दिवसांसाठी पचनावर सौम्य. मूग प्रथिने जोडतो, पालक लोह आणि फोलेट देतो." },
    time: { en: "25 to 30 min", hi: "25 से 30 मिनट", mr: "25 ते 30 मिनिटे" },
    category: { en: "Menstrual Health", hi: "मासिक धर्म स्वास्थ्य", mr: "मासिक पाळीचे आरोग्य" },
    steps: [
      { en: "Wash rice and moong dal together; soak 10 min.", hi: "चावल और मूंग दाल को एक साथ धो लें; 10 मिनट के लिए भिगो दें।", mr: "तांदूळ आणि मूग डाळ एकत्र धुवा; 10 मिनिटे भिजत ठेवा." },
      { en: "Heat ghee, splutter jeera, add hing, ginger-garlic and chopped spinach; sauté 2 min.", hi: "घी गरम करें, जीरा चटकाएं, हींग, अदरक-लहसुन और कटा हुआ पालक डालें; 2 मिनट भूनें।", mr: "तूप गरम करा, जिरे तडतडू द्या, हिंग, आले-लसूण आणि चिरलेला पालक घाला; 2 मिनिटे परता." },
      { en: "Add rice-dal, haldi, salt and 3 cups water; pressure-cook for 3 whistles.", hi: "चावल-दाल, हल्दी, नमक और 3 कप पानी डालें; 3 सीटी आने तक प्रेशर-कुक करें।", mr: "भात-डाळ, हळद, मीठ आणि 3 कप पाणी घाला; 3 शिट्ट्या होईपर्यंत प्रेशर-कूक करा." },
      { en: "Finish with a squeeze of lemon and a spoon of ghee on top.", hi: "एक निचोड़ नींबू और ऊपर से एक चम्मच घी के साथ समाप्त करें।", mr: "लिंबाचा रस पिळून आणि वरून एक चमचा तूप घालून पूर्ण करा." }
    ]
  },
  {
    name: { en: "Ragi Banana Porridge", hi: "रागी केला दलिया", mr: "नाचणी केळीची पेज" },
    ingredients: { en: "Ragi flour, milk or water, banana, jaggery, cardamom, chopped almonds.", hi: "रागी का आटा, दूध या पानी, केला, गुड़, इलायची, कटे हुए बादाम।", mr: "नाचणीचे पीठ, दूध किंवा पाणी, केळी, गूळ, वेलची, चिरलेले बदाम." },
    cost: { en: "₹35 to ₹55 per serving", hi: "₹35 से ₹55 प्रति सर्विंग", mr: "₹35 ते ₹55 प्रति सर्व्हिंग" },
    benefits: { en: "Iron and slow carbs from ragi, quick energy and potassium from banana.", hi: "रागी से आयरन और धीमी कार्ब्स, केले से तुरंत ऊर्जा और पोटैशियम।", mr: "नाचणीमधून लोह आणि हळू कर्बोदके, केळीमधून जलद ऊर्जा आणि पोटॅशियम." },
    time: { en: "10 to 15 min", hi: "10 से 15 मिनट", mr: "10 ते 15 मिनिटे" },
    category: { en: "Menstrual Health", hi: "मासिक धर्म स्वास्थ्य", mr: "मासिक पाळीचे आरोग्य" },
    steps: [
      { en: "Whisk ragi flour with a little cold water to a smooth paste (no lumps).", hi: "रागी के आटे को थोड़े ठंडे पानी के साथ फेंट कर चिकना पेस्ट (कोई गांठ नहीं) बना लें।", mr: "नाचणीचे पीठ थोड्या थंड पाण्यासोबत फेटून गुळगुळीत पेस्ट (गुठळ्या नाहीत) बनवा." },
      { en: "Boil milk or water with cardamom; pour the ragi paste in slowly, stirring constantly.", hi: "इलायची के साथ दूध या पानी उबालें; लगातार हिलाते हुए धीरे-धीरे रागी का पेस्ट डालें।", mr: "वेलचीसोबत दूध किंवा पाणी उकळा; सतत ढवळत हळू हळू नाचणीची पेस्ट घाला." },
      { en: "Cook 5–7 min on low till glossy and thick.", hi: "चमकदार और गाढ़ा होने तक धीमी आंच पर 5-7 मिनट पकाएं।", mr: "गुळगुळीत आणि घट्ट होईपर्यंत मंद आचेवर 5-7 मिनिटे शिजवा." },
      { en: "Add jaggery to taste, top with sliced banana and chopped nuts.", hi: "स्वादानुसार गुड़ डालें, ऊपर से कटे हुए केले और कटे हुए मेवे डालें।", mr: "चवीनुसार गूळ घाला, वरून कापलेली केळी आणि चिरलेले सुके मेवे घाला." }
    ]
  },
  {
    name: { en: "Sesame Jaggery Ladoo", hi: "तिल गुड़ के लड्डू", mr: "तीळ गुळाचे लाडू" },
    ingredients: { en: "White or black sesame seeds, jaggery, ghee, cardamom.", hi: "सफेद या काले तिल, गुड़, घी, इलायची।", mr: "पांढरे किंवा काळे तीळ, गूळ, तूप, वेलची." },
    cost: { en: "₹8 to ₹15 per ladoo", hi: "₹8 से ₹15 प्रति लड्डू", mr: "₹8 ते ₹15 प्रति लाडू" },
    benefits: { en: "Sesame gives iron, calcium and magnesium. Jaggery gives quick energy.", hi: "तिल आयरन, कैल्शियम और मैग्नीशियम देता है। गुड़ जल्दी ऊर्जा देता है।", mr: "तीळ लोह, कॅल्शियम आणि मॅग्नेशियम देते. गूळ जलद ऊर्जा देतो." },
    time: { en: "20 min", hi: "20 मिनट", mr: "20 मिनिटे" },
    category: { en: "Menstrual Health", hi: "मासिक धर्म स्वास्थ्य", mr: "मासिक पाळीचे आरोग्य" },
    steps: [
      { en: "Dry-roast sesame seeds on low till they pop and turn fragrant; cool slightly.", hi: "तिल को धीमी आंच पर तब तक भूनें जब तक कि वे फूटने न लगें और सुगंधित न हो जाएं; थोड़ा ठंडा करें।", mr: "तीळ मंद आचेवर तडतडेपर्यंत आणि सुवासिक होईपर्यंत कोरडे भाजा; थोडे थंड करा." },
      { en: "Melt jaggery with a spoon of ghee on low till syrupy.", hi: "एक चम्मच घी के साथ गुड़ को धीमी आंच पर चाशनी बनने तक पिघलाएं।", mr: "एका चमचा तुपासोबत गूळ मंद आचेवर साखरेच्या पाकासारखा होईपर्यंत वितळवा." },
      { en: "Mix in the sesame and cardamom; stir off the heat.", hi: "तिल और इलायची मिलाएं; आँच से उतार कर हिलाएं।", mr: "तीळ आणि वेलची मिसळा; आचेवरून उतरवून ढवळा." },
      { en: "While warm, grease palms and roll into small ladoos.", hi: "गर्म रहते हुए, हथेलियों को चिकना करें और छोटे लड्डू का आकार दें।", mr: "गरम असताना, तळहातांना तेल लावा आणि लहान लाडू वळा." }
    ]
  }
];

export const tiffinRecipes: Recipe[] = [
  {
    name: { en: "Paneer Bhurji Roll", hi: "पनीर भुर्जी रोल", mr: "पनीर भुर्जी रोल" },
    ingredients: { en: "Roti, paneer, onion, tomato, capsicum, haldi, chilli powder, salt.", hi: "रोटी, पनीर, प्याज, टमाटर, शिमला मिर्च, हल्दी, मिर्च पाउडर, नमक।", mr: "पोळी, पनीर, कांदा, टोमॅटो, शिमला मिरची, हळद, तिखट, मीठ." },
    cost: { en: "₹40 to ₹60 per serving", hi: "₹40 से ₹60 प्रति सर्विंग", mr: "₹40 ते ₹60 प्रति सर्व्हिंग" },
    benefits: { en: "Filling, easy to eat, doesn't get messy if rolled tightly.", hi: "भरपूर, खाने में आसान, यदि कसकर लपेटा जाए तो गन्दा नहीं होता।", mr: "पोटभरीचे, खाण्यास सोपे, घट्ट गुंडाळल्यास खराब होत नाही." },
    time: { en: "10 to 15 min", hi: "10 से 15 मिनट", mr: "10 ते 15 मिनिटे" },
    category: { en: "School Tiffins", hi: "स्कूल टिफिन", mr: "शाळेचा डबा" },
    steps: [
      { en: "Sauté onion and capsicum till soft, add tomato and dry spices.", hi: "प्याज और शिमला मिर्च को नरम होने तक भूनें, टमाटर और सूखे मसाले डालें।", mr: "कांदा आणि शिमला मिरची मऊ होईपर्यंत परता, टोमॅटो आणि सुके मसाले घाला." },
      { en: "Crumble paneer in and toss till just heated through.", hi: "पनीर को क्रम्बल करें और केवल गर्म होने तक मिलाएँ।", mr: "पनीर कुस्करून घाला आणि फक्त गरम होईपर्यंत मिसळा." },
      { en: "Spread the bhurji on a warm roti and roll tightly.", hi: "भुर्जी को गरम रोटी पर फैलाएं और कसकर लपेटें।", mr: "भुर्जी एका गरम पोळीवर पसरा आणि घट्ट गुंडाळा." }
    ]
  },
  {
    name: { en: "Moong Dal Chilla", hi: "मूंग दाल चीला", mr: "मूग डाळ धिरडे" },
    ingredients: { en: "Soaked moong dal, ginger, green chilli, jeera, salt.", hi: "भीगी हुई मूंग दाल, अदरक, हरी मिर्च, जीरा, नमक।", mr: "भिजवलेली मूग डाळ, आले, हिरवी मिरची, जिरे, मीठ." },
    cost: { en: "₹20 to ₹30 per serving", hi: "₹20 से ₹30 प्रति सर्विंग", mr: "₹20 ते ₹30 प्रति सर्व्हिंग" },
    benefits: { en: "Light but filling. Batter can be made the night before.", hi: "हल्का लेकिन भरपूर। घोल पिछली रात बनाया जा सकता है।", mr: "हलके पण पोटभरीचे. पीठ आदल्या रात्री बनवता येते." },
    time: { en: "15 min", hi: "15 मिनट", mr: "15 मिनिटे" },
    category: { en: "School Tiffins", hi: "स्कूल टिफिन", mr: "शाळेचा डबा" },
    steps: [
      { en: "Blend soaked moong dal with ginger, chilli, jeera and salt to a smooth batter.", hi: "भीगी हुई मूंग दाल को अदरक, मिर्च, जीरा और नमक के साथ मिलाकर एक चिकना घोल बना लें।", mr: "भिजवलेली मूग डाळ आले, मिरची, जिरे आणि मीठ घालून गुळगुळीत पीठ बनवा." },
      { en: "Spread thin on a hot tawa, drizzle oil and cook till crisp.", hi: "गरम तवे पर पतला फैलाएं, तेल छिड़कें और कुरकुरा होने तक पकाएं।", mr: "गरम तव्यावर पातळ पसरा, तेल शिंपडा आणि कुरकुरीत होईपर्यंत शिजवा." },
      { en: "Flip once, fold and pack with a small box of chutney.", hi: "एक बार पलटें, मोड़ें और चटनी के छोटे डिब्बे के साथ पैक करें।", mr: "एकदा पलटवा, दुमडून घ्या आणि चटणीच्या छोट्या डब्यासोबत पॅक करा." }
    ]
  },
  {
    name: { en: "Egg Fried Rice", hi: "एग फ्राइड राइस", mr: "एग फ्राईड राईस" },
    ingredients: { en: "Leftover rice, egg, carrot, beans, capsicum, spring onion, soy sauce or basic spices.", hi: "बचे हुए चावल, अंडा, गाजर, बीन्स, शिमला मिर्च, हरा प्याज, सोया सॉस या बुनियादी मसाले।", mr: "उरलेला भात, अंडे, गाजर, बीन्स, शिमला मिरची, कांद्याची पात, सोया सॉस किंवा साधे मसाले." },
    cost: { en: "₹35 to ₹50 per serving", hi: "₹35 से ₹50 प्रति सर्विंग", mr: "₹35 ते ₹50 प्रति सर्व्हिंग" },
    benefits: { en: "Uses leftovers well and feels more exciting than plain rice.", hi: "बचे हुए का अच्छी तरह से उपयोग करता है और सादे चावल से अधिक रोमांचक लगता है।", mr: "उरलेल्या अन्नाचा चांगला वापर करते आणि साध्या भातापेक्षा अधिक रोमांचक वाटते." },
    time: { en: "12 to 15 min", hi: "12 से 15 मिनट", mr: "12 ते 15 मिनिटे" },
    category: { en: "School Tiffins", hi: "स्कूल टिफिन", mr: "शाळेचा डबा" },
    steps: [
      { en: "Scramble egg in hot oil and set aside.", hi: "गर्म तेल में अंडा फेंटें और एक तरफ रख दें।", mr: "गरम तेलात अंडे फेटा आणि बाजूला ठेवा." },
      { en: "Sauté chopped vegetables on high till just tender.", hi: "कटी हुई सब्जियों को तेज आंच पर थोड़ा नरम होने तक भूनें।", mr: "चिरलेल्या भाज्या मोठ्या आचेवर थोड्या मऊ होईपर्यंत परता." },
      { en: "Toss in cold rice, scrambled egg, salt, pepper.", hi: "ठंडे चावल, फेंटा हुआ अंडा, नमक, काली मिर्च डालें।", mr: "थंड भात, फेटलेले अंडे, मीठ, काळी मिरी घाला." },
      { en: "Finish with spring onion and pack.", hi: "हरे प्याज के साथ समाप्त करें और पैक करें।", mr: "कांद्याच्या पातीसोबत पूर्ण करा आणि पॅक करा." }
    ]
  }
];

export const growthRecipes: Recipe[] = [
  {
    name: { en: "Paneer Paratha + Curd", hi: "पनीर पराठा + दही", mr: "पनीर पराठा + दही" },
    ingredients: { en: "Whole wheat atta, paneer, curd, ajwain, jeera powder, salt, ghee.", hi: "गेहूं का आटा, पनीर, दही, अजवायन, जीरा पाउडर, नमक, घी।", mr: "गव्हाचे पीठ, पनीर, दही, ओवा, जिरे पावडर, मीठ, तूप." },
    cost: { en: "₹40 to ₹60 per serving", hi: "₹40 से ₹60 प्रति सर्विंग", mr: "₹40 ते ₹60 प्रति सर्व्हिंग" },
    benefits: { en: "Paneer and curd support protein and calcium. Ghee adds calories for healthy weight gain.", hi: "पनीर और दही प्रोटीन और कैल्शियम का समर्थन करते हैं। घी स्वस्थ वजन बढ़ाने के लिए कैलोरी जोड़ता है।", mr: "पनीर आणि दही प्रथिने आणि कॅल्शियमला आधार देतात. तूप निरोगी वजन वाढवण्यासाठी कॅलरीज जोडते." },
    time: { en: "20 min", hi: "20 मिनट", mr: "20 मिनिटे" },
    category: { en: "Growth Nutrition", hi: "विकास पोषण", mr: "वाढीचे पोषण" },
    steps: [
      { en: "Knead atta with water and a pinch of salt to a soft dough.", hi: "आटे को पानी और चुटकी भर नमक के साथ नरम आटा गूंथ लें।", mr: "पीठ पाणी आणि चिमूटभर मीठ घालून मऊ कणीक मळून घ्या." },
      { en: "Mash paneer with ajwain, jeera powder, salt and chopped coriander.", hi: "पनीर को अजवायन, जीरा पाउडर, नमक और कटे हुए धनिये के साथ मैश कर लें।", mr: "पनीर ओवा, जिरे पावडर, मीठ आणि चिरलेल्या कोथिंबिरीसोबत कुस्करून घ्या." },
      { en: "Stuff the filling into a small ball of dough and roll out gently.", hi: "भरने को आटे की एक छोटी लोई में भरें और धीरे से बेल लें।", mr: "पिठाच्या छोट्या गोळ्यात सारण भरा आणि हलक्या हाताने लाटून घ्या." },
      { en: "Cook on a tawa with ghee both sides till golden; serve with curd.", hi: "तवे पर दोनों तरफ घी लगाकर सुनहरा होने तक पकाएं; दही के साथ परोसें।", mr: "तव्यावर दोन्ही बाजूंनी तूप लावून सोनेरी होईपर्यंत शिजवा; दह्यासोबत सर्व्ह करा." }
    ]
  }
];

export const budgetSnacks: Recipe[] = [
  {
    name: { en: "Roasted Chana", hi: "भुना हुआ चना", mr: "भाजलेले चणे" },
    ingredients: { en: "Roasted chana, black salt, chilli powder, lemon if available.", hi: "भुना हुआ चना, काला नमक, मिर्च पाउडर, नींबू यदि उपलब्ध हो।", mr: "भाजलेले चणे, काळे मीठ, तिखट, लिंबू उपलब्ध असल्यास." },
    cost: { en: "₹10 to ₹20", hi: "₹10 से ₹20", mr: "₹10 ते ₹20" },
    benefits: { en: "Protein, fibre and iron. Keeps you full longer.", hi: "प्रोटीन, फाइबर और आयरन। आपको लंबे समय तक भरा हुआ रखता है।", mr: "प्रथिने, फायबर आणि लोह. तुम्हाला जास्त काळ भरलेले ठेवते." },
    time: { en: "2 min", hi: "2 मिनट", mr: "2 मिनिटे" },
    category: { en: "Budget Snacks", hi: "बजट स्नैक्स", mr: "बजेट स्नॅक्स" },
    steps: [
      { en: "Take a handful of roasted chana in a bowl.", hi: "एक कटोरी में मुट्ठी भर भुने हुए चने लें।", mr: "एका वाडग्यात मूठभर भाजलेले चणे घ्या." },
      { en: "Sprinkle black salt and a little chilli powder.", hi: "काला नमक और थोड़ी सी मिर्च पाउडर छिड़कें।", mr: "काळे मीठ आणि थोडे तिखट शिंपडा." },
      { en: "Squeeze lemon if available and toss.", hi: "यदि उपलब्ध हो तो नींबू निचोड़ें और उछालें।", mr: "लिंबू उपलब्ध असल्यास पिळून घ्या आणि मिसळा." }
    ]
  },
  {
    name: { en: "Peanut Chaat", hi: "मूंगफली चाट", mr: "शेंगदाणा चाट" },
    ingredients: { en: "Roasted peanuts, onion, tomato, coriander, lemon, chaat masala.", hi: "भुनी हुई मूंगफली, प्याज, टमाटर, धनिया, नींबू, चाट मसाला।", mr: "भाजलेले शेंगदाणे, कांदा, टोमॅटो, कोथिंबीर, लिंबू, चाट मसाला." },
    cost: { en: "₹15 to ₹25", hi: "₹15 से ₹25", mr: "₹15 ते ₹25" },
    benefits: { en: "Protein, healthy fats, energy. Great for healthy weight gain.", hi: "प्रोटीन, स्वस्थ वसा, ऊर्जा। स्वस्थ वजन बढ़ाने के लिए बढ़िया।", mr: "प्रथिने, निरोगी चरबी, ऊर्जा. निरोगी वजन वाढवण्यासाठी उत्तम." },
    time: { en: "5 to 7 min", hi: "5 से 7 मिनट", mr: "5 ते 7 मिनिटे" },
    category: { en: "Budget Snacks", hi: "बजट स्नैक्स", mr: "बजेट स्नॅक्स" },
    steps: [
      { en: "Combine roasted peanuts with finely chopped onion, tomato and coriander.", hi: "भुनी हुई मूंगफली को बारीक कटे प्याज, टमाटर और धनिये के साथ मिला लें।", mr: "भाजलेले शेंगदाणे बारीक चिरलेला कांदा, टोमॅटो आणि कोथिंबिरीसोबत मिसळा." },
      { en: "Add chaat masala and salt.", hi: "चाट मसाला और नमक डालें।", mr: "चाट मसाला आणि मीठ घाला." },
      { en: "Squeeze lemon and toss before serving.", hi: "परोसने से पहले नींबू निचोड़ें और मिलाएँ।", mr: "सर्व्ह करण्यापूर्वी लिंबू पिळा आणि मिसळा." }
    ]
  }
];

export const allRecipes = [
  ...ironEnergyRecipes,
  ...menstrualRecipes,
  ...tiffinRecipes,
  ...growthRecipes,
  ...budgetSnacks
];

export const recipeCategories = [
  { en: "Iron & Energy", hi: "आयरन और ऊर्जा", mr: "लोह और ऊर्जा" },
  { en: "Menstrual Health", hi: "मासिक धर्म स्वास्थ्य", mr: "मासिक पाळीचे आरोग्य" },
  { en: "School Tiffins", hi: "स्कूल टिफिन", mr: "शाळेचा डबा" },
  { en: "Growth Nutrition", hi: "विकास पोषण", mr: "वाढीचे पोषण" },
  { en: "Budget Snacks", hi: "बजट स्नैक्स", mr: "बजेट स्नॅक्स" }
];
