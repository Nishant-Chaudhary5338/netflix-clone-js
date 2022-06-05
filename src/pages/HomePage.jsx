/** @format */

import React from "react";
import { requests } from "../api";
import HeroSection from "../components/HeroSection";
import MovieRow from "../components/MovieRow";

function HomePage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <MovieRow title="Popular" fetchURL={requests.requestPopular} />
      <MovieRow title="Top Rated" fetchURL={requests.requestTopRated} />
      <MovieRow title="Horror" fetchURL={requests.requestHorror} />
      <MovieRow title="Upcoming" fetchURL={requests.requestUpcoming} />
      <MovieRow title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
}

export default HomePage;
