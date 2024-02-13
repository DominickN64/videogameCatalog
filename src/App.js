import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchIcon from "./searchIcon.svg";
import GameCard from "./GameCard";

const App = () => {
  //declare useState hooks
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState();

  //fetch api data
  const searchGames = async (gameName) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=3a6b92cff7bc48a7a66a3f5c492de738&search=${gameName}`
    );
    const data = await response.json();
    const gamelist = data.results;
    setGames(gamelist);
  };

  //load games on screen when website is loaded/refreshed
  useEffect(() => {
    searchGames("");
  }, []);

  return (
    <div>
      <h1 className="display-3 text-primary text-center my-4 py-2 ">
        Game Catalog
      </h1>

      <div className="search">
        <input
          placeholder="Search"
          value={gameName}
          onChange={(e) => {
            setGameName(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            if (gameName === "") {
              searchGames("");
            } else {
              searchGames(gameName);
            }
          }}
        />
      </div>

      {games?.length > 0 ? (
        <div className="container">
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No games found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
