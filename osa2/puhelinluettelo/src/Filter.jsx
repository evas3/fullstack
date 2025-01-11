const Filter = ({newFilter, setShowAll, setNewFilter}) => {
    const filtere = (event) => {
        event.preventDefault()
        if (newFilter === "") {
          setShowAll(true)
          return;
        }
        setShowAll(false)
      }

    return (
        <form onSubmit={filtere}>
        <div>
          filter shown with <input value={newFilter}
            onChange={a => setNewFilter(a.target.value)}
            />
        </div>
      </form>
    )
}

export { Filter };