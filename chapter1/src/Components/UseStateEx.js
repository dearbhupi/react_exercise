
import { useState } from 'react';

function UseStateEx() {
    const [counter, setCounter] = useState(0);

   function handleCounter(){
    const nextCounter = counter + 1;
    console.log("counter is :", nextCounter); // This will print the fresh, updated number!
    setCounter(nextCounter);
};

    return (
        <div className="App">
            <h1>Example for useState</h1>
            <form>
                <button type="button" onClick={handleCounter}>
                    Increase Counter {counter}

                </button>
            
            </form>
        </div>
    );
}

export default UseStateEx;