import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import "./Home.css";

function Home() {
  const url =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container">
    {loading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
    ) : (
      <div className="movies">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        ))}
      </div>
    )}
  </section>
  );
}

export default Home;
