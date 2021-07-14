import React from 'react'
import "./sideBarButtons.css"

class SideBarButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id={this.props.text} onClick={(e)=>{this.props.onChange(e.target.innerText);
             }} className="sidebar-button">
                {this.props.text}
            </div>
        )
    }
    
}
export default SideBarButton