import React from 'react';
import { useState, useEffect } from 'react';

function UseEffectEx() {
    const [playerDied, setplayerDied] = useState(0);
    const [playerScored, setplayerScored] = useState(0);

    function startNewGame(){
        console.log("Game Started");
    }

    /**
     * Tracks the lifecycle and state alterations of the gameplay loop.
     * * PURPOSE:
     * This hook manages the side effect of resetting/initializing a game session.
     * Because 'playerDied' is passed in the dependency array, this effect will
     * execute automatically on the initial component mount and sub-sequentially
     * every single time the 'playerDied' counter increments.
     * * It deliberately ignores changes to 'playerScored', ensuring scoring points
     * does not accidentally restart the game cycle.
     */
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

/*
1. The Core Purpose of this Specific Hook
In your code, the purpose of this useEffect is to synchronize an external game state engine 
(startNewGame()) with your component's internal state data. It acts as an automatic listener.
 Instead of you manually tying a restart function to multiple different buttons or triggers
  across your app, useEffect constantly watches your data and runs your logic the exact
   moment your conditions are met.

2. The Mechanics of the Dependency Array [playerDied]
The array passed as the second argument controls exactly when the effect is allowed to 
wake up. Here is how React evaluates it:

On Mount (First Load): The component renders for the first time. React looks at the
 useEffect, says "I have to run this at least once," and calls startNewGame().

Clicking "Player Died": This changes the state of playerDied (e.g., from 0 to 1). 
React re-renders the component, notices that playerDied is different than it was on 
the last render, and fires the effect again.

Clicking "Player Scored": This changes the state of playerScored. React re-renders 
the component. It checks the useEffect dependency array, sees only [playerDied], 
and realizes playerDied hasn't changed. React skips running the effect.

Why can't we just call startNewGame() directly inside the component?
If you were to remove the useEffect wrapper and just write startNewGame(); raw inside 
the function body, it would execute on every single state change, button click, or 
parent re-render. Your game would accidentally restart when a player scores points, 
completely breaking the game loop! useEffect gives you the precise remote control over your logic.*/