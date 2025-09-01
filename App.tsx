
import React, { useState, useCallback } from 'react';
import { Recipe } from './types';
import { MEAL_TYPES, DIETARY_OPTIONS } from './constants';
import { generateRecipe, generateRecipeImage } from './services/geminiService';
import IngredientInput from './components/IngredientInput';
import RecipeCard from './components/RecipeCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { ChefHatIcon, SparklesIcon } from './components/Icons';

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>(['Tomatoes', 'Onion', 'Garlic']);
  const [mealType, setMealType] = useState<string>('Dinner');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleDietaryChange = (option: string) => {
    setDietaryRestrictions(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleGenerateRecipe = useCallback(async () => {
    if (ingredients.length === 0) {
      setError('Please add at least one ingredient.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedRecipe(null);

    try {
      setLoadingMessage('Generating your culinary masterpiece...');
      const recipe = await generateRecipe(ingredients, mealType, dietaryRestrictions);

      setLoadingMessage('Creating a delicious photo...');
      const imageUrl = await generateRecipeImage(recipe.title);
      
      setGeneratedRecipe({ ...recipe, imageUrl: imageUrl || undefined });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [ingredients, mealType, dietaryRestrictions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
          <header className="flex items-center gap-3 mb-6">
            <ChefHatIcon className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">Recipe Generator</h1>
          </header>
          <p className="text-gray-600 mb-8">Tell us what's in your pantry, and we'll whip up a delicious recipe for you!</p>

          <form onSubmit={(e) => { e.preventDefault(); handleGenerateRecipe(); }}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Ingredients</label>
                <IngredientInput ingredients={ingredients} setIngredients={setIngredients} />
              </div>

              <div>
                <label htmlFor="mealType" className="block text-sm font-medium text-gray-700 mb-2">Meal Type</label>
                <select
                  id="mealType"
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                >
                  {MEAL_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                <div className="flex flex-wrap gap-2">
                  {DIETARY_OPTIONS.map(option => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => handleDietaryChange(option)}
                      className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                        dietaryRestrictions.includes(option)
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-10 flex items-center justify-center gap-3 bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
            >
              <SparklesIcon className="w-5 h-5" />
              {isLoading ? 'Generating...' : 'Generate Recipe'}
            </button>
          </form>
        </div>

        {/* Right Side: Recipe Display */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 min-h-[300px] flex items-center justify-center">
          {isLoading && <LoadingSpinner message={loadingMessage} />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && generatedRecipe && <RecipeCard recipe={generatedRecipe} />}
          {!isLoading && !error && !generatedRecipe && (
            <div className="text-center text-gray-500">
              <ChefHatIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h2 className="text-xl font-semibold">Your recipe will appear here</h2>
              <p className="mt-2">Fill out the form and click "Generate Recipe" to start.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
