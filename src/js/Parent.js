import React from 'react';
import {Fragment} from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PropTypes from 'prop-types'
import ReactCSSTransitionGroupe from 'react-addons-css-transition-group'
import Provider from "react-redux";
// ----------------------------------
import Title from "./Children";



// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             title: "Hello React"
//         }
//     }
//
//     render() {
//         return (
//             <div className="container pt-3">
//                 <div className="row">
//                     <div className="col">
//                         FORM
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col">
//                         POSTS
//                     </div>
//                     <div className="col">
//                         FETCHED POSTS
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Parent

// ------------------------------------


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