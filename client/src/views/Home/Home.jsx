import styles from './Home.module.css';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../components/Redux/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Videogames</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
