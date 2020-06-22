import React, {Fragment, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PropTypes from 'prop-types'
import ReactCSSTransitionGroupe from 'react-addons-css-transition-group'
// ----------------------------------
import Children from "./Children";

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            // name: "inputRef",
            // age: "ageRef",
            // job: "selectRef"
        }
    }
    plusFun = (smt) => {
        this.setState({
            counter: smt
        })
    };

    render() {

        const {counter} = this.state;

        return (
            <div>
                <Children counter={counter} plusFun={this.plusFun}/>


                {/*<form action="">*/}
                {/*    <input ref="title"  type="text" name='name' onChange={this.onChange}/>*/}
                {/*    /!*<input ref={this.ageRef} type="number" name='age' onChange={this.onChange}/>*!/*/}
                {/*<select ref={this.selectRef} name="" id="" onChange={this.onChange}>*/}
                {/*    <option value="front">front-end</option>*/}
                {/*    <option value="back">back-end</option>*/}
                {/*</select>*/}
                {/*</form>*/}

                {/*<h2>{name}</h2>*/}
                {/*<h2>{age}</h2>*/}
                {/*<h1>{job}</h1>*/}
            </div>

        )
    }
}

export default Content

//-----------------------------------------------------------------------------

//// ==================  если App является классом

//// ------------------- можно так:
// ReactDOM.render(
//     App.render(),      ---------
//     document.getElementById('root')
// );
//// тогда компонент :   class App extends React.Component {
////                           static render() { //// => через class перед рендер ставить static
////                                 return (
////                                    );
////                                 }
////                              }


//// -------------------- либо так:

// ReactDOM.render(
//     <App/>, //
//     document.getElementById('root')
// );
//// тогда компонент :   class App extends React.Component {
////                            render() { //// => без static
////                                 return (
////                                    );
////                                 }
////                              }


//// -------------------- либо когда компоненты функции:

// ReactDOM.render(
//     App(), //
//     document.getElementById('root')
// );
//
// function App() {
//     return (
//     );
// }
//
// export default App;


// hook
// export function Example() {
//     // Declare a new state variable, which we'll call "count"
//     // const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }


////// mouse
//     (function () {
//         var follower, init, mouseX, mouseY, positionElement, printout, timer;
//
//         follower = document.getElementById('follower');
//
//         printout = document.getElementById('printout');
//
//         mouseX = event => {
//             return event.clientX;
//         };
//
//         mouseY = event => {
//             return event.clientY;
//         };
//
//         positionElement = event => {
//             var mouse;
//             mouse = {
//                 x: mouseX(event),
//                 y: mouseY(event) };
//
//             follower.style.top = mouse.y + 'px';
//             return follower.style.left = mouse.x + 'px';
//         };
//
//         timer = false;
//
//         window.onmousemove = init = event => {
//             var _event;
//             _event = event;
//             return timer = setTimeout(() => {
//                 return positionElement(_event);
//             }, 1);
//         };
//
//     }).call(this);