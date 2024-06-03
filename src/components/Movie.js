import PropTyptes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverIMG,title,summary}) {
    return (
        <div>
          <img src={coverIMG} alt={title}/>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
        </div>
    );
}
Movie.PropTyptes ={
    id:PropTyptes.number.isRequired,
    coverIMG : PropTyptes.string.isRequired,
    title : PropTyptes.string.isRequired,
    summary : PropTyptes.string.isRequired
};
export default Movie;