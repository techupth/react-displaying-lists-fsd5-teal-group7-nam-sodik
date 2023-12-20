import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "./data/movies";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movies.map((item) => {
          return (
            <div>
              <MoviesList item={item} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
