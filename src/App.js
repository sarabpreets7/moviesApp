import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/navbar';
import MovieList from './containers/moviesList/moviesList';
import MoviesPage from "./containers/Pages/MoviesPage/moviePage"
import HomePage from './containers/Pages/HomePage/homePage';

function App() {
  return (
    <BrowserRouter>
      
      <Switch>       
        <Route path='/sarabpreets7/moviesApp' exact component={HomePage} />
        <Route path='/sarabpreets7/moviesApp/movies' exact component={MoviesPage} />
        

        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
