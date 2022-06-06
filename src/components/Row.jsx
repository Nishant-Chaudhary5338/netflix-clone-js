/** @format */

import React from "react";
import { POSTER_IMG_BASE_URL } from "../api";

function Row({ data }) {
  return (
    <div className="">
      <div className="w-24 sm:w-36 md:w-44 p-2 lg:w-52 ">
        <img
          onClick={data.onClick}
          className="object-cover h-full hover:scale-105 w-full"
          src={POSTER_IMG_BASE_URL + `${data.poster_path}`}
          alt={data.title}
        />
      </div>
    </div>
  );
}

export default Row;
