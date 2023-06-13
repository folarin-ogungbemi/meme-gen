import React from 'react'

const ThingsArray = () => {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    const thingsElements = things.map(thing => <p>{thing}</p>)

    const handleClick = () => {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

  return (
    <div>
        <button onClick={handleClick}>Add Item</button>
        <ol>
            <li>{thingsElements}</li>
        </ol>
    </div>
  )
}

export default ThingsArray