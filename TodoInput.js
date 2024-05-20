import React, { useState } from 'react'

function TodoInput({ addList, editing }) {
  const [inputText, setInputText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleAddItem = () => {
    if (inputText !== '') {
      addList(inputText)
      setInputText('')
    }
  }

  const handleCancel = () => {
    setInputText('')
    editing(false)
  }

  return (
    <div className="input-container">
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
      {editing && <button onClick={handleCancel}>Cancel</button>}
    </div>
  )
}

export default TodoInput