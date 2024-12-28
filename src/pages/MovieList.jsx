import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/usefetch";

export const MovieList = ({title, apiPath}) => {

  const {data:movies}=useFetch(apiPath)
  useEffect(()=>{
    document.title=title;
  });
  const navigator=useNavigate()
  return (
    <div>
      <main className="container">
        {title=="Your Guided to Great Movies" ? (
          <div className="bg-body-tertiary p-3 border mb-3">
          <h4 className="text-primary">Welcome to MovieHunt</h4>
          <p className="lead">Discover movies you&apos;ll love with personlized suggestions, curated collections, and quick to finding great films</p>
          <button className="btn btn-primary" onClick={()=>{navigator("/movies/upcoming")}}>Explore Now</button>
        </div>
      ) : (
        ""
      )}
        <h5 className="text-danger py-2 border-bottom">{title}</h5>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.map((movie)=>{
            return <Card key={movie.id} movie={movie} />
          })}
        </div>
      </main>
    </div>
  )
}