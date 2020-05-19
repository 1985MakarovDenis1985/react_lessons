import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <nav className='nav'>
                    <ul className="navWrapper">
                        <li><a href="">Главная</a></li>
                        <li><a href="">Пункты обмена</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
        );
    }
}

export default Nav