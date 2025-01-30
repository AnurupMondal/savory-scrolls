import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  try {
    const response = await fetch("/data/recipes.json");
    if (!response.ok) throw new Error("Failed to fetch recipes");
    const data = await response.json();
    
    if (!data.recipes) throw new Error("Invalid JSON structure");
    
    return data.recipes; // ✅ Ensure we return an array of recipes
  } catch (error) {
    throw new Error(error.message || "Unknown error fetching recipes");
  }
});

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add new recipes to Redux state
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    // Remove a recipe by ID
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload);
    },
    // Update an existing recipe by ID
    updateRecipe: (state, action) => {
      const index = state.recipes.findIndex((recipe) => recipe.id === action.payload.id);
      if (index !== -1) {
        state.recipes[index] = action.payload;
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