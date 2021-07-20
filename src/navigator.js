import {Component} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import HomePage from "./containers/Pages/HomePage/homePage";
import MoviesPage from "./containers/Pages/MoviesPage/moviePage";

class Navigator extends Component {
    render() {
        return(
            <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage}></Route>
                <Route path="/movies" exact component={MoviesPage}></Route>
                
                
            </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigator;