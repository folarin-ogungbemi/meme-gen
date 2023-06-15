import React from "react"
import Header from "./components/Header";
import Meme from "./components/Meme"
import ThingsArray from "./components/ThingsArray";
import Count from "./components/Count"
import Boxes from "./component/Boxes"
import Box from ".component/Box";

function App() {

  const [squares, setSquares] = React.useState(Boxes)

  function toggle(id){
      setSquares(prevSquares => {
            

            // IMPERATIVE METHOD

            // const newSquares = []
            // for(let i = 0; i < prevSquares.length; i++) {
            //     const currentSquare = prevSquares[i]
            //     if(currentSquare.id === id) {
            //         const updatedSquare = {
            //             ...currentSquare,
            //             on: !currentSquare.on
            //         }
            //         newSquares.push(updatedSquare)
            //     } else {
            //         newSquares.push(currentSquare)
            //     }
            // }
            // return newSquares

            // DECLARIVE METHOD WHICH IS MORE OF REACTS WAY

            return prevSquares.map((square) => {
              return square.id === id ? {...square, on: !square.on} : square
              })
          })
    }

  const squareElement = squares.map(square => (
      <Box 
        key={square.id}
        on={square.on}
        // id={square.id}
        // toggle={toggle}
        
        // alternative to above
        toggle={() => toggle(square.id)}
         />
  ))

  const [count, setCount] = React.useState(0)

  const subtract = () => {
    setCount(prevState => prevState - 1)
  }

  const add = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <div className="App">
      <Header />
      <Meme />
      {squareElement}
      <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
      <ThingsArray />
    </div>
  );
}

export default App;
