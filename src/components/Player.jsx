import { useRef } from "react";

export default function Player({ currentPlayerName, setPlayerName }) {
  const refPlayerName = useRef();

  function handleSetName() {
    setPlayerName(
      refPlayerName.current.value.trim() ? refPlayerName.current.value : "Gamer"
    );
    refPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {currentPlayerName}</h2>
      <p>
        <input ref={refPlayerName} type="text" />
        <button onClick={handleSetName}>Set Gamer Name</button>
      </p>
    </section>
  );
}
