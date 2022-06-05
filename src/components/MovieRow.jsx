/** @format */

import { useEffect, useState } from "react";
import axios from "axios";

import Row from "./Row";

function MovieRow({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);
  return (
    <div className="h-full">
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div>
        <div className="flex">
          {movies.map((d) => (
            <Row data={d}></Row>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
