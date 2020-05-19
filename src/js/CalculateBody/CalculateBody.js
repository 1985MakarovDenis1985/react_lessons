import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
////-----------------------------------------

import Header from "../Header/Header";
import Rate from "./Rate";


class CalculateBoby extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello"
        }
    }

    render() {
        return(

            <div className="content_body">
                <div className="value_of_change">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Rate}/>
                            {/*<Route exact path="/about" component={this.setState({title: "Yeeeeeee"})}/>*/}
                        </Switch>
                    </Router>
                </div>
            </div>

        )
    }
}

export default CalculateBoby