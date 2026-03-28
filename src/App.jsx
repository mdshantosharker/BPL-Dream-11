import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/HomePage/Banner/Banner";
import Players from "./components/HomePage/Players/Players";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(5000000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner />
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Players setCoin={setCoin} playerPromise={playerPromise} coin={coin} />
      </Suspense>
      <ToastContainer />;
    </>
  );
}

export default App;
