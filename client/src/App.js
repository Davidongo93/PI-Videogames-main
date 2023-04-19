import { useLocation } from 'react-router-dom';
import './App.css';
import {Detail, Form, Home, Landing} from './views'
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
    <Route exact path="/" component={Landing}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/detail" component={Detail}/>
    <Route exact path="/create" component={Form}/>
    
      
      
    </div>
  );
}


export default App;
