import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [intervalId, setIntervalId] = useState(null); 

  const startHandler = () => {
    if (!isRunning) {
      setIsRunning(true);
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(interval);
    }
  };

  const stopHandler = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0); 
    clearInterval(intervalId); 
  };

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
