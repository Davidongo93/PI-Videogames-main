import {useSelector,useDispatch} from "react-redux";
import { useEffect, useState} from 'react';
import { getVideogame } from '../../components/Redux/actions';
import { useParams } from "react-router-dom";
import Loader from '../../components/Utils/Loader/Loader.jsx';



const Detail =()=>{

    //spinner
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

    const { id } = useParams();
    const dispatch = useDispatch();
     useEffect(() => {
     dispatch(getVideogame(id));
    }, [dispatch,id]);

    const  videoGame = useSelector(state=>state.videoGame)
    console.log(videoGame);


    return(
<>
     {loading ?(

<Loader/>
  
) : (
    <>
        <h1>{`${videoGame.name} Details`}</h1>
        <article className="description"
                dangerouslySetInnerHTML={{ __html: videoGame.description }}>
               </article>
        <h2>Platforms</h2>
         {videoGame.platformsName && videoGame.platformsName.length > 0 && (
        <ul>
         {videoGame.platformsName.map((el) => (<li key={el}>{el}</li>))}
        </ul>
        
)}

       
        
    </>
    )
}
</>
    )
}

export default Detail;