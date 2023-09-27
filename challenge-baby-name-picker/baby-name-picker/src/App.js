import "./App.css";
import babyNamesData from "./../src/babyNamesData.json";
import react, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [babyNames, setBabyNames] = useState(babyNamesData);

  useEffect(() => {
    refineSearch(input);
  }, [input]);

  function mapBabyNames() {
    return Object.values(babyNames).map((baby, i) => {
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

  function searchBar() {
    return (
      <input
        placeholder="Enter name here"
        onChange={handleChange}
        type="text"
      ></input>
    );
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function refineSearch() {
    const filteredNames = Object.values(babyNamesData).filter(checkInput);
    return setBabyNames(filteredNames);
  }

  function checkInput(baby) {
    const isIncluded = baby.name.toLowerCase().includes(input);
    return isIncluded;
  }

  return (
    <div className="App">
      <div className="searchBar">{searchBar()}</div>
      <div className="babyButtons">{mapBabyNames()}</div>
    </div>
  );
}

export default App;
