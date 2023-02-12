import { useState } from "react"

const AddRecipe = ({onAddRecipe}) => {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState([{ingredient: '', quantity: ''}])
  const [directions, setDirections] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleIngredientsChange = index => event => {
    const newIngredients = [...ingredients]
    newIngredients[index][event.target.name] = event.target.value
    setIngredients(newIngredients)
  }

  const handleAddIngredient = () => {
    setIngredients([...ingredients, {ingredient: '', quantity: ''}])
  }

  const handleRemoveIngredient = index => () => {
    const newIngredients = [...ingredients]
    newIngredients.splice(index, 1)
    setIngredients(newIngredients)
  }

  const handleDirectionsChange = (event) => {
    setDirections(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!title) {
      alert('Please add a recipe')
      return
    }
    onAddRecipe({ title, ingredients, directions });
    setTitle('');
    setIngredients([{ ingredient: '', quantity: '' }]);
    setDirections('');
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label>Recipe Name</label>
          <input type='text' name='title' value={title} onChange={handleTitleChange} />
        </div>
        <div className='form-control'>
          <label>Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <label>Ingredient</label>
              <input type='text' name='ingredient' value={ingredient.ingredient} onChange={handleIngredientsChange(index)} />
              <label>Quantity</label>
              <input type='text' name='quantity' value={ingredient.quantity} onChange={handleIngredientsChange(index)} />
              <button type='button' onClick={handleRemoveIngredient(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type='button' onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
        <div className='form-control'>
            <label>Directions</label>
            <textarea value={directions} onChange={handleDirectionsChange} />
        </div>
        <button type='submit' className='btn btn-block'>Add Recipe</button>
    </form>
  )
}

export default AddRecipe