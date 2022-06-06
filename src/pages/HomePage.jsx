/** @format */

import React from "react";
import { requests } from "../api";
import HeroSection from "../components/HeroSection";
import MovieRow from "../components/MovieRow";

function HomePage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <MovieRow id="1" title="Popular" fetchURL={requests.requestPopular} />
      <MovieRow id="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <MovieRow id="3" title="Horror" fetchURL={requests.requestHorror} />
      <MovieRow id="4" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <MovieRow id="5" title="Trending" fetchURL={requests.requestTrending} />
      <MovieRow
        id="6"
        title="Netflix Originals"
        fetchURL={requests.requestNetFlixOriginals}
      />
    </div>
  );
}

export default HomePage;
