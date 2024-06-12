const API_KEY = process.env.TMDB_KEY;

export const getMovies = async (type) => {
  const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;

  const res = await fetch(URL);
  if(!res.ok){
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
}