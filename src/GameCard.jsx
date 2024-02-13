import React from 'react';


const GameCard = ({ game }) => {
    return (
        <div className="game">
            <div>
                <p>{game.released}</p>
            </div>
            <div>
                <img
                    src={game.background_image || "https://via.placeholder.com/400"}
                    alt={game.name}
                />
            </div>
            <div>
                <span>{game.platforms.map(platform => platform.platform.name).join(', ')}</span>
                <h3>{game.name}</h3>
            </div>
        </div>
    );
};

export default GameCard;