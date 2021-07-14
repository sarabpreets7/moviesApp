import React from 'react'
import ReactDOM from 'react-dom'; 
import "./paginations.css"


class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
         let array = [];
        let length = this.props.totalMovies/5;
        for(let i=0;i<length;i++){
            array.push( <div className="pagination" id={i+1} onClick={(e)=>{
                

               let element=  document.querySelector(".pagination.selected");
               if(element){
                element.classList.remove("selected")
               }
                let el = document.getElementById(e.target.id);
                ReactDOM.findDOMNode(el).classList.add("selected")
                this.props.onChange(i+1);
            }}>
            {i+1}
        </div>);
        }
        
        return(
            
    
            
            [array]
            
        )
    }
    
}
export default Pagination;