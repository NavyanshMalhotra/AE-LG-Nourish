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
  image: string;
};

const images = {
  curry: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800",
  dosa: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800",
  chaat: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800",
  dal: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
  roti: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
  rice: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
  snack: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800"
};

const getImg = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('dosa') || n.includes('chilla')) return images.dosa;
  if (n.includes('chaat') || n.includes('poha')) return images.chaat;
  if (n.includes('curry') || n.includes('sambar') || n.includes('dal')) return images.dal;
  if (n.includes('roti') || n.includes('paratha') || n.includes('roll')) return images.roti;
  if (n.includes('rice') || n.includes('khichdi')) return images.rice;
  if (n.includes('egg') || n.includes('fish') || n.includes('chicken')) return images.curry;
  return images.snack;
};

export const ironEnergyRecipes: Recipe[] = [
  {
    name: "Palak Chana Power Bowl",
    ingredients: "Boiled chana, spinach, onion, tomato, garlic, jeera, haldi, chilli powder, garam masala, lemon, rice or roti.",
    cost: "₹45 to ₹70 per serving",
    benefits: "Plant-based iron, protein, fibre, and slow-release energy. Lemon helps improve iron absorption.",
    time: "20 to 25 min (if chana is boiled)",
    category: "Iron & Energy",
    image: getImg("Palak Chana Power Bowl"),
    steps: [
      "Heat oil, splutter jeera, then add chopped garlic and onion. Sauté till golden.",
      "Add tomato, haldi, chilli powder and a pinch of salt. Cook till soft and oil separates.",
      "Stir in chopped spinach and cook 2–3 min till it wilts.",
      "Add boiled chana with a little water; simmer 5–7 min and sprinkle garam masala.",
      "Finish with lemon juice and serve hot with rice or roti."
    ]
  },
  {
    name: "Ragi Dosa with Sambar",
    ingredients: "Ragi flour, rice flour or dosa batter, curd or water, salt, sambar with dal and vegetables, tomato chutney.",
    cost: "₹40 to ₹60 per serving",
    benefits: "Ragi gives iron and complex carbs. Sambar adds protein, fibre and minerals from dal and vegetables.",
    time: "20 min",
    category: "Iron & Energy",
    image: getImg("Ragi Dosa with Sambar"),
    steps: [
      "Mix ragi flour, rice flour, salt and enough water/curd to a thin pouring batter. Rest 10 min.",
      "Heat a tawa, pour a ladle of batter and spread thin from the centre outwards.",
      "Drizzle a little oil; cook till the edges lift and the base is crisp.",
      "Fold and serve hot with warm sambar and tomato chutney."
    ]
  },
  {
    name: "Black Chana Chaat",
    ingredients: "Boiled black chana, onion, tomato, cucumber, coriander, green chilli, chaat masala, roasted jeera, lemon juice.",
    cost: "₹35 to ₹50 per serving",
    benefits: "Rich in plant iron, protein and fibre. Steady energy. Lemon adds vitamin C for iron absorption.",
    time: "10 min",
    category: "Iron & Energy",
    image: getImg("Black Chana Chaat"),
    steps: [
      "Drain warm boiled chana into a bowl.",
      "Add finely chopped onion, tomato, cucumber, green chilli and coriander.",
      "Sprinkle chaat masala, roasted jeera and salt to taste.",
      "Squeeze in fresh lemon, toss well and serve immediately."
    ]
  },
  {
    name: "Moringa Dal Rice Bowl",
    ingredients: "Toor or moong dal, moringa leaves, garlic, jeera, hing, haldi, tomato, ghee, lemon, rice.",
    cost: "₹45 to ₹65 per serving",
    benefits: "Moringa leaves add iron and micronutrients. Dal gives protein, rice adds energy. Lemon helps iron absorption.",
    time: "30 to 35 min",
    category: "Iron & Energy",
    image: getImg("Moringa Dal Rice Bowl"),
    steps: [
      "Pressure-cook dal with haldi and a little salt till soft.",
      "Heat ghee, splutter jeera, add hing, garlic and chopped tomato; cook till soft.",
      "Add moringa leaves; sauté 2 min, then pour in the cooked dal with water as needed.",
      "Simmer 5 min, finish with lemon and serve over hot rice."
    ]
  },
  {
    name: "Rajma Rice with Kachumber",
    ingredients: "Boiled rajma, onion, tomato, ginger-garlic, jeera, rajma masala, rice, cucumber, onion, tomato, lemon.",
    cost: "₹50 to ₹75 per serving",
    benefits: "Rajma adds iron, protein and fibre. Rice gives energy. Lemon kachumber adds vitamin C for iron absorption.",
    time: "25–30 min",
    category: "Iron & Energy",
    image: getImg("Rajma Rice with Kachumber"),
    steps: [
      "Heat oil, splutter jeera, sauté onion till golden, add ginger-garlic paste.",
      "Add tomato puree and rajma masala; cook till oil separates.",
      "Add boiled rajma with a cup of water; simmer 10 min till thick.",
      "Mix cucumber, onion, tomato and lemon for kachumber and serve with hot rice."
    ]
  },
  {
    name: "Egg Bhurji Roti Plate",
    ingredients: "Eggs, onion, tomato, capsicum, green chilli, haldi, chilli powder, coriander, roti.",
    cost: "₹45 to ₹70 per serving",
    benefits: "Eggs give protein and B vitamins for energy.",
    time: "15 to 20 min",
    category: "Iron & Energy",
    image: getImg("Egg Bhurji Roti Plate"),
    steps: [
      "Heat oil, sauté onion, green chilli and capsicum till soft.",
      "Add tomato, haldi, chilli powder and salt; cook till mushy.",
      "Pour in beaten eggs and scramble on low heat till just set.",
      "Garnish with coriander and serve with warm roti."
    ]
  }
];

export const menstrualRecipes: Recipe[] = [
  {
    name: "Palak Moong Dal Khichdi",
    ingredients: "Moong dal, rice, spinach, ghee, jeera, hing, haldi, ginger, garlic, salt, lemon.",
    cost: "₹40 to ₹60 per serving",
    benefits: "Gentle on digestion for low-energy days. Moong adds protein, spinach gives iron and folate.",
    time: "25 to 30 min",
    category: "Menstrual Health",
    image: getImg("Palak Moong Dal Khichdi"),
    steps: [
      "Wash rice and moong dal together; soak 10 min.",
      "Heat ghee, splutter jeera, add hing, ginger-garlic and chopped spinach; sauté 2 min.",
      "Add rice-dal, haldi, salt and 3 cups water; pressure-cook for 3 whistles.",
      "Finish with a squeeze of lemon and a spoon of ghee on top."
    ]
  },
  {
    name: "Ragi Banana Porridge",
    ingredients: "Ragi flour, milk or water, banana, jaggery, cardamom, chopped almonds.",
    cost: "₹35 to ₹55 per serving",
    benefits: "Iron and slow carbs from ragi, quick energy and potassium from banana.",
    time: "10 to 15 min",
    category: "Menstrual Health",
    image: getImg("Ragi Banana Porridge"),
    steps: [
      "Whisk ragi flour with a little cold water to a smooth paste (no lumps).",
      "Boil milk or water with cardamom; pour the ragi paste in slowly, stirring constantly.",
      "Cook 5–7 min on low till glossy and thick.",
      "Add jaggery to taste, top with sliced banana and chopped nuts."
    ]
  },
  {
    name: "Sesame Jaggery Ladoo",
    ingredients: "White or black sesame seeds, jaggery, ghee, cardamom.",
    cost: "₹8 to ₹15 per ladoo",
    benefits: "Sesame gives iron, calcium and magnesium. Jaggery gives quick energy.",
    time: "20 min",
    category: "Menstrual Health",
    image: getImg("Sesame Jaggery Ladoo"),
    steps: [
      "Dry-roast sesame seeds on low till they pop and turn fragrant; cool slightly.",
      "Melt jaggery with a spoon of ghee on low till syrupy.",
      "Mix in the sesame and cardamom; stir off the heat.",
      "While warm, grease palms and roll into small ladoos."
    ]
  }
];

export const tiffinRecipes: Recipe[] = [
  {
    name: "Paneer Bhurji Roll",
    ingredients: "Roti, paneer, onion, tomato, capsicum, haldi, chilli powder, salt.",
    cost: "₹40 to ₹60 per serving",
    benefits: "Filling, easy to eat, doesn't get messy if rolled tightly.",
    time: "10 to 15 min",
    category: "School Tiffins",
    image: getImg("Paneer Bhurji Roll"),
    steps: [
      "Sauté onion and capsicum till soft, add tomato and dry spices.",
      "Crumble paneer in and toss till just heated through.",
      "Spread the bhurji on a warm roti and roll tightly."
    ]
  },
  {
    name: "Moong Dal Chilla",
    ingredients: "Soaked moong dal, ginger, green chilli, jeera, salt.",
    cost: "₹20 to ₹30 per serving",
    benefits: "Light but filling. Batter can be made the night before.",
    time: "15 min",
    category: "School Tiffins",
    image: getImg("Moong Dal Chilla"),
    steps: [
      "Blend soaked moong dal with ginger, chilli, jeera and salt to a smooth batter.",
      "Spread thin on a hot tawa, drizzle oil and cook till crisp.",
      "Flip once, fold and pack with a small box of chutney."
    ]
  },
  {
    name: "Egg Fried Rice",
    ingredients: "Leftover rice, egg, carrot, beans, capsicum, spring onion, soy sauce or basic spices.",
    cost: "₹35 to ₹50 per serving",
    benefits: "Uses leftovers well and feels more exciting than plain rice.",
    time: "12 to 15 min",
    category: "School Tiffins",
    image: getImg("Egg Fried Rice"),
    steps: [
      "Scramble egg in hot oil and set aside.",
      "Sauté chopped vegetables on high till just tender.",
      "Toss in cold rice, scrambled egg, salt, pepper.",
      "Finish with spring onion and pack."
    ]
  }
];

export const growthRecipes: Recipe[] = [
  {
    name: "Paneer Paratha + Curd",
    ingredients: "Whole wheat atta, paneer, curd, ajwain, jeera powder, salt, ghee.",
    cost: "₹40 to ₹60 per serving",
    benefits: "Paneer and curd support protein and calcium. Ghee adds calories for healthy weight gain.",
    time: "20 min",
    category: "Growth Nutrition",
    image: getImg("Paneer Paratha + Curd"),
    steps: [
      "Knead atta with water and a pinch of salt to a soft dough.",
      "Mash paneer with ajwain, jeera powder, salt and chopped coriander.",
      "Stuff the filling into a small ball of dough and roll out gently.",
      "Cook on a tawa with ghee both sides till golden; serve with curd."
    ]
  }
];

export const budgetSnacks: Recipe[] = [
  {
    name: "Roasted Chana",
    ingredients: "Roasted chana, black salt, chilli powder, lemon if available.",
    cost: "₹10 to ₹20",
    benefits: "Protein, fibre and iron. Keeps you full longer.",
    time: "2 min",
    category: "Budget Snacks",
    image: getImg("Roasted Chana"),
    steps: [
      "Take a handful of roasted chana in a bowl.",
      "Sprinkle black salt and a little chilli powder.",
      "Squeeze lemon if available and toss."
    ]
  },
  {
    name: "Peanut Chaat",
    ingredients: "Roasted peanuts, onion, tomato, coriander, lemon, chaat masala.",
    cost: "₹15 to ₹25",
    benefits: "Protein, healthy fats, energy. Great for healthy weight gain.",
    time: "5 to 7 min",
    category: "Budget Snacks",
    image: getImg("Peanut Chaat"),
    steps: [
      "Combine roasted peanuts with finely chopped onion, tomato and coriander.",
      "Add chaat masala and salt.",
      "Squeeze lemon and toss before serving."
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
  "Iron & Energy",
  "Menstrual Health",
  "School Tiffins",
  "Growth Nutrition",
  "Budget Snacks"
];
