import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "../Nav/Nav";


class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className='header_block'>

                <div className='advertisment'></div>
                <div className='title_block_cover'>
                    <div className='title_block'>React Currency Change</div>
                </div>

                <Nav/>
            </header>
        );
    }
}

export default Header