import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
    const response = await fetch("src/data/recipes.json");
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return response.json();
  });
  
const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload);
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
        state.recipes = action.payload.recipes; // Ensure correct structure
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// ✅ Ensure you export the reducer
export const { addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;