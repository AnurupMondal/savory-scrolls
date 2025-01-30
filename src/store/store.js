import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeSlice";

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store;
