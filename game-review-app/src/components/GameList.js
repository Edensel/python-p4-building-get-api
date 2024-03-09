// src/components/GameList.js

import React, { useState, useEffect } from 'react';

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5555/games")
            .then((r) => r.json())
            .then((games) => setGames(games));
    }, []);

    return (
        <section>
            {games.map((game) => (
                <div key={game.id}>
                    <h2>{game.title}</h2>
                    <p>Genre: {game.genre}</p>
                    <p>Platform: {game.platform}</p>
                    <p>Price: ${game.price}</p>
                </div>
            ))}
        </section>
    );
}

export default GameList;

