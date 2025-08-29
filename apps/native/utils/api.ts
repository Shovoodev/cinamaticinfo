//https://api.themoviedb.org/3/discover/movie
export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.MOVIE_DB_ACCESS_TOKEN,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmEyMzU5ZTkwZmIzZTJiYTg5MzU0Y2JmNmY1ZGRhYiIsIm5iZiI6MTcwMTQyMzYwMC4yNDcsInN1YiI6IjY1NjlhOWYwZDM5OWU2MDBlMTA1NGYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Faa5TY95Cku_fr1TcK6N6KVGQXlJgYL6eTpIbjRe23U",
  },
};

const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch movies: ${response.status} ${response.statusText}`
    );
  }
  const data = await response.json();
  return data.results;
};

export default fetchMovies;

// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmEyMzU5ZTkwZmIzZTJiYTg5MzU0Y2JmNmY1ZGRhYiIsIm5iZiI6MTcwMTQyMzYwMC4yNDcsInN1YiI6IjY1NjlhOWYwZDM5OWU2MDBlMTA1NGYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Faa5TY95Cku_fr1TcK6N6KVGQXlJgYL6eTpIbjRe23U",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
