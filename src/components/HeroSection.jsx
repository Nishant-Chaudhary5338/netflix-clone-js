/** @format */
import { useEffect, useState } from "react";
import Button from "./Button";
import { requests } from "../api";
import { IMG_BASE_URL } from "../api";
import axios from "axios";

function HeroSection() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);
  const truncateString = () => (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full h-full">
          <img
            className="w-full object-contain h-full"
            src={IMG_BASE_URL + `${movie?.backdrop_path}`}
            alt=""
          />
          <div className="absolute p-4 space-y-4 top-20 sm:top-32 md:top-40 lg:top-60 xl:top-80 left-0">
            <h2 className="text-white font-semibold text-3xl">
              {movie?.title}
            </h2>
            <div className="space-x-4">
              <Button theme="white">Play</Button>
              <Button theme="secondary">Watch later</Button>
            </div>
            <p className=" font-medium text-gray-200 text-md">
              Released- {movie?.release_date}
            </p>
            <p className="font-medium hidden sm:block text-gray-200 text-md">
              {movie?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
