// src/components/GameDetail.js

import React, { useState, useEffect } from 'react';

function GameDetail({ gameId }) {
    const [game, setGame] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5555/games/${gameId}`)
            .then((r) => r.json())
            .then((game) => setGame(game));
    }, [gameId]);

    if (!game) return <h2>Loading game data...</h2>;

    return (
        <div>
            <h2>{game.title}</h2>
            <p>Genre: {game.genre}</p>
            <p>Platform: {game.platform}</p>
            <p>Price: ${game.price}</p>
        </div>
    );
}

export default GameDetail;

