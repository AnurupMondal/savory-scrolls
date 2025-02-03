import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../Styles/RecipeForm.css';

const RecipeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ingredients: [{ quantity: '', measurement: '', item: '' }],
      steps: [''],
    },
  });

  const {
    fields: ingredientFields,
    append: addIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const {
    fields: stepFields,
    append: addStep,
    remove: removeStep,
  } = useFieldArray({
    control,
    name: 'steps',
  });

  const onSubmit = data => {
    console.log('Recipe Submitted:', data);
  };

  return (
    <div className='full-container'>
      <Navbar />
      <div className='recipe-form-container'>

        <h2 className='form-title'>Add a Recipe</h2>
        <p className='form-description'>
          We want to show your culinary masterpiece. Add your recipe and show off
          your creativity!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='recipe-form'>
          {/* Image Upload */}
          <div className='image-upload'>
            <label className='upload-label'>Add a Photo</label>
            <input type='file' {...register('image')} className='file-input' />
          </div>

          {/* Recipe Title */}
          <label className='form-label'>Recipe Title *</label>
          <input
            type='text'
            {...register('recipeTitle', { required: 'Title is required' })}
            className='form-input'
          />
          {errors.recipeTitle && (
            <p className='error-message'>{errors.recipeTitle.message}</p>
          )}

          {/* Description */}
          <label className='form-label'>Description *</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className='form-textarea'
          ></textarea>
          {errors.description && (
            <p className='error-message'>{errors.description.message}</p>
          )}

          {/* Servings, Prep Time, Cook Time */}
          <div className='form-row'>
            <div>
              <label className='form-label'>Servings *</label>
              <input
                type='number'
                {...register('servings', { required: 'Required' })}
                className='form-input'
              />
            </div>
            <div className='time-input-container'>
              <label className='form-label'>Prep Time *</label>
              <div className='time-input-group'>
                <input
                  type='number'
                  {...register('prepTime', { required: 'Required' })}
                  placeholder='hrs'
                  className='time-input'
                />
                <input
                  type='number'
                  {...register('prepTimeMinutes')}
                  placeholder='mins'
                  className='time-input'
                />
              </div>
            </div>
            <div className='time-input-container'>
              <label className='form-label'>Cook Time *</label>
              <div className='time-input-group'>
                <input
                  type='number'
                  {...register('cookTime', { required: 'Required' })}
                  placeholder='hrs'
                  className='time-input'
                />
                <input
                  type='number'
                  {...register('cookTimeMinutes')}
                  placeholder='mins'
                  className='time-input'
                />
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <label className='form-label'>Ingredients *</label>
          {ingredientFields.map((field, index) => (
            <div key={field.id} className='ingredient-row'>
              <input
                type='text'
                {...register(`ingredients.${index}.quantity`, { required: true })}
                placeholder='Qty'
                className='form-input'
              />
              <input
                type='text'
                {...register(`ingredients.${index}.measurement`, {
                  required: true,
                })}
                placeholder='Measurement'
                className='form-input'
              />
              <input
                type='text'
                {...register(`ingredients.${index}.item`, { required: true })}
                placeholder='Item'
                className='form-input'
              />
              <button
                type='button'
                onClick={() => removeIngredient(index)}
                className='remove-btn'
              >
                ✖
              </button>
            </div>
          ))}
          <button
            type='button'
            onClick={() =>
              addIngredient({ quantity: '', measurement: '', item: '' })
            }
            className='add-btn'
          >
            + Add Ingredient
          </button>

          {/* Instructions */}
          <label className='form-label'>Instructions *</label>
          {stepFields.map((field, index) => (
            <div key={field.id} className='step-row'>
              <label className='step-label'>Step {index + 1}</label>
              <textarea
                {...register(`steps.${index}`, { required: true })}
                className='form-textarea'
              ></textarea>
              <button
                type='button'
                onClick={() => removeStep(index)}
                className='remove-btn'
              >
                ✖
              </button>
            </div>
          ))}
          <button type='button' onClick={() => addStep('')} className='add-btn'>
            + Add Step
          </button>

          {/* Cook's Tips */}
          <label className='form-label'>Cook’s Tips</label>
          <textarea
            {...register('cooksTips')}
            className='form-textarea'
          ></textarea>

          {/* Tags */}
          <label className='form-label'>Tags</label>
          <select {...register('cuisine')} className='form-dropdown'>
            <option value=''>Cuisine</option>
            <option value='italian'>Italian</option>
            <option value='mexican'>Mexican</option>
          </select>
          <select {...register('mealType')} className='form-dropdown'>
            <option value=''>Meal Type</option>
            <option value='breakfast'>Breakfast</option>
            <option value='dinner'>Dinner</option>
          </select>

          {/* Submit & Cancel */}
          <div className='button-group'>
            <button type='button' className='cancel-btn'>
              Cancel
            </button>
            <button type='submit' className='submit-btn'>
              Submit Recipe
            </button>
          </div>
        </form>

      </div>
      <Footer />
    </div>
  );
};

export default RecipeForm;
