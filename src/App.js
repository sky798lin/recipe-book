import { useState } from "react"
import Header from "./components/Header"
import Recipe from "./components/Recipes"
import Button from "./components/Button"
import AddRecipe from "./components/AddRecipe"

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

  const [showModal, setShowModal] = useState(false)

  const handleAddRecipe = (recipe) => {
    const id = Math.floor(Math.random() * 10000)+1
    const newRecipe = {id, ...recipe}
    setRecipes(...recipes, newRecipe)
    setShowModal(false)
  }

  return (
    <div className="container">
      <Header />
      <Button color ='green' text='Add' onClick={() => setShowModal(true)} />
      {showModal && (
        <div style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div style={{ background: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px' }}>
            <AddRecipe onAddRecipe={handleAddRecipe} />
            <button type="button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
      {recipes.length > 0 ? 
        (<Recipe recipes={recipes} onDelete ={deleteRecipe} />) 
        : ('Add a recipe')
      }
    </div>
  );
}

export default App;
