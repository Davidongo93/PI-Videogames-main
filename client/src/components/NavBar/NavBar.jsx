import { Link } from "react-router-dom/cjs/react-router-dom";
import style from "./NavBar.module.css";

const NavBar = ()=>{
    return (
        <div className={style.Container}>
            <Link to="/home">Home</Link>
            <Link to="/create">New Videogame</Link>
        </div>
    )
}

export default NavBar;
