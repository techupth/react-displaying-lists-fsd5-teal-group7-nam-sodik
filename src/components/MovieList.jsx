/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";

function MovieList() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div className="movie-detail">
        {movies.map((item) => {
          return (
            <div
              className="movie-card"
              css={css`
                display: flex;
                padding: 15px;
                width: 400px;
                height: 250px;
                box-shadow: 5px 5px 15px #888888;
                background-color: white;
                border-radius: 10px;
                margin-bottom: 15px;
                font-weight: bold;
                color: #181818;
              `}
            >
              <div
                css={css`
                  margin-right: 10px;
                `}
              >
                <img
                  src={item.image}
                  css={css`
                    width: 100px;
                    height: 100px;
                    border-radius: 10px;
                  `}
                />
              </div>
              <div>
                <div>title: {item.title}</div>
                <div>year: {item.year}</div>
                <div>runtime: {item.runtime}</div>
                <div>director: {item.director}</div>
                <div>
                  genres:
                  <div
                    css={css`
                      display: flex;
                      flex-direction: row;
                      gap: 0.5rem;
                    `}
                  >
                    {item.genres.map((type) => {
                      return (
                        <span
                          css={css`
                            display: flex;
                            flex-direction: column;
                            background-color: #eaac99;
                            border-radius: 10px;
                            padding: 0.3rem;
                          `}
                        >
                          {type}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>imdbRating: {item.imdbRating}</div>
                <div>imdbVotes: {item.imdbVotes}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
