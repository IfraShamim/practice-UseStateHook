import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 

  const startHandler = () => {
    if (!isRunning) {
      setIsRunning(true);
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increase time by 1 second
      }, 1000);
      // Store the interval ID in the state
      setIntervalId(interval);
    }
  };

  const stopHandler = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId); // Stop the interval
    }
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0); // Reset time to 0
    clearInterval(intervalId); // Stop the interval if running
  };

  const [intervalId, setIntervalId] = useState(null); 

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button onClick={startHandler} disabled={isRunning}>Start</button>
      <button onClick={stopHandler} disabled={!isRunning}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
