import React, { use, useState } from "react";
import AvailablePlayers from "../../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../../SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  const players = use(playerPromise);

  const [selectedPlayers, setIsSelectedPlayers] = useState([]);
  // console.log(players);

  const [selectedType, setSelectedType] = useState("available");
  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between font-bold text-2xl gap-4 items-center mb-5">
        {selectedType === "available" ? (
          <h2>Available Players</h2>
        ) : (
          <h2>
            Selected Players({selectedPlayers.length}/{players.length})
          </h2>
        )}

        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  rounded-r-none`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      <h1>Player :{players.length}</h1>
      {selectedType === "available" ? (
        <AvailablePlayers
          selectedPlayers={selectedPlayers}
          setIsSelectedPlayers={setIsSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
          players={players}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setIsSelectedPlayers={setIsSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        />
      )}
    </div>
  );
};

export default Players;
