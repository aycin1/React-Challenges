import "./App.css";
import babyNamesData from "./../src/babyNamesData.json";
import react from "react";

function App() {
  function mapBabyNames() {
    return Object.values(babyNamesData).map((baby, i) => {
      return (
        <button
          key={i}
          sex={baby.sex}
          id={baby.id}
          name={baby.name}
          className={colourForSex(baby.sex)}
        >
          {baby.name}
        </button>
      );
    });
  }

  function colourForSex(sex) {
    if (sex === "m") {
      return "m";
    } else if (sex === "f") {
      return "f";
    }
  }

  return (
    <div className="App">
      <div className="babyButtons">{mapBabyNames()}</div>
    </div>
  );
}

export default App;
