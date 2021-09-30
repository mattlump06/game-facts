import React from "react";
import ReactDOM from "react-dom";
import { games } from '../data/GamesList'

const title = "";

const showBackground = false;

const background = (
    <img 
        className='background'
        alt='solid'
        src='/images/gray-bg.jpg'
    />
);

const images = [];

for(const game in games) {
    images.push(
        <img
        key={game} 
        className='Game'
        alt={game}
        src={games[game].image}
        aria-label={game}
        role='button'
        onClick={displayFact}
        />
    )
}

function displayFact(e) {
    const selectedGame = e.target.alt;
    const gameInfo = games[selectedGame];
    const optionIndex = Math.floor(Math.random() * gameInfo.overview.length);

    const game_info = gameInfo.overview[optionIndex];
    document.getElementById('game').innerHTML = game_info
}



function Game() {
    return (
        <div>
              <h1>
            {title === '' ? 'Click a Game title for an Overview' : title}
        </h1>
        {showBackground && background}
        <p id= 'game'></p>
        <div className= 'games'>
            {images}
        </div>
            
        </div>
    )
}



// const gameFacts = (
//     <div>
//         <h1>
//             {title === '' ? 'Click a Game title for an Overview' : title}
//         </h1>
//         {showBackground && background}
//         <p id= 'game'></p>
//         <div className= 'games'>
//             {images}
//         </div>
        
//     </div>
// );

// ReactDOM.render(gameFacts, document.getElementById('root'))

export default Game;