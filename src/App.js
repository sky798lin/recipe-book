import { useState } from "react"
import Header from "./components/Header"
import Recipe from "./components/Recipes"

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'French Toast',
      ingredients: [
        {ingredient: 'eggs', quantity: '2'},
        {ingredient: 'milk', quantity: '1/4 cup'},
        {ingredient: 'bread', quanity: '4 slices'},
        {ingredient: 'protein powder', quantity: '1 scoop'},
        {ingredient: 'sweetner', quanity: '1 tbsp'},
        {ingredient: 'salt', quanity: 'pinch'}
      ],
      directions: 'Beat eggs with milk in a bowl and dip bread into the mixture. Toast on medium-low heat until golden'
    },
    {
      id: 2,
      title: 'Chipotle chicken',
      ingredients: [
        {ingredient: 'chicken thighs', quantity: '2 lbs'},
        {ingredient: 'chipotle peppers in adobo', quantity: '1 can'},
        {ingredient: 'garlic', quantity: 'spoonful'},
        {ingredient: 'onion', quantity: '1'},
        {ingredient: 'cumin', quantity: '1 tbsp'},
        {ingredient: 'chili powder', quantity: '2 tbsp'},
        {ingredient: 'oregano', quantity: '1 tbsp'},
        {ingredient: 'salt', quantity: '1/2 tbsp'},
        {ingredient: 'pepper', quantity: '1 tbsp'}
      ],
      directions: 'Blend ingredients together and marinate the chicken thighs in the marinade. Pan-fry on med-high heat until cooked through'
    }
  ])

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {recipes.length > 0 ? 
        (<Recipe recipes={recipes} onDelete ={deleteRecipe} />) 
        : ('Add a recipe')
      }
    </div>
  );
}

export default App;
