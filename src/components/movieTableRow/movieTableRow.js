import React from 'react'
import "./movieTableRow.css"
import Rating from '../rating/rating';
class MovieTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let {sno,name,genre,rating} = this.props.data;
        return(
            <div className="movieTableRow">
                <div className="rowcol column">{sno}</div>
                <div className="rowcol column">{name}</div>
                <div className="rowcol column">{genre}</div>
                <div className="rowcol column"><Rating stars={rating}></Rating></div>
            </div>
        )
    }
    
}
export default MovieTableRow