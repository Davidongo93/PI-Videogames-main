import { Link } from "react-router-dom/cjs/react-router-dom";
import style from "./NavBar.module.css";

const NavBar = ()=>{
    return (
        <div className={style.envelop}>
        <div className={style.Container}>
            <Link to="/home">
                <button className={style.button}>Home</button>
                </Link>
                <div></div>
            <Link to="/create">
                <button className={style.button}>Create Videogame</button>
            </Link>
        </div>
        </div>
    )
}

export default NavBar;
