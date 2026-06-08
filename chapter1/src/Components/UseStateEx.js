import React from 'react';
import { useState } from 'react';

function UseStateEx() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <h1>Example for useState</h1>
            <form>
                <button type="button" onClick={() => setCounter(counter + 1)}>
                    Increase Counter {counter}
                </button>
            </form>
        </div>
    );
}

// Clean export statement:
export default UseStateEx;