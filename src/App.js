import { useEffect, useState } from "react";
import "./App.css";
import SquareComponent from "./Components/SquareComponent";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [value, setValue] = useState("X");

  useEffect(() => {
    if (value === "X") {
      setValue("O");
    } else {
      setValue("X");
    }

    const winner = checkWinner();
    if (winner) {
      alert(`ta da! The winner is ${winner}`);
      setGameState(initialState);
    }
  }, [gameState]);

  const handleClick = (index) => {
    console.log("Box Clicked!!");
    let strings = Array.from(gameState);
    if (strings[index] === "") {
      strings[index] = value;
      setGameState(strings);
    } else {
      return;
    }
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      <div className="heading-text">Tic-Tac-Toe</div>
      <div className="row jc-center">
        <SquareComponent
          onClick={() => handleClick(0)}
          state={gameState[0]}
          className="b-bottom-right"
        />
        <SquareComponent
          onClick={() => handleClick(1)}
          state={gameState[1]}
          className="b-bottom-right"
        />
        <SquareComponent
          onClick={() => handleClick(2)}
          state={gameState[2]}
          className="b-bottom"
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          onClick={() => handleClick(3)}
          state={gameState[3]}
          className="b-bottom-right"
        />
        <SquareComponent
          onClick={() => handleClick(4)}
          state={gameState[4]}
          className="b-bottom-right"
        />
        <SquareComponent
          onClick={() => handleClick(5)}
          state={gameState[5]}
          className="b-bottom"
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          onClick={() => handleClick(6)}
          state={gameState[6]}
          className="b-right"
        />
        <SquareComponent
          onClick={() => handleClick(7)}
          state={gameState[7]}
          className="b-right"
        />
        <SquareComponent onClick={() => handleClick(8)} state={gameState[8]} />
      </div>
      <button
        className="clear-button"
        onClick={() => setGameState(initialState)}
      >
        Restart
      </button>
    </div>
  );
}

export default App;
