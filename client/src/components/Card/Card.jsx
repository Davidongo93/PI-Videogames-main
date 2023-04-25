import styles from './Card.module.css';

const Card = (props)=>{
    return(
        <div className={styles.Container}>
            <p className={styles.text}>Title: {props.name}</p>
            <img className={styles.image} src={props.image} alt="" />
            <p className={styles.text}>Release date:{props.released}</p>
            <p className={styles.text}>Rating: {props.rating}</p>
        </div>
    )
};
export default Card; 
