export type Recipe = {
  name: string;
  ingredients: string;
  cost: string;
  benefits: string;
  time: string;
  tag?: string;
  category?: string;
  steps: string[];
  image: string; // unsplash search keywords
};

const img = (q: string) =>
  `https://loremflickr.com/600/400/${encodeURIComponent(q.split(" ").join(","))},indian,food`;

export const ironEnergyRecipes: Recipe[] = [
  {
    name: "Palak Chana Power Bowl",
    ingredients:
      "Boiled chana, spinach, onion, tomato, garlic, jeera, haldi, chilli powder, garam masala, lemon, rice or roti.",
    cost: "₹45 to ₹70 per serving",
    benefits:
      "Plant-based iron, protein, fibre, and slow-release energy. Lemon helps improve iron absorption.",
    time: "20 to 25 min (if chana is boiled)",
    category: "Iron & Energy",
    image: img("chana masala spinach"),
    steps: [
      "Heat oil, splutter jeera, then add chopped garlic and onion. Sauté till golden.",
      "Add tomato, haldi, chilli powder and a pinch of salt. Cook till soft and oil separates.",
      "Stir in chopped spinach and cook 2–3 min till it wilts.",
      "Add boiled chana with a little water; simmer 5–7 min and sprinkle garam masala.",
      "Finish with lemon juice and serve hot with rice or roti.",
    ],
  },
  {
    name: "Ragi Dosa with Sambar",
    ingredients:
      "Ragi flour, rice flour or dosa batter, curd or water, salt, sambar with dal and vegetables, tomato chutney.",
    cost: "₹40 to ₹60 per serving",
    benefits:
      "Ragi gives iron and complex carbs. Sambar adds protein, fibre and minerals from dal and vegetables.",
    time: "20 min (with batter & sambar ready); 45–60 min from scratch",
    category: "Iron & Energy",
    image: img("ragi dosa sambar"),
    steps: [
      "Mix ragi flour, rice flour, salt and enough water/curd to a thin pouring batter. Rest 10 min.",
      "Heat a tawa, pour a ladle of batter and spread thin from the centre outwards.",
      "Drizzle a little oil; cook till the edges lift and the base is crisp.",
      "Fold and serve hot with warm sambar and tomato chutney.",
    ],
  },
  {
    name: "Black Chana Chaat",
    ingredients:
      "Boiled black chana, onion, tomato, cucumber, coriander, green chilli, chaat masala, roasted jeera, lemon juice.",
    cost: "₹35 to ₹50 per serving",
    benefits:
      "Rich in plant iron, protein and fibre. Steady energy. Lemon adds vitamin C for iron absorption.",
    time: "10 min (if chana is boiled); overnight soak + 30–40 min if dry",
    category: "Iron & Energy",
    image: img("black chana chaat"),
    steps: [
      "Drain warm boiled chana into a bowl.",
      "Add finely chopped onion, tomato, cucumber, green chilli and coriander.",
      "Sprinkle chaat masala, roasted jeera and salt to taste.",
      "Squeeze in fresh lemon, toss well and serve immediately.",
    ],
  },
  {
    name: "Moringa Dal Rice Bowl",
    ingredients:
      "Toor or moong dal, moringa leaves, garlic, jeera, hing, haldi, tomato, ghee, lemon, rice.",
    cost: "₹45 to ₹65 per serving",
    benefits:
      "Moringa leaves add iron and micronutrients. Dal gives protein, rice adds energy. Lemon helps iron absorption.",
    time: "30 to 35 min",
    category: "Iron & Energy",
    image: img("moringa dal rice"),
    steps: [
      "Pressure-cook dal with haldi and a little salt till soft.",
      "Heat ghee, splutter jeera, add hing, garlic and chopped tomato; cook till soft.",
      "Add moringa leaves; sauté 2 min, then pour in the cooked dal with water as needed.",
      "Simmer 5 min, finish with lemon and serve over hot rice.",
    ],
  },
  {
    name: "Rajma Rice with Kachumber",
    ingredients:
      "Boiled rajma, onion, tomato, ginger-garlic, jeera, rajma masala, rice, cucumber, onion, tomato, lemon.",
    cost: "₹50 to ₹75 per serving",
    benefits:
      "Rajma adds iron, protein and fibre. Rice gives energy. Lemon kachumber adds vitamin C for iron absorption.",
    time: "25–30 min if rajma boiled; overnight soak + 40–50 min if dry",
    category: "Iron & Energy",
    image: img("rajma rice"),
    steps: [
      "Heat oil, splutter jeera, sauté onion till golden, add ginger-garlic paste.",
      "Add tomato puree and rajma masala; cook till oil separates.",
      "Add boiled rajma with a cup of water; simmer 10 min till thick.",
      "Mix cucumber, onion, tomato and lemon for kachumber and serve with hot rice.",
    ],
  },
  {
    name: "Egg Bhurji Roti Plate",
    ingredients:
      "Eggs, onion, tomato, capsicum, green chilli, haldi, chilli powder, coriander, roti.",
    cost: "₹45 to ₹70 per serving",
    benefits:
      "Eggs give protein and B vitamins for energy. Two eggs give about 12–14g protein — a budget-friendly protein option.",
    time: "15 to 20 min",
    category: "Iron & Energy",
    image: img("egg bhurji roti"),
    steps: [
      "Heat oil, sauté onion, green chilli and capsicum till soft.",
      "Add tomato, haldi, chilli powder and salt; cook till mushy.",
      "Pour in beaten eggs and scramble on low heat till just set.",
      "Garnish with coriander and serve with warm roti.",
    ],
  },
  {
    name: "Poha with Peanuts and Lemon",
    ingredients:
      "Poha, peanuts, onion, green chilli, curry leaves, mustard seeds, haldi, peas, coriander, lemon.",
    cost: "₹30 to ₹45 per serving",
    benefits:
      "Quick energy from poha, healthy fats and protein from peanuts. Lemon supports iron absorption.",
    time: "15 min",
    category: "Iron & Energy",
    image: img("poha peanuts"),
    steps: [
      "Rinse poha briefly in a sieve till just soft; drain.",
      "Heat oil, splutter mustard seeds, add curry leaves, peanuts and green chilli.",
      "Add onion and peas; sauté till onion turns soft and pink.",
      "Stir in haldi, salt and poha; toss gently 2–3 min, finish with lemon and coriander.",
    ],
  },
  {
    name: "Bajra Roti with Sesame Chutney & Sabzi",
    ingredients:
      "Bajra flour, warm water, salt, sesame seeds, garlic, red chilli, lemon, vegetable sabzi (bhindi/baingan/palak/mixed).",
    cost: "₹45 to ₹70 per serving",
    benefits:
      "Bajra and sesame add iron and minerals. Sabzi adds fibre and micronutrients. A filling slow-energy meal.",
    time: "30 to 35 min",
    category: "Iron & Energy",
    image: img("bajra roti sabzi"),
    steps: [
      "Knead bajra flour with warm water and salt into a soft dough; rest 5 min.",
      "Pat small portions into rotis using palms and roast on a hot tawa both sides.",
      "Dry-roast sesame, garlic and red chilli; grind with salt and lemon for chutney.",
      "Serve hot bajra roti with the chutney and a simple vegetable sabzi.",
    ],
  },
  {
    name: "Chicken or Fish Curry Rice Plate",
    ingredients:
      "Chicken or fish, onion, tomato, ginger-garlic, haldi, chilli powder, coriander powder, coconut milk or curd, rice, lemon salad.",
    cost: "Chicken ₹90–₹130 • Fish ₹100–₹160",
    benefits:
      "Animal-based iron is easier to absorb. Chicken/fish add high-quality protein for stamina and muscle repair.",
    time: "30 to 40 min",
    category: "Iron & Energy",
    image: img("chicken curry rice"),
    steps: [
      "Marinate chicken or fish with haldi, chilli powder, salt and a little lemon for 10 min.",
      "Sauté onion till golden, add ginger-garlic, then tomato and dry spices; cook till oil separates.",
      "Add the marinated chicken/fish and a splash of water (or coconut milk/curd) and simmer till cooked.",
      "Serve hot with steamed rice and a lemon salad on the side.",
    ],
  },
  {
    name: "Sprouted Moong Chilla",
    ingredients:
      "Sprouted moong, ginger, green chilli, jeera, coriander, salt, besan (if needed), tomato or mint-coriander chutney with lemon.",
    cost: "₹35 to ₹55 per serving",
    benefits:
      "Plant protein, iron, fibre and steady energy. Sprouting eases digestion; lemon helps iron absorption.",
    time: "20 min (if sprouts ready); 24–36 hrs to sprout from scratch",
    category: "Iron & Energy",
    image: img("moong chilla pancake"),
    steps: [
      "Blend sprouted moong with ginger, green chilli, jeera and salt to a thick batter (add besan if loose).",
      "Heat a tawa, pour a ladle and spread into a thick pancake.",
      "Drizzle a little oil and cook on both sides till golden and crisp.",
      "Serve hot with tomato or mint-coriander chutney and lemon.",
    ],
  },
];

export const menstrualRecipes: Recipe[] = [
  {
    name: "Palak Moong Dal Khichdi",
    ingredients: "Moong dal, rice, spinach, ghee, jeera, hing, haldi, ginger, garlic, salt, lemon.",
    cost: "₹40 to ₹60 per serving",
    benefits:
      "Gentle on digestion for low-energy days. Moong adds protein, spinach gives iron and folate, lemon supports absorption.",
    time: "25 to 30 min",
    category: "Menstrual Health",
    image: img("palak khichdi"),
    steps: [
      "Wash rice and moong dal together; soak 10 min.",
      "Heat ghee, splutter jeera, add hing, ginger-garlic and chopped spinach; sauté 2 min.",
      "Add rice-dal, haldi, salt and 3 cups water; pressure-cook for 3 whistles.",
      "Finish with a squeeze of lemon and a spoon of ghee on top.",
    ],
  },
  {
    name: "Ragi Banana Porridge",
    ingredients: "Ragi flour, milk or water, banana, jaggery, cardamom, chopped almonds or sesame seeds.",
    cost: "₹35 to ₹55 per serving",
    benefits:
      "Iron and slow carbs from ragi, quick energy and potassium from banana, magnesium and healthy fats from nuts/sesame.",
    time: "10 to 15 min",
    category: "Menstrual Health",
    image: img("ragi porridge banana"),
    steps: [
      "Whisk ragi flour with a little cold water to a smooth paste (no lumps).",
      "Boil milk or water with cardamom; pour the ragi paste in slowly, stirring constantly.",
      "Cook 5–7 min on low till glossy and thick.",
      "Add jaggery to taste, top with sliced banana and chopped nuts/sesame.",
    ],
  },
  {
    name: "Black Chana Sundal",
    ingredients: "Boiled black chana, coconut, mustard seeds, curry leaves, green chilli, hing, lemon, coriander.",
    cost: "₹35 to ₹50 per serving",
    benefits:
      "Plant iron, protein and fibre for fullness and steady energy. Lemon improves iron absorption.",
    time: "10–15 min if chana boiled; overnight soak + 30–40 min if dry",
    category: "Menstrual Health",
    image: img("chana sundal coconut"),
    steps: [
      "Heat oil, splutter mustard seeds, add hing, curry leaves and green chilli.",
      "Add boiled chana with salt; toss for 2–3 min.",
      "Sprinkle grated coconut and mix through.",
      "Finish with lemon juice and fresh coriander.",
    ],
  },
  {
    name: "Sesame Jaggery Ladoo",
    ingredients: "White or black sesame seeds, jaggery, ghee, cardamom, crushed peanuts or almonds.",
    cost: "₹8 to ₹15 per ladoo",
    benefits:
      "Sesame gives iron, calcium and magnesium. Jaggery gives quick energy for period cravings — keep portions small.",
    time: "20 min",
    category: "Menstrual Health",
    image: img("til ladoo sesame jaggery"),
    steps: [
      "Dry-roast sesame seeds on low till they pop and turn fragrant; cool slightly.",
      "Melt jaggery with a spoon of ghee on low till syrupy (no need to test for a thread).",
      "Mix in the sesame, crushed nuts and cardamom; stir off the heat.",
      "While warm, grease palms and roll into small ladoos. Store airtight.",
    ],
  },
  {
    name: "Rajma Rice with Lemon Kachumber",
    ingredients: "Rajma, rice, onion, tomato, ginger-garlic paste, jeera, rajma masala, cucumber, tomato, onion, lemon.",
    cost: "₹50 to ₹75 per serving",
    benefits: "Iron, protein and fibre. Lemon kachumber adds vitamin C. Good heavier lunch on high-hunger days.",
    time: "25–30 min if rajma boiled; overnight soak + 40–50 min if dry",
    category: "Menstrual Health",
    image: img("rajma chawal"),
    steps: [
      "Sauté onion in oil till golden, add ginger-garlic and tomato puree; cook till oil separates.",
      "Stir in rajma masala and boiled rajma with some cooking water.",
      "Simmer 10–12 min till thick and creamy.",
      "Toss kachumber with lemon and serve with hot rice and the curry.",
    ],
  },
  {
    name: "Methi Egg Bhurji with Roti",
    ingredients: "Eggs, fresh methi leaves, onion, tomato, green chilli, haldi, chilli powder, coriander, roti.",
    cost: "₹50 to ₹75 per serving",
    benefits: "Eggs add protein and B vitamins; methi adds iron and fibre; roti gives sustained energy.",
    time: "15 to 20 min",
    category: "Menstrual Health",
    image: img("methi egg bhurji"),
    steps: [
      "Heat oil, sauté onion and green chilli till soft.",
      "Add chopped methi leaves and tomato; cook till tomato is mushy.",
      "Add haldi, chilli powder and salt; pour in beaten eggs and scramble gently.",
      "Garnish with coriander and serve with warm roti.",
    ],
  },
  {
    name: "Sardine or Fish Curry Rice Plate",
    ingredients: "Sardines or local fish, onion, tomato, garlic, curry leaves, haldi, chilli powder, tamarind or kokum, rice.",
    cost: "₹90 to ₹160 per serving",
    benefits:
      "High-quality protein, iron and omega-3 fats. Omega-3s may help with inflammation-related discomfort.",
    time: "30 to 40 min",
    category: "Menstrual Health",
    image: img("fish curry rice"),
    steps: [
      "Clean fish; rub with salt, haldi and chilli powder. Rest 10 min.",
      "Heat oil, splutter curry leaves, add garlic and onion; sauté till golden.",
      "Add tomato and a little water; simmer with tamarind/kokum to a curry.",
      "Slide in fish, cover and cook 6–8 min on low. Serve with hot rice.",
    ],
  },
  {
    name: "Sweet Potato Chaat",
    ingredients:
      "Boiled sweet potato, black salt, roasted jeera, chilli powder, lemon, coriander, pomegranate, optional boiled chana.",
    cost: "₹35 to ₹55 per serving",
    benefits:
      "Steady carbs for energy and cravings. Lemon and pomegranate add vitamin C and antioxidants. Add chana for iron.",
    time: "15 to 20 min",
    category: "Menstrual Health",
    image: img("sweet potato chaat"),
    steps: [
      "Peel boiled sweet potato and cube it into bite-sized pieces.",
      "Add black salt, roasted jeera, chilli powder and lemon; toss gently.",
      "Mix in pomegranate and boiled chana if using.",
      "Garnish with coriander and serve fresh.",
    ],
  },
  {
    name: "Curd Rice with Pomegranate & Tempering",
    ingredients:
      "Cooked rice, curd, pomegranate, cucumber, mustard seeds, curry leaves, ginger, hing, coriander.",
    cost: "₹35 to ₹55 per serving",
    benefits: "Cooling, hydrating, gentle on a low appetite. Curd supports gut, rice gives quick energy.",
    time: "10 to 15 min",
    category: "Menstrual Health",
    image: img("curd rice pomegranate"),
    steps: [
      "Mash warm rice with a fork, mix in curd and salt to a creamy texture.",
      "Heat a little oil, splutter mustard seeds, add hing, curry leaves and grated ginger.",
      "Pour the tempering over the curd rice.",
      "Top with pomegranate, cucumber and coriander before serving.",
    ],
  },
  {
    name: "Moong Sprouts Chilla with Tomato Chutney",
    ingredients:
      "Sprouted moong, ginger, green chilli, jeera, coriander, salt, besan if needed, tomato, garlic, lemon.",
    cost: "₹35 to ₹55 per serving",
    benefits:
      "Protein, iron and fibre. Tomato chutney adds vitamin C. Good breakfast for stable energy and less snacking.",
    time: "20 min if sprouts ready; 24–36 hrs to sprout",
    category: "Menstrual Health",
    image: img("moong sprouts chilla"),
    steps: [
      "Grind sprouts with ginger, green chilli, jeera, salt and water to a thick batter.",
      "Spread on a hot tawa, drizzle oil and cook till crisp underneath.",
      "Flip once and cook till both sides are golden.",
      "Blend tomato, garlic, salt and lemon for a quick chutney; serve together.",
    ],
  },
];

export const tiffinRecipes: Recipe[] = [
  {
    name: "Paneer Bhurji Roll",
    tag: "Vegetarian • Paneer",
    ingredients: "Roti, paneer, onion, tomato, capsicum, haldi, chilli powder, salt.",
    cost: "Affordable",
    benefits: "Filling, easy to eat, doesn't get messy if rolled tightly.",
    time: "10 to 15 min",
    category: "School Tiffins",
    image: img("paneer roll wrap"),
    steps: [
      "Sauté onion and capsicum till soft, add tomato and dry spices.",
      "Crumble paneer in and toss till just heated through.",
      "Spread the bhurji on a warm roti and roll tightly.",
      "Wrap in foil or butter paper for tiffin.",
    ],
  },
  {
    name: "Egg Bhurji Roll",
    tag: "Egg-based • Eggs",
    ingredients: "Roti, eggs, onion, tomato, capsicum, coriander, spices.",
    cost: "Affordable",
    benefits: "High-protein, portable, great for busy mornings.",
    time: "10 min",
    category: "School Tiffins",
    image: img("egg roll kathi"),
    steps: [
      "Scramble eggs with sautéed onion, tomato, capsicum and spices.",
      "Spread on a warm roti, top with coriander.",
      "Roll tight and wrap in butter paper.",
    ],
  },
  {
    name: "Moong Dal Chilla",
    tag: "Vegetarian • Moong dal",
    ingredients: "Soaked moong dal, ginger, green chilli, jeera, salt.",
    cost: "Very budget-friendly",
    benefits: "Light but filling. Batter can be made the night before.",
    time: "15 min if batter ready",
    category: "School Tiffins",
    image: img("moong dal chilla"),
    steps: [
      "Blend soaked moong dal with ginger, chilli, jeera and salt to a smooth batter.",
      "Spread thin on a hot tawa, drizzle oil and cook till crisp.",
      "Flip once, fold and pack with a small box of chutney.",
    ],
  },
  {
    name: "Besan Chilla Roll",
    tag: "Vegetarian • Besan",
    ingredients: "Besan, curd or water, onion, tomato, capsicum, ajwain, spices.",
    cost: "Very low cost",
    benefits: "Quick and budget-friendly. Roll with chutney or a curd dip.",
    time: "10 to 12 min",
    category: "School Tiffins",
    image: img("besan chilla"),
    steps: [
      "Whisk besan with curd/water, salt, ajwain and spices to a pouring batter.",
      "Mix in finely chopped onion, tomato and capsicum.",
      "Spread on a hot tawa, drizzle oil and cook both sides till golden.",
      "Roll up with chutney inside and pack.",
    ],
  },
  {
    name: "Sprouts Chaat",
    tag: "Vegetarian • Sprouted moong",
    ingredients: "Sprouted moong, onion, tomato, cucumber, lemon, chaat masala.",
    cost: "Low cost",
    benefits: "Fresh, crunchy, high in fibre. Pack lemon separately.",
    time: "5 to 8 min if sprouts ready",
    category: "School Tiffins",
    image: img("sprouts chaat salad"),
    steps: [
      "Steam sprouts 2 min for easy digestion (optional).",
      "Toss with chopped onion, tomato, cucumber and chaat masala.",
      "Pack lemon wedges separately to squeeze before eating.",
    ],
  },
  {
    name: "Curd Rice with Peanuts",
    tag: "Vegetarian • Curd + peanuts",
    ingredients: "Rice, curd, roasted peanuts, cucumber, mustard seeds, curry leaves.",
    cost: "Low cost",
    benefits: "Cooling, simple and good for long school days.",
    time: "10 min if rice cooked",
    category: "School Tiffins",
    image: img("curd rice tiffin"),
    steps: [
      "Mix cooled rice with curd, salt and chopped cucumber.",
      "Heat oil, splutter mustard seeds and curry leaves; pour over the rice.",
      "Top with roasted peanuts and pack.",
    ],
  },
  {
    name: "Egg Fried Rice",
    tag: "Egg-based • Eggs",
    ingredients: "Leftover rice, egg, carrot, beans, capsicum, spring onion, soy sauce or basic spices.",
    cost: "Affordable",
    benefits: "Uses leftovers well and feels more exciting than plain rice.",
    time: "12 to 15 min",
    category: "School Tiffins",
    image: img("egg fried rice"),
    steps: [
      "Scramble egg in hot oil and set aside.",
      "Sauté chopped vegetables on high till just tender.",
      "Toss in cold rice, scrambled egg, salt, pepper and a dash of soy sauce.",
      "Finish with spring onion and pack.",
    ],
  },
  {
    name: "Chana Sandwich",
    tag: "Vegetarian • Chana + curd",
    ingredients: "Boiled chana, curd or hung curd, onion, tomato, cucumber, spices, bread.",
    cost: "Cheaper than paneer/cheese",
    benefits: "Healthy sandwich filling that is filling and protein-rich.",
    time: "10 min if chana boiled",
    category: "School Tiffins",
    image: img("chana sandwich"),
    steps: [
      "Lightly mash boiled chana and mix with hung curd, chopped veg, salt and chaat masala.",
      "Spread thickly between two bread slices.",
      "Toast on a tawa or pack as is, cut into halves.",
    ],
  },
  {
    name: "Peanut Poha",
    tag: "Vegetarian • Peanuts + peas",
    ingredients: "Poha, peanuts, onion, peas, curry leaves, mustard seeds, haldi, lemon.",
    cost: "Very affordable",
    benefits: "Affordable, quick, and gives steady energy for school.",
    time: "12 to 15 min",
    category: "School Tiffins",
    image: img("poha tiffin"),
    steps: [
      "Rinse poha and drain.",
      "Heat oil, splutter mustard seeds, add curry leaves, peanuts and onion.",
      "Add peas, haldi, salt; stir in poha and toss till heated through.",
      "Finish with lemon juice before packing.",
    ],
  },
  {
    name: "Egg Mayo or Egg Curd Sandwich",
    tag: "Egg-based • Eggs + curd",
    ingredients: "Boiled eggs, curd or light mayo, pepper, salt, cucumber, bread.",
    cost: "Affordable",
    benefits: "Quick, high-protein, easy to pack. Use curd for a lighter version.",
    time: "8 to 10 min if eggs boiled",
    category: "School Tiffins",
    image: img("egg sandwich"),
    steps: [
      "Mash boiled eggs with curd or light mayo, salt and pepper.",
      "Spread between bread slices with cucumber.",
      "Cut diagonally and pack tightly.",
    ],
  },
];

export const growthRecipes: Recipe[] = [
  {
    name: "Paneer Paratha + Curd",
    tag: "Protein • Calcium • Weight gain",
    ingredients: "Whole wheat atta, paneer, curd, ajwain, jeera powder, salt, ghee.",
    cost: "Affordable",
    benefits: "Paneer and curd support protein and calcium. Ghee adds calories for healthy weight gain.",
    time: "Tip: prep paneer stuffing at night, roll in the morning.",
    category: "Growth Nutrition",
    image: img("paneer paratha"),
    steps: [
      "Knead atta with water and a pinch of salt to a soft dough.",
      "Mash paneer with ajwain, jeera powder, salt and chopped coriander.",
      "Stuff the filling into a small ball of dough and roll out gently.",
      "Cook on a tawa with ghee both sides till golden; serve with curd.",
    ],
  },
  {
    name: "Egg Bhurji Roti Roll",
    tag: "Protein • Iron",
    ingredients: "Eggs, roti, onion, tomato, capsicum, coriander, haldi, chilli powder, ghee or oil.",
    cost: "Affordable",
    benefits: "Eggs give high-quality protein. Roti gives steady energy; vegetables add fibre.",
    time: "Tip: make as a roll for breakfast or tiffin.",
    category: "Growth Nutrition",
    image: img("egg roll wrap"),
    steps: [
      "Sauté onion, capsicum and tomato in ghee with haldi and chilli powder.",
      "Scramble eggs into the mix till just set.",
      "Spread on a warm roti, sprinkle coriander and roll up.",
    ],
  },
  {
    name: "Rajma Rice + Curd",
    tag: "Protein • Iron • Gut health",
    ingredients: "Rajma, rice, onion, tomato, ginger-garlic, rajma masala, curd.",
    cost: "Affordable",
    benefits: "Plant protein, iron and fibre. Curd adds calcium and protein.",
    time: "Tip: boil rajma in bulk for curry, wraps or rice bowls.",
    category: "Growth Nutrition",
    image: img("rajma chawal curd"),
    steps: [
      "Make a base of sautéed onion, ginger-garlic and tomato with rajma masala.",
      "Add boiled rajma with water; simmer till thick.",
      "Serve over hot rice with a bowl of curd on the side.",
    ],
  },
  {
    name: "Ragi Banana Porridge",
    tag: "Calcium • Iron • Weight gain",
    ingredients: "Ragi flour, milk, banana, jaggery, cardamom, crushed peanuts or almonds.",
    cost: "Affordable",
    benefits: "Ragi supports calcium and iron. Milk adds protein and calcium; nuts add healthy fats.",
    time: "Tip: use ripe banana for sweetness, reduce jaggery.",
    category: "Growth Nutrition",
    image: img("ragi porridge kids"),
    steps: [
      "Mix ragi flour with cold water to a smooth paste.",
      "Bring milk and cardamom to a simmer; whisk in the ragi paste.",
      "Cook 5 min stirring constantly; add jaggery to taste.",
      "Top with banana slices and crushed nuts.",
    ],
  },
  {
    name: "Chana Paneer Tikki",
    tag: "Protein • Iron • Calories",
    ingredients: "Boiled chana, paneer, boiled potato, coriander, jeera powder, chaat masala, salt, ghee or oil.",
    cost: "Affordable",
    benefits: "Chana adds iron and fibre; paneer adds calcium and protein; potato gives energy.",
    time: "Tip: shape, freeze and cook directly on a tawa.",
    category: "Growth Nutrition",
    image: img("chana tikki cutlet"),
    steps: [
      "Mash boiled chana, paneer and potato with spices, coriander and salt.",
      "Shape into small flat tikkis.",
      "Shallow-fry in ghee/oil on a tawa till golden both sides.",
      "Serve hot with curd or chutney.",
    ],
  },
  {
    name: "Dal Khichdi with Ghee + Curd",
    tag: "Protein • Energy • Calcium",
    ingredients: "Rice, moong or masoor dal, vegetables, haldi, jeera, ghee, curd.",
    cost: "Very affordable",
    benefits: "Dal + rice = strong plant-protein combo. Ghee adds calories; curd adds calcium.",
    time: "Tip: great for low-appetite days — soft, warm and easy to digest.",
    category: "Growth Nutrition",
    image: img("dal khichdi"),
    steps: [
      "Wash rice and dal; soak 10 min.",
      "Heat ghee, splutter jeera, add chopped vegetables and haldi.",
      "Add rice-dal, salt and 3–4 cups water; pressure-cook for 3 whistles.",
      "Top with a spoon of ghee and serve with curd.",
    ],
  },
  {
    name: "Peanut Banana Milkshake",
    tag: "Weight gain • Protein • Calcium",
    ingredients: "Milk, banana, roasted peanuts or peanut butter, dates or jaggery, cardamom.",
    cost: "Affordable",
    benefits: "Milk gives calcium and protein. Banana and dates add energy; peanuts add fats and protein.",
    time: "Tip: use as an evening snack, not a meal replacement.",
    category: "Growth Nutrition",
    image: img("peanut banana milkshake"),
    steps: [
      "Add milk, banana, peanuts/peanut butter, dates and cardamom to a blender.",
      "Blend till smooth and creamy.",
      "Serve chilled.",
    ],
  },
  {
    name: "Palak Corn Cheese Sandwich",
    tag: "Calcium • Iron • Calories",
    ingredients: "Bread, spinach, corn, cheese or paneer, garlic, pepper, butter or ghee.",
    cost: "Affordable",
    benefits: "Spinach adds iron and folate; cheese/paneer adds calcium and protein; corn adds energy.",
    time: "Tip: squeeze lemon on spinach before stuffing for iron absorption.",
    category: "Growth Nutrition",
    image: img("spinach cheese sandwich"),
    steps: [
      "Sauté garlic and chopped spinach till wilted; add boiled corn, salt and pepper.",
      "Mix in grated cheese or paneer.",
      "Spread between bread slices and grill/toast with butter till golden.",
    ],
  },
  {
    name: "Soya Keema Pav or Roti",
    tag: "Protein • Iron • Weight gain",
    ingredients: "Soya granules, onion, tomato, ginger-garlic, peas, pav or roti, ghee or oil.",
    cost: "Very budget-friendly",
    benefits: "Soya is high-protein. Peas and tomatoes add fibre and micronutrients; pav/roti add energy.",
    time: "Tip: rinse soaked soya well to improve taste and texture.",
    category: "Growth Nutrition",
    image: img("soya keema pav"),
    steps: [
      "Soak soya granules in hot water 10 min; squeeze dry.",
      "Sauté onion, ginger-garlic and tomato with pav-bhaji or garam masala.",
      "Add soya and peas with a little water; cook 8–10 min till thick.",
      "Serve with toasted pav or hot roti.",
    ],
  },
  {
    name: "Vegetable Upma with Peanuts + Curd",
    tag: "Energy • Protein • Calcium",
    ingredients: "Rava, peanuts, peas, carrot, beans, onion, mustard seeds, curry leaves, ghee, curd.",
    cost: "Affordable",
    benefits: "Rava gives energy, peanuts add protein and fats, vegetables add fibre, curd adds calcium.",
    time: "Tip: roast rava in advance for faster morning prep.",
    category: "Growth Nutrition",
    image: img("vegetable upma"),
    steps: [
      "Dry-roast rava till light golden; keep aside.",
      "Heat ghee, splutter mustard seeds and curry leaves; add peanuts, onion and vegetables.",
      "Pour 2.5 cups hot water with salt; bring to a boil.",
      "Stir in rava in a steady stream, cover and cook 3 min. Serve with curd.",
    ],
  },
];

export const budgetSnacks: Recipe[] = [
  {
    name: "Roasted Chana",
    ingredients: "Roasted chana, black salt, chilli powder, lemon if available.",
    cost: "₹10 to ₹20",
    benefits: "Protein, fibre and iron. Keeps you full longer.",
    time: "2 min",
    category: "Budget Snacks",
    image: img("roasted chana"),
    steps: [
      "Take a handful of roasted chana in a bowl.",
      "Sprinkle black salt and a little chilli powder.",
      "Squeeze lemon if available and toss.",
    ],
  },
  {
    name: "Peanut Chaat",
    ingredients: "Roasted peanuts, onion, tomato, coriander, lemon, chaat masala.",
    cost: "₹15 to ₹25",
    benefits: "Protein, healthy fats, energy. Great for healthy weight gain.",
    time: "5 to 7 min",
    category: "Budget Snacks",
    image: img("peanut chaat"),
    steps: [
      "Combine roasted peanuts with finely chopped onion, tomato and coriander.",
      "Add chaat masala and salt.",
      "Squeeze lemon and toss before serving.",
    ],
  },
  {
    name: "Sprouts Chaat",
    ingredients: "Sprouted moong, onion, tomato, cucumber, lemon, chaat masala.",
    cost: "₹15 to ₹25",
    benefits: "Protein, fibre, iron and vitamins. Light but filling.",
    time: "5 min if sprouts ready",
    category: "Budget Snacks",
    image: img("moong sprouts"),
    steps: [
      "Steam sprouts 2 min (optional).",
      "Toss with chopped onion, tomato and cucumber.",
      "Add chaat masala, salt and lemon; mix well.",
    ],
  },
  {
    name: "Boiled Egg Chaat",
    ingredients: "Boiled eggs, onion, tomato, black salt, pepper, lemon.",
    cost: "₹15 to ₹25",
    benefits: "High-quality protein, healthy fats and B vitamins.",
    time: "10 min (2 min if pre-boiled)",
    category: "Budget Snacks",
    image: img("boiled egg chaat"),
    steps: [
      "Peel boiled eggs and cut into quarters.",
      "Top with chopped onion, tomato, black salt and pepper.",
      "Squeeze lemon and serve.",
    ],
  },
  {
    name: "Poha with Peanuts",
    ingredients: "Poha, peanuts, onion, curry leaves, mustard seeds, haldi, lemon.",
    cost: "₹20 to ₹30",
    benefits: "Quick energy, protein and fats. Lemon improves iron absorption.",
    time: "12 to 15 min",
    category: "Budget Snacks",
    image: img("poha snack"),
    steps: [
      "Rinse poha and drain.",
      "Temper mustard seeds, curry leaves, peanuts and onion in oil.",
      "Add haldi, salt and poha; toss till heated and finish with lemon.",
    ],
  },
  {
    name: "Banana with Peanut Butter / Peanuts",
    ingredients: "Banana, peanut butter or crushed roasted peanuts.",
    cost: "₹15 to ₹30",
    benefits: "Energy, potassium, healthy fats and weight gain support.",
    time: "2 min",
    category: "Budget Snacks",
    image: img("banana peanut butter"),
    steps: [
      "Slice a banana lengthways or into rounds.",
      "Spread peanut butter on top or sprinkle crushed peanuts.",
      "Serve immediately.",
    ],
  },
  {
    name: "Besan Chilla",
    ingredients: "Besan, onion, tomato, coriander, ajwain, haldi, salt.",
    cost: "₹15 to ₹25",
    benefits: "Protein-rich, filling, better than packaged snacks.",
    time: "10 to 12 min",
    category: "Budget Snacks",
    image: img("besan cheela"),
    steps: [
      "Whisk besan with water, salt, ajwain, haldi to a pouring batter.",
      "Stir in chopped onion, tomato and coriander.",
      "Spread on a hot tawa, drizzle oil and cook both sides till crisp.",
    ],
  },
  {
    name: "Curd Rice Cup",
    ingredients: "Cooked rice, curd, salt, cucumber, mustard seeds, curry leaves.",
    cost: "₹15 to ₹25",
    benefits: "Cooling, gut-friendly, hydrating and filling.",
    time: "5 min if rice cooked",
    category: "Budget Snacks",
    image: img("curd rice"),
    steps: [
      "Mix cooled rice with curd, salt and chopped cucumber.",
      "Temper mustard seeds and curry leaves in a little oil.",
      "Pour the tempering over and serve.",
    ],
  },
  {
    name: "Sweet Potato Chaat",
    ingredients: "Boiled sweet potato, lemon, chaat masala, black salt, coriander.",
    cost: "₹20 to ₹30",
    benefits: "Steady energy, fibre, potassium and antioxidants.",
    time: "15 min",
    category: "Budget Snacks",
    image: img("sweet potato chaat snack"),
    steps: [
      "Peel and cube boiled sweet potato.",
      "Sprinkle chaat masala, black salt and lemon juice.",
      "Garnish with coriander and serve.",
    ],
  },
  {
    name: "Makhana Masala",
    ingredients: "Makhana, ghee or oil, haldi, chilli powder, salt.",
    cost: "₹25 to ₹40",
    benefits: "Light, crunchy and better than chips. Good for school, college or office.",
    time: "5 to 7 min",
    category: "Budget Snacks",
    image: img("makhana foxnut snack"),
    steps: [
      "Heat ghee or oil in a kadhai on low.",
      "Add makhana and roast 4–5 min till crisp.",
      "Sprinkle haldi, chilli powder and salt; toss well and cool.",
    ],
  },
];

export const allRecipes: Recipe[] = [
  ...ironEnergyRecipes,
  ...menstrualRecipes,
  ...tiffinRecipes,
  ...growthRecipes,
  ...budgetSnacks,
];

export const recipeCategories = [
  "Iron & Energy",
  "Menstrual Health",
  "School Tiffins",
  "Growth Nutrition",
  "Budget Snacks",
] as const;
