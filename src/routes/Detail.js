import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail () {
    const {id} = useParams();
    console.log(id);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    };
    useEffect(()=>{getMovie()},[]);
    return <h1>Detail {id}</h1>;
}

export default Detail;