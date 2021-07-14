import React from 'react'
import "./movie.css"

class Movie extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className="movie-div">
                <div className="movie-image">
                    <img src={this.props.img}/>
                </div>
                <div className="movie-desc">
                    <div className="movie-title">{this.props.title}</div>
                    <div className="description">
                    {this.props.desc}
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Movie