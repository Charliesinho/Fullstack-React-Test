import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/Form'

function UpdateKrylimon() {

  const { Id } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [krylimon, setKrylimon] = useState()

  const fetchKrylimon = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/krylimons/${Id}`)
      const parsed = await response.json()
      setKrylimon(parsed)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchKrylimon()
  }, [Id])


  return (
    isLoading ? (
      <h1>Loading...</h1>
    ) :
    (
      <Form 
      heading="Update"
        name2={krylimon.name}
        skill2={krylimon.skill}
        power2={krylimon.power}
        isCovidInmmune2={krylimon.isCovidInmmune}
        sexuality2={krylimon.sexuality}
        id={Id}
        isUpdating
      />
    )
  )
}

export default UpdateKrylimon