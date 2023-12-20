import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MovieList />
        {/* Render Movie Lists Here */}
      </section>
    </div>
  );
}

export default App;
