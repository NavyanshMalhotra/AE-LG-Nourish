# NOURISH (AE-LG-Nourish)

NOURISH is a personalized, AI-driven nutrition and meal planning platform designed to provide simple, healthy, and affordable food solutions tailored to Indian families, women, and children. The application supports multi-language localization (English, Hindi, Marathi) and features a modern, premium, glassmorphic UI.

## Features

- **AI Meal Planner:** Uses Google Gemini 2.5 to generate personalized, week-long meal plans based on target demographic, budget, diet preference, and health goals.
- **Local Language Support:** Full support for English, Hindi, and Marathi, making the app highly accessible to local communities.
- **Premium UI/UX:** A beautifully crafted, responsive design featuring glassmorphism, dynamic gradients, and smooth micro-animations.
- **Healthy Recipes:** A built-in repository of nutritious, highly affordable Indian recipes focusing on key health targets (e.g., Iron/Anemia, Child Growth).
- **Printable Plans:** Users can generate and easily print or save their customized weekly meal plans as PDFs.

## TODOs

- [ ] **API Key**: Update Gemini API to Lavanya's API key on GitHub and redeploy
- [ ] **Videos:** Add educational doctor and expert nutritionist videos to the platform.
- [ ] **Photos on Recipes:** Re-integrate high-quality, accurate food photography into the recipe cards and details.
- [x] **Hosting:** Deploy and host the website publicly for live user access. (Completed via GitHub Pages)
- [ ] **Hosting:** Deploy and host the website publicly on a custom domain

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

### 6. Deployment (GitHub Pages)

The app is fully automated to deploy to GitHub Pages using GitHub Actions whenever you push to the `main` branch.

**Initial Setup:**
1. Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**.
2. Add a new repository secret named exactly `VITE_GEMINI_API_KEY` and paste your Gemini API key as the value (no quotes).
3. Go to **Settings** -> **Pages**.
4. Under "Build and deployment", set the **Source** to **GitHub Actions**.

Whenever you run `git push origin main`, GitHub will automatically build your React app, securely inject your API key into the final build, and deploy the live site. 

**Troubleshooting API Keys:**
If your live site throws a `400 Bad Request` or `403 Forbidden` API error:
- Ensure you did not include quotes (`""`) when pasting the API key into GitHub Secrets.
- Ensure your Google Cloud Console has an **HTTP Referrers** restriction set exactly to `https://navyanshmalhotra.github.io/*` to protect your key from theft.
- Remember to do a **Hard Refresh** (`Cmd+Shift+R` or `Ctrl+F5`) on the live site after a new deployment to clear out old cached JavaScript files!
