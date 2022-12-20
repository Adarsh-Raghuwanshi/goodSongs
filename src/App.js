import "./styles.css";
import data from "./data.json";
import { useState } from "react";

export default function App() {
  let singersGenres = Object.keys(data);
  let [selectedGenre, setSelectedGenre] = useState(singersGenres[0]);

  function genresClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1 className="heading">goodMusic</h1>
      <p className="sub-heading">
        Music is to the soul what words are to the mind. Checkout my favorite
        singers from different genres. Select a genre to get started -
      </p>
      <div className="section-header">
        {singersGenres.map((genre) => (
          <span key={genre} onClick={() => genresClickHandler(genre)}>
            {genre}
          </span>
        ))}
      </div>
      <div className="section-body">
        {data[selectedGenre].map((singers) => {
          return (
            <div key={singers.name} className="container">
              <h3>
                {singers.name}
                <p>
                  <span>⭐</span>
                  {singers.Rating}
                </p>
              </h3>
              <div>
                <h5>Hit Songs:</h5>
                {singers.Songs.map((song) => {
                  return <p key={song}>{song}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className="container">
          <h3>
            Yo Yo Honey Singh
            <p>
              <span>⭐</span>4.5/5
            </p>
          </h3>
          <div>
            <h5>Hit Songs:</h5>
            <p>Love Dose,</p>
            <p>Sunny Sunny,</p>
            <p>Lungi Dance</p>
          </div>
</div> */
}
