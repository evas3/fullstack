const Filter = ({newCountry, setCountry, setShowResults}) => {
    const shown = (event) => {
        event.preventDefault()
        if (newCountry === "") {
            setShowResults(false)
        } else {
            setShowResults(true)
        }
    }

    return (
        <form onSubmit={shown}>
            <div>
                filter shown with <input value = {newCountry} onChange = {(e) => setCountry(e.target.value)}/>
            </div>
        </form>
    )
}

export { Filter }