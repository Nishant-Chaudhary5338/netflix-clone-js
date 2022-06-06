/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Row";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { POSTER_IMG_BASE_URL } from "../api";

function MovieRow({ title, fetchURL, id }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 1000;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  console.log(trailerUrl);
  return (
    <div className="h-full">
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="items-center relative group flex">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white z-10 left-0 hidden group-hover:block absolute rounded-full"
          size={40}
        />
        <div
          id={"slider" + id}
          className="flex overflow-x-scroll scroll-smooth relative scrollbar-hide whitespace-nowrap"
        >
          {/* {movies.map((movie) => (
            <Row
              onClick={() => handleClick(movie)}
              key={movie.id}
              data={movie}
            ></Row>
         ))}*/}
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="object-cover w-24 sm:w-36 md:w-44 p-2 lg:w-52 hover:scale-105"
              src={POSTER_IMG_BASE_URL + `${movie?.poster_path}`}
              onClick={() => handleClick(movie)}
              alt=""
            />
          ))}
        </div>
        <div>
          {trailerUrl && <YouTube videoID={trailerUrl} opts={opts}></YouTube>}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white absolute right-0 hidden group-hover:block rounded-full"
          size={40}
        />
      </div>
    </div>
  );
}

export default MovieRow;
