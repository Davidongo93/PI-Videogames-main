import { Link } from "react-router-dom/cjs/react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../Utils/SearchBar/SearchBar.jsx";

const NavBar = ()=>{
    return (
        <div className={style.envelop}>
        <div className={style.Container}>
            <SearchBar className={style.SearchBar}/>
            <Link to="/home">
                <button className={style.button}>Home</button>
                </Link>
                <div></div>
            <Link to="/create">
                <button className={style.button}>Create Videogame</button>
            </Link>
            
    <button>sortAZ</button>
        </div>
        </div>
    )
}

export default NavBar;
