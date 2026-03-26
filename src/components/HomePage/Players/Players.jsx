import React, { use } from "react";

const Players = ({ playerPromise }) => {
  // console.log(playerPromise);
  const data = use(playerPromise);
  console.log(data);
  return (
    <div>
      <h1>Player </h1>
    </div>
  );
};

export default Players;
