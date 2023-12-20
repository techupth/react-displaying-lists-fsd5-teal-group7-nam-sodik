import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const MoviesList = ({
  item: {
    title,
    year,
    runtime,
    director,
    image,
    genres,
    imdbRating,
    imdbVotes,
  },
}) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        `}
      >
        <div
          css={css`
            width: 400px;
            height: 250px;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0px 0px 40px 0px rgba(145, 124, 124, 0.25);
            color: black;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          `}
        >
          {" "}
          <div>
            <img
              src={image}
              css={css`
                width: 102px;
                height: 100px;
                border-radius: 10px;
              `}
            ></img>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              font-style: normal;
              font-weight: 400;
              width: 231px;
              height: 211px;
              justify-content: center;
            `}
          >
            <div>Title: {title}</div>
            <div>Year: {year}</div>
            <div>Runtime:{runtime}</div>
            <div>Genres: {genres}</div>
            <div>IMDB Rating: {imdbRating}</div>
            <div>IMDB Votes: {imdbVotes}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
