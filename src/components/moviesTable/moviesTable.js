import React from 'react'
import "./moviesTable.css"
import MovieTableRow from '../movieTableRow/movieTableRow';
import Pagination from '../paginations/paginations';
import Rating from '../rating/rating';
class MovieTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let movies = this.props.movies
        let List = [];
        
        for(let i in movies){
            List.push(<MovieTableRow idx={parseInt(i)} data={this.props.movies[i]}/>)
        }
        return(
            <div>
            <div className="movies-table">
                <div className="tablehead">
                    <div className="rowcol column">S.NO</div>
                    <div className="rowcol column">Movie Name</div>
                    <div className="rowcol column">Genre</div>
                    <div className="rowcol column">Trailer</div>
                    <div className="rowcol column">Rating</div>
                </div>
                {List}
                
                
            </div>
            <div className="paginations">
                
                <img className="left-arrow" onClick={this.props.left} src="data:image/png;base64,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"/>
                    <Pagination totalMovies={this.props.totalMovies} onChange={this.props.onChange}></Pagination>
                    <img className="right-arrow" onClick={this.props.right} src="data:image/png;base64,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"/>
                    

                </div>
                </div>
            
        )
    }
    
}
export default MovieTable