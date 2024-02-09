import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import GameCard from "./GameCard";




const App = () => {

  

    const [games, setGames] = useState([]);
    const [gameName, setGameName] = useState();



    const searchGames = async (gameName) => {
        const response = await fetch(`https://api.rawg.io/api/games?key=3a6b92cff7bc48a7a66a3f5c492de738&search=${gameName}`)
        const data = await response.json();
        const gamelist = data.results;
        setGames(gamelist);
        
        
    }
    

    useEffect(() => {
       searchGames("")
   }, []);

  

    return (

        <div>
            <h1>GameStop</h1>

            <div className="search">
                <input
                    placeholder="Search for Games"
                    value={gameName}
                    onChange={(e) => {setGameName(e.target.value)  }}
                />
                <img
                   src={SearchIcon}
                    alt="search"
                    onClick={() => {searchGames(gameName) }}
                />
            </div>
    
            {
                games?.length > 0
                    ? (
                        <div className="container">
                        {games.map((game) => <GameCard game={game} />)}
                        </div>
                    ) :
                    (
                       <div className="empty">
                            <h2>No games found</h2>

                        </div>

                    )

                    }




        </div >


        );
                  };
                  

export default App;


