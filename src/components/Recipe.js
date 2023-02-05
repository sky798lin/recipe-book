import {FaTimes} from 'react-icons/fa'

const Recipe = ({recipe, onDelete}) => {
  return (
    <div className='recipe'>
        <h3>
            {recipe.title} 
            <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(recipe.id)} />
        </h3>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient.ingredient}>
              {ingredient.ingredient}: {ingredient.quantity}
            </li>
          ))}
        </ul>
        <h4>Direcitons:</h4>
        <p>{recipe.directions}</p>
    </div>
  )
}

export default Recipe