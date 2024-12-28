import { Link } from "react-router-dom"
import backup from "../assets/avatar.png"
export const Card = ({movie}) => {
  const {title,poster_path,overview,vote_average,vote_count,id}=movie;

  const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:backup;

  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
      <img src={image} alt="" className="card-img-top" />
      
      <div className="card-body">
        <h5 className="text-overflow-1">{title}</h5>
        <p className="text-overflow-2">{overview}</p>
        <div className="d-flex justify-content-between align-item-center">
          <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>

          <small>
            <i className="bi bi-star-fill text-warning"></i>
            {vote_average} | {vote_count} review
          </small>

        </div>
        </div>
      </div>
    </div>
  )
}

