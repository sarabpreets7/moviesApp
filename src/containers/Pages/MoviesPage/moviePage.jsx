import React from 'react'
import "./moviesPage.css"
import NavBar from '../../../components/navBar/navbar';
import SideBar from '../../../components/sideBar/sidebar';
import ReactDOM from 'react-dom'; 
import MovieList from '../../moviesList/moviesList';
import Movie from '../../../components/movie/movie';
import axios from 'axios';
import { MoviesData } from '../../dataManager';
import Loader from '../../../components/loader/loader';
class MoviesPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
            data: [],
            loader:false
            
            

        }

        
    }
     async componentDidMount() {
        let data = await MoviesData();
        // console.log(JSON.parse(data));
        this.setState({
            data: data,
            loader: false
        });
    }
    render(){
        let movies = this.state.data;
        
     
        
        let list=[];
        
        for(let i=0;i<movies.length;i++){
            list.push(<Movie img={movies[i].image} title={movies[i].name} desc={movies[i].desc}></Movie>)
        }
        return(
           
            <div className="main">
            <div className="box">
                 <div>
                </div><div></div><div></div><div></div><div></div><div>
                </div><div></div><div></div><div></div><div></div></div>
                <NavBar></NavBar>
                {/* <SideBar></SideBar> */}
                <div className="movies-container">
                    {list}
                    </div>
                </div>
            
        )
    }
    
}
export default MoviesPage