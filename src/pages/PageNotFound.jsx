import { Link } from "react-router-dom"
import notfound from "../assets/PageNotFound.jpg"
export const PageNotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-item-center">
      <img src={notfound}  alt="" className="img-fluid mx-auto " />
      <p className="text-center">
        <Link to="/" className="btn btn-danger" >Goto Home Page</Link>
      </p>
    </div>
  )
}