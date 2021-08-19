import React from 'react'
import "./trailer.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
class Trailer extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        console.log(this.props.link)
        return(
            <div className="trailer-cont">
                
            <a style={{textDecoration:'none',marginLeft:'0px',height:"95%",width:"100%"}} href={this.props.link} className="trailer">
                <PlayArrowIcon />
                Trailer
            </a>
            </div>
        )
    }
    
}
export default Trailer