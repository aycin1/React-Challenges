import "./App.css";
import babyNamesData from "./../src/babyNamesData.json";
import react, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [babyNames, setBabyNames] = useState(babyNamesData);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    refineSearch(input);
  }, [input]);

  function handleClick(e) {
    const newFavorite = e.target;
    return setFavoritesList([newFavorite, ...favoritesList]);
  }

  function mapFavoritesList() {
    return favoritesList.map((baby, i) => {
      return (
        <button
          key={i}
          id={baby.id}
          name={baby.name}
          className={colorForSex(baby.className)}
        >
          {baby.name}
        </button>
      );
    });
  }

  function mapBabyNames() {
    return Object.values(babyNames).map((baby, i) => {
      return (
        <button
          key={i}
          sex={baby.sex}
          id={baby.id}
          name={baby.name}
          className={colorForSex(baby.sex)}
          onClick={(e) => handleClick(e)}
        >
          {baby.name}
        </button>
      );
    });
  }

  function colorForSex(sex) {
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
      <div className="favoritesList">Favorites: {mapFavoritesList()}</div>
      <div className="babyButtons">{mapBabyNames()}</div>
    </div>
  );
}

export default App;
