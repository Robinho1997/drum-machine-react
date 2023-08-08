import DrumPad from "./components/DrumPad";
import data from "./Data/drumData";

function App() {
  const DrumPadElements = data.map((data) => {
    return <DrumPad keyboard={data.key} audio={data.audio} />;
  });

  return <div id="drum-machine">{DrumPadElements}</div>;
}

export default App;
