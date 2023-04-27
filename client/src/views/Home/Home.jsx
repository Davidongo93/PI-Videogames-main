import styles from './Home.module.css';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect , useState} from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../components/Redux/actions';
import Loader from '../../components/Utils/Loader/Loader';

const Home = () => {
// spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
// dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
<>
  {loading ?(

  <Loader/>
    
  ) : (
    <div className={styles.envelop}>
     <div className={styles.container}>
      <h1 className={styles.title}>Videogames</h1>
      <CardsContainer />
    </div>
    </div>
    )
  }
  </>
  );
};

export default Home;
