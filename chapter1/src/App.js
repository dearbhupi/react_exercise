import React from 'react';
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Example for useState</h1>
      <form>
        {/* Added type="button" here */}
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Increase Counter {counter}
        </button>
      </form>
    </div>
  );
}

export default App;