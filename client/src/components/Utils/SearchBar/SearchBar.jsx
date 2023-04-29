 import styles from './SearchBar.module.css';
 
 const SearchBar = () => {

    return(
        <div className={styles.container}> 
        <form>
        <input type="search" placeholder="Search..."></input>
        <button type="submit" className={styles.button}>go</button>
        </form>
        </div>
    )
}

export default SearchBar;