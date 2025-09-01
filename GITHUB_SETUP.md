# GitHub Setup Guide for AI Recipe Generator

## Step-by-Step Instructions to Push to GitHub

### 1. Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `ai-recipe-generator`
5. Make it **Public** (so others can see your awesome project!)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### 2. Open Terminal/Command Prompt
Navigate to your project folder:
```bash
cd "C:\Users\LapMac\OneDrive\Desktop\New folder"
```

### 3. Initialize Git and Add Files
```bash
git init
git add .
git commit -m "Initial commit: AI Recipe Generator with Gemini integration"
```

### 4. Connect to GitHub Repository
Replace `YOUR_USERNAME` with your actual GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-recipe-generator.git
git branch -M main
git push -u origin main
```

### 5. Alternative: Use GitHub Desktop
If you prefer a GUI:
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. Click "Add" → "Add existing repository"
4. Browse to your project folder
5. Click "Publish repository"
6. Name it `ai-recipe-generator`
7. Make it public
8. Click "Publish repository"

## Files That Will Be Uploaded

✅ **ai-recipe-generator.html** - Main application (fully functional)  
✅ **standalone.html** - Demo version  
✅ **preview.html** - Preview version  
✅ **README.md** - Project documentation  
✅ **App.tsx** - React component  
✅ **components/** - All React components  
✅ **services/** - AI service integration  
✅ **package.json** - Dependencies  
✅ **vite.config.ts** - Build configuration  
✅ **types.ts** - TypeScript definitions  
✅ **constants.ts** - Application constants  

## After Pushing to GitHub

1. **Your repository will be live** at: `https://github.com/YOUR_USERNAME/ai-recipe-generator`
2. **Add a description** in the repository settings
3. **Add topics** like: `ai`, `recipe-generator`, `gemini`, `react`, `typescript`
4. **Enable GitHub Pages** to host the HTML version online

## GitHub Pages Setup (Optional)

To host your app online:
1. Go to repository Settings
2. Scroll to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Click "Save"
7. Your app will be live at: `https://YOUR_USERNAME.github.io/ai-recipe-generator/`

## Project Features to Highlight

🍳 **AI-Powered Recipe Generation** using Google Gemini  
🎨 **Beautiful Modern UI** with Tailwind CSS  
📱 **Responsive Design** for all devices  
⚡ **Real-time AI Integration**  
🔒 **Secure API Key Handling**  
📝 **Complete Documentation**  

Your AI Recipe Generator is ready to be shared with the world! 🌟
