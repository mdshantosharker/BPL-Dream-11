import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({
  selectedPlayers,
  setIsSelectedPlayers,
  coin,
  setCoin,
}) => {
  console.log(selectedPlayers);

  const handleDeleteSelectedPlayer = (player) => {
    console.log(player);

    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.name !== player.name,
    );

    setIsSelectedPlayers(filteredPlayers);
    setCoin(coin + player.biddingPrice);
  };

  return (
    <div className="flex flex-col gap-5">
      {selectedPlayers.length === 0 ? (
        <div className="h-100 flex items-center justify-center flex-col">
          <h2>No players selected yet</h2>
          <p>Go to Available tab to selected players</p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => (
          <div
            key={index}
            className="flex items-center gap-6 justify-between p-4 rounded-2xl border border-gray-200"
          >
            <div className="flex gap-4 items-center">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={player.image}
                alt={player.name}
              />
              <div>
                <h2 className="font-bold text-lg">{player.name}</h2>
                <p className="text-gray-500">
                  {player.battingType} / {player.bowlingType}
                </p>
              </div>
            </div>
            <button
              className="btn btn-error"
              onClick={() => handleDeleteSelectedPlayer(player)}
            >
              <MdDelete size={24} />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
