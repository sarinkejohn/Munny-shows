const key = import.meta.env.VITE_TMDB_API_ACCESS;
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular/?api_key=${key}&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&sort_by=popularity.desc`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&sort_by=popularity.desc`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming/?api_key=${key}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc`
};
export default requests;
