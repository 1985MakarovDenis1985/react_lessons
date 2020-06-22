import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PropTypes from 'prop-types'

// ----------------------------------

class Title extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Title;

// ----------------------------------
// import {Store} from "./Redux/Redux";


// class Children extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             newCount: 0
//         }
//     }
//
//     // static getDerivedStateFromProps(props, state){
//     //     console.log(props, state)
//     //     return true
//     // }
//
//     changeFun = (e) => {
//         const {plusFun} = this.props;
//         return new Promise((res) => {
//             switch (e.target.dataset.value) {
//                 case 'INCREMENT' :
//                     this.setState({
//                         newCount: this.state.newCount += 1
//                     });
//                     break;
//                 case 'DECREMENT' :
//                     this.setState({
//                         newCount: this.state.newCount -= 1
//                     });
//                     break;
//             }
//             res(this.state.newCount);
//         })
//             .then((data) => {
//                     plusFun(data)
//                 }
//             )
//     };
//
//
//     render() {
//         const {counter, plusFun} = this.props;
//         const {newCount} = this.state;
//         // console.log(this.props.plusFun)
//         return (
//             <div>
//                 <h1>{`counter value is: ${counter}`}</h1>
//                 <button onClick={this.changeFun} data-value={"INCREMENT"}>+1</button>
//                 <button onClick={this.changeFun} data-value={"DECREMENT"}>-1</button>
//                 <h1>New count: {newCount}</h1>
//             </div>
//
//         )
//     }
//
// }
//
// export default Children


//
// Children.propTypes= {        // валидация на тип
//     counter: PropTypes.number.isRequired,
//     func: PropTypes.func,
//     string: PropTypes.string,
//     number: PropTypes.number
// };
// Children.defaultProps = {   // будут дефолтные пропсы если их не передать
//     counter: 0,
//     func: ()=>{},
//     number: 0,
//     string: ''
// };