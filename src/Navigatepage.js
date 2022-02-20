import React, {Component} from 'react';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";

const LoadApp = () => {
    return(
        <App/>
    )
}


class Navigatepage extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route path="/" component={LoadApp}>
            </Route>
            </BrowserRouter>
        );
    }
}

export default Navigatepage;