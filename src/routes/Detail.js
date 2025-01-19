import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const [item, setItem] = useState(null); // 상태로 변경
  const { id } = useParams();
  // const [url, setUrl] = useState(null); // URL 상태 추가

  // useEffect(() => {
  //   if (id) {
  //     setUrl(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
  //   }
  // }, [id]);

  useEffect(() => {
    const getMovie = async () => {
      const {
        data: { movie },
      } = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(movie);
      setItem(movie);
    };

    getMovie();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="content">
        <h1>{item.title}</h1>
        <img src={item.medium_cover_image} alt={item.title} />
        <p>
          Description_intro :
          {item.description_intro || "No description available."}
        </p>
        <p>Genres: {item.genres.join(", ")}</p>
        <p>Rating: {item.rating}</p>
        <p>Runtime: {item.runtime} minutes</p>
      </div>
    </div>
  );
}

export default Detail;
