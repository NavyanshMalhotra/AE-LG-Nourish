# NOURISH (AE-LG-Nourish)

NOURISH is a personalized, AI-driven nutrition and meal planning platform designed to provide simple, healthy, and affordable food solutions tailored to Indian families, women, and children. The application supports multi-language localization (English, Hindi, Marathi) and features a modern, premium, glassmorphic UI.

## Features

- **AI Meal Planner:** Uses Google Gemini 2.5 to generate personalized, week-long meal plans based on target demographic, budget, diet preference, and health goals.
- **Local Language Support:** Full support for English, Hindi, and Marathi, making the app highly accessible to local communities.
- **Premium UI/UX:** A beautifully crafted, responsive design featuring glassmorphism, dynamic gradients, and smooth micro-animations.
- **Healthy Recipes:** A built-in repository of nutritious, highly affordable Indian recipes focusing on key health targets (e.g., Iron/Anemia, Child Growth).
- **Printable Plans:** Users can generate and easily print or save their customized weekly meal plans as PDFs.

## TODOs

- [ ] **Videos:** Add educational doctor and expert nutritionist videos to the platform.
- [ ] **Photos on Recipes:** Re-integrate high-quality, accurate food photography into the recipe cards and details.
- [ ] **Hosting:** Deploy and host the website publicly for live user access.

---

## How to Run & Contribute

Follow these steps to clone, make changes, and run the application locally on your machine.

### 1. Setup and Clone

First, clone the repository and navigate into the project directory:
```bash
git clone <your-repo-url>
cd AE-LG-Nourish
```

### 2. Environment Variables
You will need a Google Gemini API Key to power the AI Meal Planner.
Create a `.env` file in the root directory and add your key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

### 3. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 4. Running the Development Server
To start the app locally with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

### 5. Making Git Changes

When you want to contribute or save your changes:

1. **Check your status**:
   ```bash
   git status
   ```
2. **Stage your changes**:
   ```bash
   git add .
   ```
3. **Commit your changes** (write a clear, descriptive message):
   ```bash
   git commit -m "feat: added new doctor videos page"
   ```
4. **Push to the repository**:
   ```bash
   git push origin main
   ```