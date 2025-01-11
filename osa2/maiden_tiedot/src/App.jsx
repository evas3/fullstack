import { useState, useEffect } from 'react'
import { Filter } from "./Filter"
import { Countries } from "./Countries"
import countryservice from './services/country_list'

function App() {
  const [countries, setCountries] = useState([])
  const [newCountry, setCountry] = useState("")
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
      countryservice
        .getCountries()
        .then(response => {
          setCountries(response)
        })
    }, [])
    
  return (
      <div>
        <Filter country = {newCountry} setCountry = {setCountry} setShowResults = {setShowResults}/>
        <Countries showResults = {showResults} countries = {countries} newCountry = {newCountry}/>
      </div>
  )
  }

export default App
