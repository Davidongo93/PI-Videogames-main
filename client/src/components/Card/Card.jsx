import styles from './Card.module.css';

const Card = (props)=>{
    return(
        <div className={styles.Container}>
            <p>A single card.</p>
            <p>Title: {props.name}</p>
            <img className={styles.image} src={props.image} alt="" />
            <p>Release date:{props.released}</p>
            <p>Rating: {props.rating}</p>
        </div>
    )
};
export default Card;