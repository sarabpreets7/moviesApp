import React from 'react'
import "./sideBar.css"
import SideBarButton from '../sideBarButtons/sideBarButtons';
class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="sidebar">
                <SideBarButton onChange={this.props.onChange} text="All Genre" ></SideBarButton>
                <SideBarButton onChange={this.props.onChange} text="Action"></SideBarButton>
                <SideBarButton onChange={this.props.onChange} text="Thriller"></SideBarButton>
                <SideBarButton onChange={this.props.onChange} text="Fictional"></SideBarButton>
                <SideBarButton onChange={this.props.onChange} text="Sci-fi"></SideBarButton>
                <SideBarButton onChange={this.props.onChange} text="Comedy"></SideBarButton>
                <SideBarButton onChange={this.props.onChange} text="Drama"></SideBarButton>
                
            </div>
        )
    }
    
}
export default SideBar