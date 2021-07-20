import React from 'react';
import "./loader.css";
import spinner from "./loader.ico"
class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="loader">
                <img src={spinner} alt="loader" />
            </div>
        )
    }
}

export default Loader;