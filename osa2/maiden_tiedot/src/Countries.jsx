import { useState, useEffect } from "react"

const Countries = ({showResults, countries, newCountry}) => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()))
    const [selected, setSelected] = useState(null)

    const Show = (name) => {
        setSelected(name)
    }

    useEffect(() => {
        setSelected(null)
    }, [newCountry])

    if (selected) {
        const shownCountry = countries.find(country => country.name.common === selected)
        return(
            <div>
                <h1>{shownCountry.name.common}</h1>
                <p>capital {shownCountry.capital}</p>
                <p>area {shownCountry.area}</p>
                <h2>languages:</h2>
                <ul>
                    {Object.keys(shownCountry.languages).map(key =>
                        <li>{shownCountry.languages[key]}</li>
                )}
                </ul>
                <img src={shownCountry.flags.png}></img>
            </div>
        )
    }
    if (showResults && filteredCountries.length <= 10) {
        if (filteredCountries.length === 1) {
            return (filteredCountries.map(country =>
                <div>
                    <h1>{country.name.common}</h1>
                    <p>capital {country.capital}</p>
                    <p>area {country.area}</p>
                    <h2>languages:</h2>
                    <ul>
                        {Object.keys(country.languages).map(key =>
                            <li>{country.languages[key]}</li>
                    )}
                    </ul>
                    <img src={country.flags.png}></img>
                </div>
            )
        )
        }
        return (
            filteredCountries.map(country => 
                <div>
                    <p>{country.name.common} <button onClick={() => Show(country.name.common)}>show</button></p>
                </div>
            )
        )
    } else {
        return(
            <p>Too many matches, spesify another filter</p>
        )
    }
}

export { Countries}