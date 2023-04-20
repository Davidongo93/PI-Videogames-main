import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import {useSelector} from "react-redux";

const CardsContainer = ()=>{
    const videoGames = useSelector(state=>state.videoGames)

    return(
        <div className={style.Container}>
            {videoGames.map(videoGames=>{
                return <Card
                id={videoGames.id}
                name={videoGames.name}
                image={videoGames.image}
                released={videoGames.released}
                rating={videoGames.rating}
                />
            })}
        </div>
    )
};
export default CardsContainer;