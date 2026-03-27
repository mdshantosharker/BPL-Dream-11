import React, { use } from "react";
import AvailablePlayers from "../../AvailablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);
  console.log(players);
  return (
    <div className="container mx-auto">
      <h1>Player :{players.length}</h1>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
