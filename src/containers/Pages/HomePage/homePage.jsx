import React from 'react'
import "./homePage.css"
import NavBar from '../../../components/navBar/navbar';
import SideBar from '../../../components/sideBar/sidebar';
import MovieTable from '../../../components/moviesTable/moviesTable';
import Pagination from '../../../components/paginations/paginations';
import ReactDOM from 'react-dom'; 
import { MoviesData } from '../../dataManager';
import Loader from '../../../components/loader/loader';
import axios from 'axios';
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search:"",
            data: [],
            pageNumber: 1,
            rating:"all",
            genre: "",
            loader:true
            

        }

        
    }
    async componentDidMount () {
        let data = await MoviesData();
        console.log(data.data);
        this.setState({
            data: data,
            loader: false
        });
    }

     
      changeGenre =(e) =>{
        let el = document.querySelector(".sidebar-button.selected");
        if(el){
            el.classList.remove("selected")
        }
        document.getElementById(e).classList.add("selected");

        this.setState({
            pageNumber:1,
            genre: e
        })
      }
    changeSearch = (e) =>{
        
        this.setState({
            pageNumber:1,
            search: e.target.value,
            
        })
    }
    changePage = (pageNumber) => {
        this.setState({
            
            pageNumber: pageNumber
        });
    }
    changeRating = (e) =>{
        console.log(e.target.value);
        this.setState({
            pageNumber:1,
            rating: e.target.value==="all"?"all":parseInt(e.target.value)
        })
    }
    changePageLeft= ()=>{
        if(this.state.pageNumber!=1){
            let element=  document.querySelector(".pagination.selected");
               if(element){
                element.classList.remove("selected")
               }
                let el = document.getElementById(this.state.pageNumber-1);
                ReactDOM.findDOMNode(el).classList.add("selected")
            this.setState({
                
                pageNumber: this.state.pageNumber -1
            })
        }
    }
    changePageRight= ()=>{
        let element=  document.querySelector(".pagination.selected");
               if(element){
                element.classList.remove("selected")
               }
                let el = document.getElementById(this.state.pageNumber+1);
                ReactDOM.findDOMNode(el).classList.add("selected")
            this.setState({
                
                pageNumber: (this.state.pageNumber +1)
            })
        
    }
    

    render(){
    
        let data = this.state.data
    

    
    let filteredData = data.filter((movie)=>{
        if(this.state.rating!=="all"){
            return movie.rating === this.state.rating;
        }
        else{
            return true;
        }
    })



     filteredData = filteredData.filter((data)=>{
        let name = data.name.toLowerCase();
        let srch = this.state.search.toLowerCase();
        return name.includes(srch);
    })
    filteredData = filteredData.filter((data)=>{
        if(this.state.genre!="" && this.state.genre!=="All Genre"){
            return data.genre.toLowerCase().includes(this.state.genre.toLowerCase())
        }
        
        else{
            return true;
        }
    })

    let finalData = [];

        for (let i = (this.state.pageNumber - 1) * 5; i < (this.state.pageNumber * 5) && i < filteredData.length; i++) {
            finalData.push(filteredData[i]);
        }
    
        return(
            <div className="main-container">
                {this.state.loader?<Loader/>:""}
                <NavBar></NavBar>
                <SideBar onChange={this.changeGenre}></SideBar>
                <div className="movie-table-container">
                    <div className="filter-tab" >
                    <input value={this.state.value} type="text" placeholder="Search for Movies" className="movie-search" onChange={this.changeSearch} />
                    <select className="rating-dropdown" name="rating" onChange={this.changeRating}>
                    <option value={"all"} selected>All Rating</option>
                            <option value={0}>0 Rating</option>
                            <option value={1}>1 Rating</option>
                            <option value={2}>2 Rating</option>
                            <option value={3}>3 Rating</option>
                            <option value={4}>4 Rating</option>
                            <option value={5}>5 Rating</option>
                    </select>
                    </div>

                    <MovieTable totalMovies={filteredData.length} movies={finalData} onChange={this.changePage} left={this.changePageLeft} right={this.changePageRight}></MovieTable>
                    
                </div>
                
                
            </div>
        )
    }
    
}
export default HomePage