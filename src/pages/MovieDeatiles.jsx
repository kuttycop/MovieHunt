import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import backup from "../assets/avatar.png"
import {convertMinitus} from "../utils/Utils.js"
export const MovieDeatiles = () => {
  const params=useParams()
  const [movie,setMovie]=useState([])
  const key=import.meta.env.VITE_API_KEY;
  const image=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:backup;
  const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

    useEffect(()=>{
        async function fetchMovie() {
            fetch(url)
            .then((res)=>res.json())
            .then((jsonData)=>{setMovie(jsonData);console.log(jsonData)});
            
        }
        fetchMovie()
    },[])
    useEffect(()=>{
      document.title=`${movie.title}`
    })
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail"  alt="" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="">{movie.overview}</p>

          {movie.genres?<p className="d-flex gap-3">
            {movie.genres.map((gener)=>(
              <span key={gener.id} className="badge bg-danger">{gener.name}</span>
            ))}
          </p>:("")}

          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i>{movie.vote_average}|  
            <i className="bi bi-people-fill text-success"></i>{movie.vote_count}reviews
          </p>

          <table className="table table-border w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinitus(movie.runtime)}</td>
              </tr>
              <tr>
                <th>revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{movie.status}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
              <tr>
                <th>Popularity</th>
                <td>{movie.popularity}</td>
              </tr>
              <tr>
                <th>Language</th>
                <td>{movie.original_language}</td>
              </tr>
            </tbody>
          </table>

          <a className="btn btn-warning" target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>View in IMDB</a>
        </div>
      </div>
    </main>
  )
}