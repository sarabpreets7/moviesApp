import React from 'react'
import "./movieTableRow.css"
import Rating from '../rating/rating';
import Trailer from '../trailer/trailer';
class MovieTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let {sno,name,genre,rating} = this.props.data;
        let i = parseInt(this.props.idx)+1
        return(
            <div className="movieTableRow">
                <div className="rowcol column">{sno}</div>
                <div className="rowcol column">{name}</div>
                <div className="rowcol column">{genre}</div>
                <div className="rowcol column"><Trailer link={this.props.data.trailer}/></div>
                <div className="rowcol column stars" id="star"><Rating stars={rating}></Rating></div>
            </div>
        )
    }
    
}
export default MovieTableRow