import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import NavBarButton from '../navBarButtons/navBarButton';
class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="navbar">
                <img  src="https://w7.pngwing.com/pngs/970/565/png-transparent-movie-projector-film-cinema-cine-angle-photography-logo.png"/>
                <Link className="link" to="/sarabpreets7/moviesApp" style={{height:'100%',textDecoration: 'none',color:'white'}}><NavBarButton  onChange={this.props.onChange} text = "Home"></NavBarButton></Link>
                
                <Link className="link" to="/sarabpreets7/moviesApp/movies" style={{height:'100%',color:'white', textDecoration: 'none'}}><NavBarButton onChange={this.props.onChange} text = "Movies"></NavBarButton></Link>
                <NavBarButton onChange={this.props.onChange} text = "About Us"></NavBarButton>

                <div className="title">MOVIES APP</div>
                
            </div>
        )
    }
    
}
export default NavBar