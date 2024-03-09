// src/App.js

import React from 'react';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';

function App() {
    return (
        <div>
            <h1>Game Review Website</h1>
            <GameList />
            <GameDetail gameId={1} />
        </div>
    );
}

export default App;

