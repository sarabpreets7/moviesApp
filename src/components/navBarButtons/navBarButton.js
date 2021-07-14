import React from 'react'
import "./navBarButton.css"

class NavBarButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id={this.props.text}  className="navbar-button">
                {this.props.text}
            </div>
        )
    }
    
}
export default NavBarButton