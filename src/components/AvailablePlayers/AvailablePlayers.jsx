import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ players ,setCoin,coin}) => {
  // console.log(players);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((player, index) => (
          <PlayerCard player={player} coin={coin} setCoin={setCoin} key={index}></PlayerCard>
        ))}
      </div>
    </>

    // -----------------------
  );
};

export default AvailablePlayers;
