import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "../Nav/Nav";
import {CalculateBoby} from "../CalculateBody/CalculateBody";


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // title: 'Currency Change'
        }
        console.log(this.props.title)
    }

    render() {
        return(
            <header className='header_block'>

                <div className='advertisment'></div>
                <div className='title_block_cover'>
                    <div className='title_block'>React {this.state.title}</div>
                </div>

                <Nav/>
            </header>
        );
    }
}

export default Header