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
                <Link className="link" to="/" style={{height:'100%',width:'3.8%',textDecoration: 'none',color:'white',marginLeft:'10px'}}><NavBarButton  onChange={this.props.onChange} text = "Home"></NavBarButton></Link>
                
                <Link to="/movies" style={{height:'100%',width:'5.2%',color:'white', textDecoration: 'none',marginLeft:'10px'}}><NavBarButton onChange={this.props.onChange} text = "Movies"></NavBarButton></Link>
                <NavBarButton onChange={this.props.onChange} text = "About Us"></NavBarButton>
                
            </div>
        )
    }
    
}
export default NavBar