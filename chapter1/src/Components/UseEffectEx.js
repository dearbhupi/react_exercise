import React from 'react';
import { useState, useEffect } from 'react';

function UseEffectEx() {
    const [playerDied, setplayerDied] = useState(0);
    const [playerScored, setplayerScored] = useState(0);

    function startNewGame(){
        console.log("Game Started");
    }

    // Notice the standard parentheses () around the hook arguments!
    useEffect(() => {
        startNewGame();
    }, [playerDied]); 

    return (
        <div className="App">
            <h1>Example for useEffect</h1>
            <form>
                <button type="button" onClick={() => setplayerDied(playerDied + 1)}>
                    Player Died {playerDied}
                </button>
                <button type="button" onClick={() => setplayerScored(playerScored + 1)}>
                    Player Scored {playerScored}
                </button>
            </form>
        </div>
    );
}

export default UseEffectEx;
