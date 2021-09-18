import React from 'react'
import { useState } from 'react'

export const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('')

  const onInputChange = (e) => {
    setTerm(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    onTermSubmit(term)
  }

  return (
    <div className="ui segment" style={{ marginTop: '10px' }}>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search Videos</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  )
}

