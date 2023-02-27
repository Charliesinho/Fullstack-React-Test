import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form({heading, name2, skill2, power2, isCovidInmmune2, sexuality2, id, isUpdating}) {
const [name, setName] = useState(isUpdating ? name2 : '')
const [skill, setSkill] = useState(isUpdating ? skill2 : '')
const [power, setPower] = useState(isUpdating ? power2 : 0)
const [isCovidInmmune, setIsCovidInmmune] = useState(isUpdating ? isCovidInmmune2 : false)
const [sexuality, setSexuality] = useState(isUpdating ? sexuality2 : '')

const navigate = useNavigate()

const handleSubmit = async event => {
  event.preventDefault()
  try {
    const response = await fetch(
      `http://localhost:5005/api/krylimons${isUpdating ? `/${id}` : ''}`,
      {
        method: isUpdating ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, skill, power, isCovidInmmune, sexuality }),
      }
    )
    if (response.status === 201) {
      const parsed = await response.json()
      navigate(`/krylimons/${parsed._id}`)
    }
    if (response.status === 200) {
      navigate(`/krylimons/${id}`)
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
      <h1>{heading}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Skill
          <input type='text' value={skill} onChange={event => setSkill(event.target.value)} />
        </label>
        <label>
          Power
          <input type='number' value={power} onChange={event => setPower(event.target.value)} />
        </label>
        <label>
        Is Covid Inmmune
          <input type='checkbox' value={isCovidInmmune} onChange={event => setIsCovidInmmune(event.target.checked)} />
        </label>
        <label>
        Sexuality
          <input type='text' value={sexuality} onChange={event => setSexuality(event.target.value)} />
        </label>
        <button type='submit'>{isUpdating ? 'Update' : 'Create'}</button>
      </form>
    </>
  )
}

export default Form