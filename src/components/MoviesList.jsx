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
            width: 500px;
            height: 250px;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0px 0px 40px 0px rgba(145, 124, 124, 0.25);
            color: black;
            display: flex;
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
                margin-left: 30px;
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
              justify-content: center;
              margin-left: 50px;
              gap: 5px;
            `}
          >
            <div>Title: {title}</div>
            <div>Year: {year}</div>
            <div>Runtime:{runtime}</div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              Genres:{" "}
              {genres.map((item) => {
                return (
                  <p
                    css={css`
                      margin-left: 8px;
                      background-color: #eaac99;
                      border-radius: 10px;
                      padding: 3px;
                    `}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div>IMDB Rating: {imdbRating}</div>
            <div>IMDB Votes: {imdbVotes}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
