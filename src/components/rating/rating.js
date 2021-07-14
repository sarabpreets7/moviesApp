import React from 'react'
import "./rating.css"

class Rating extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let array = [<img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"/>,
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"/>,
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"/>,
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"/>,
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"/>
            ];
        let no = this.props.stars;
        for(let i=0;i<no;i++){
            array[i] = <img className="image-star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/1024px-Full_Star_Yellow.svg.png"/>;
        }
        return(
           <div className="imagee">
               {/* <img className="image" src="https://lh3.googleusercontent.com/proxy/6XVa6cub3L8gyQNfjiOUUFIOWChBMLc9oJR-Y1acH4W1kl70xIIORhzrWji6ZtM5F7eQnn56Vw39Xo0mhyGW5H-EI2-f5tI"/>
               <img className="image" src="https://lh3.googleusercontent.com/proxy/6XVa6cub3L8gyQNfjiOUUFIOWChBMLc9oJR-Y1acH4W1kl70xIIORhzrWji6ZtM5F7eQnn56Vw39Xo0mhyGW5H-EI2-f5tI"/>
               <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"/>
               <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"/>
               
                */}
                {array}
           </div>
        )
    }
    
}
export default Rating