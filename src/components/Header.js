import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import AddRecipe from './AddRecipe'

const Header = ({ title }) => {
  const [showModal, setShowModal] = useState(false)

  const handleAddRecipe = recipe => {
    console.log(recipe)
    setShowModal(false)
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
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
    </header>
  )
}

Header.defaultProps = {
  title: 'Recipe Book',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header