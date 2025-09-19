
# AI Recipe Generator 🍳
Preview Video - https://www.linkedin.com/posts/pavankumarofficialcareers_ai-webdevelopment-opensource-activity-7368312929676361728-WX6V?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEmg1F0BwC1R4bCpUxVKCJMSZzBizU6bHOY

A beautiful, modern web application that generates delicious recipes using AI based on your available ingredients, meal preferences, and dietary restrictions.

## ✨ Features

- **Smart Recipe Generation**: Uses Google's Gemini AI to create personalized recipes
- **Ingredient-Based**: Start with what you have in your pantry
- **Dietary Restrictions**: Support for vegetarian, vegan, gluten-free, dairy-free, and nut-free options
- **Beautiful UI**: Modern, responsive design with smooth animations
- **AI-Generated Images**: Each recipe comes with a beautiful AI-generated food image
- **Multiple Meal Types**: Breakfast, lunch, dinner, snacks, and desserts

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- A Google Gemini API key

### Setup

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   - Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start generating delicious recipes!

## 🎯 How to Use

1. **Add Ingredients**: Enter the ingredients you have available
2. **Select Meal Type**: Choose from breakfast, lunch, dinner, snack, or dessert
3. **Set Dietary Restrictions**: Toggle any dietary restrictions you need
4. **Generate Recipe**: Click the "Generate Recipe" button
5. **Enjoy**: Get a complete recipe with ingredients, instructions, and a beautiful image!

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **AI Service**: Google Gemini AI
- **Icons**: Custom SVG icons

## 📁 Project Structure

```
├── components/          # React components
│   ├── ErrorMessage.tsx
│   ├── Icons.tsx
│   ├── IngredientInput.tsx
│   ├── LoadingSpinner.tsx
│   └── RecipeCard.tsx
├── services/           # API services
│   └── geminiService.ts
├── App.tsx            # Main application component
├── constants.ts       # Application constants
├── types.ts          # TypeScript type definitions
├── index.css         # Global styles
└── package.json      # Dependencies and scripts
```

## 🔧 Configuration

The application uses environment variables for configuration:

- `GEMINI_API_KEY`: Your Google Gemini API key (required)

## 🎨 Customization

You can easily customize the application by:

- Modifying the `constants.ts` file to add new meal types or dietary options
- Updating the styling in `index.css` or component files
- Adding new features to the recipe generation logic in `geminiService.ts`

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.
