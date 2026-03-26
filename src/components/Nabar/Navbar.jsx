import React from "react";
import dollarImg from "../../assets/Currency.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
          <button>0 Coins</button>
          <img src={dollarImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
