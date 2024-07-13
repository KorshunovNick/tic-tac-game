import React from "react";
import Row from "./components/Row/Row";
import { useStore } from "../../store/useStore";

const Game = () => {
  const { fields, reset, winLine } = useStore((state) => state);

  return (
    <>
      <div className="area">
        <Row fields={Object.values(fields).slice(0, 3)} />
        <Row fields={Object.values(fields).slice(3, 6)} />
        <Row fields={Object.values(fields).slice(6, 9)} />
        <div className={`wl r${winLine.join("")}`} />
      </div>

      <button onClick={reset}>reset</button>
    </>
  );
};

export default Game;
