import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipesData from "../data/recipes.json";

// Load recipes from localStorage if available
const loadRecipesFromStorage = () => {
  const savedRecipes = localStorage.getItem("recipes");
  return savedRecipes ? JSON.parse(savedRecipes) : recipesData.recipes;
};

// Fetch Recipes (Simulated API Call)
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  try {
    // Simulate fetching data from an API
    return new Promise((resolve) => setTimeout(() => resolve(recipesData.recipes), 500));
  } catch (error) {
    throw new Error(error.message || "Unknown error fetching recipes");
  }
});

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: loadRecipesFromStorage(), // Load from localStorage or JSON
    loading: false,
    error: null,
  },
  reducers: {
    // Add new recipe
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
      localStorage.setItem("recipes", JSON.stringify(state.recipes));
    },
    // Remove recipe by ID
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload);
      localStorage.setItem("recipes", JSON.stringify(state.recipes));
    },
    // Update existing recipe
    updateRecipe: (state, action) => {
      const index = state.recipes.findIndex((recipe) => recipe.id === action.payload.id);
      if (index !== -1) {
        state.recipes[index] = action.payload;
        localStorage.setItem("recipes", JSON.stringify(state.recipes));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
        localStorage.setItem("recipes", JSON.stringify(state.recipes));
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export Actions and Reducer
export const { addRecipe, removeRecipe, updateRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
