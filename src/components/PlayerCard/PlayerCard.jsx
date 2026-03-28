import React, { useState } from "react";
import { FaFlag } from "react-icons/fa";

const PlayerCard = ({ player, setCoin, coin }) => {
  console.log(player);
  console.log(coin);
  const [isSelected, setIsSelected] = useState(false);

  const handleChoose = () => {
    let newCoin = coin - player.biddingPrice;
    if (newCoin >= 0) {
      setCoin(coin - player.biddingPrice);
    } else {
      alert("Not enough coin to purchase this player");
      return;
    }

    alert(`${player.name} is selected`);
    setIsSelected(true);
  };
  return (
    <div className="card bg-base-100  shadow-2xl border-2 border-blue-100 ">
      <figure className="px-10 pt-10">
        <img
          className="w-150 h-64 rounded-2xl"
          src={player.image}
          alt="players"
        />
      </figure>
      <div className="card-body ">
        <div className="flex gap-5">
          <img src="/public/photos/Group.png" alt="" />
          <h2 className="card-title"></h2>
        </div>

        <div className="flex justify-between items-center border-b border-gray-300 ">
          <div className="flex gap-2 items-center mb-3">
            <FaFlag color="gray" />
            <p className="text-gray-500">{player.country}</p>
          </div>
          <button className="btn border-none mb-3">All-Rounder</button>
        </div>
        <div>
          <h1 className="text-[24px] font-bold">Rating</h1>
          <div className="flex justify-between items-center mb-3 mt-3">
            <h1 className="text-[16px] font-semibold">{player.battingType}</h1>
            <h1 className="text-[16px] font-semibold text-gray-400">
              {player.bowlingType}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-[16px] font-semibold">
              Price : $ {player.biddingPrice}
            </h1>
            <button
              disabled={isSelected}
              onClick={() => {
                handleChoose();
              }}
              className={`btn hover:bg-[#E7FE29]  `}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
