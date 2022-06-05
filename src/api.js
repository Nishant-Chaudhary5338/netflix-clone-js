/** @format */

const API_KEY = "041e057ac9a992f18acc2fef4615e268";
export const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-IN&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-IN&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-IN&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-IN&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-IN&page=1`,
};

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
export const POSTER_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
