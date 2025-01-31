import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes, addRecipe, removeRecipe } from '../features/recipeSlice';

const RecipeList = () => {
  const { recipes, loading, error } = useSelector(state => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleAddRecipe = () => {
    const newRecipe = { id: Date.now(), name: `Recipe ${recipes.length + 1}` };
    dispatch(addRecipe(newRecipe));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Recipe List</h2>
      <button onClick={handleAddRecipe}>Add Recipe</button>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <button onClick={() => dispatch(removeRecipe(recipe.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;