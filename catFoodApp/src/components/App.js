import '../App.css';
import React, { useState, useEffect } from 'react';
import oriHungry from  "../catImages/oriHungry.jpg"
import sierraHungry from "../catImages/sierraHungry.jpg"
import oriFed from "../catImages/oriFed.jpg"
import sierraFed from "../catImages/sierraFed.jpg"

function App() {
  const [canNumber, setCanNumber] = useState(0);
  const increaseCanNumber24 = () => setCanNumber((previousCanNumber) => previousCanNumber+24)
  const increaseCanNumber32 = () => setCanNumber((previousCanNumber) => previousCanNumber+32)
  const increaseCanNumber40 = () => setCanNumber((previousCanNumber) => previousCanNumber+40)

  let hours = new Date().getHours(); //To get the Current Hours
  let min = new Date().getMinutes(); //To get the Current Minutes
  let sec = new Date().getSeconds(); //To get the Current Seconds
  let convertedToSeconds = sec+(min*60)+(hours*60*60);
  let secondsInTheDay = 86400;

  const [counter, setCounter] = React.useState(secondsInTheDay-convertedToSeconds);
  // const [counter, setCounter] = React.useState(3);
  React.useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    } else {
      const timer = setInterval(() => setCounter(counter + secondsInTheDay), 1000);
      return () => clearInterval(timer), setCanNumber((previousCanNumber) => previousCanNumber-4)
    }
    const timer = 
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const realHours =  Math.floor((counter/60)/60) 
  const realMinutes = Math.floor((counter/60+10)-(counter/60/60+60*(Math.floor(realHours))))

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="catContainer">
            <img 
            className="pictureOfSierra"src={(canNumber>8) ? sierraFed : sierraHungry} 
            alt="picture of Sierra"
            height="300"/>
            <h4 className="catFeelings">{(canNumber>8) ? "Mmmm. Happy Cats." : "We've never been fed ever."}</h4>
            <img className="pictureOfOri" 
            src={(canNumber>8) ? oriFed : oriHungry} 
            alt="picture of Ori"
            height="300"/>
          </div >

          <div className="canCounter">
            <div>
              <a>Cans left: {canNumber} </a>
              <button className="btn" onClick={()=>setCanNumber((previousCanNumber) => previousCanNumber+1)}>+1</button>
              <button className="btn" onClick={()=>setCanNumber((previousCanNumber) => previousCanNumber-1)}>-1</button>
            </div>
            <div>
              <button className="btn"
              onClick={increaseCanNumber24}>Add 24 cans</button>

              <button className="btn"
              onClick={increaseCanNumber32}>Add 32 cans</button>

              <button className="btn"
              onClick={increaseCanNumber40}>Add 40 cans</button>

            </div>

            <div>
              <button className="btn" onClick={()=>setCanNumber((previousCanNumber) => 0)}>Reset can number</button>
            </div>
          </div>

          <div className="countdownToCans">
            <div>Time before can subtraction <br/>
            Hours: {realHours} <br/>
            Minutes: {realMinutes} <br/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
