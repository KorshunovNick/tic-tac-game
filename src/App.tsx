import "./App.css";
import { useStore } from "./store/useStore";
import { CgPacman } from "react-icons/cg";
import { PiGhostBold } from "react-icons/pi";
import Game from "./modules/Game";

function App() {
  const { currentMark, winner } = useStore((state) => state);

  return (
    <>
      <h2>winner:{winner}</h2>
      <div>
        currentIcon:
        {currentMark === "X" ? (
          <CgPacman size={35} />
        ) : (
          <PiGhostBold size={35} />
        )}
        <Game />
      </div>
    </>
  );
}

export default App;
