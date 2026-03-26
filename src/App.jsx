import { Suspense } from "react";
import "./App.css";
import Banner from "./components/HomePage/Banner/Banner";
import Players from "./components/HomePage/Players/Players";
import Navbar from "./components/Navbar/Navbar";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Players playerPromise={playerPromise} />
      </Suspense>
    </>
  );
}

export default App;
