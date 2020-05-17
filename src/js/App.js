import React from 'react';
import ReactDOM from 'react-dom';
// import Nav from "./Nav";
// import Header from "./Header";
// import Footer from "./Footer";
// import Body from "./Body"
// import Nav from "./Nav";

//
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            text2: 7777,
            first_name: "",
            age: 0
        };
    }

    render() {
        return (
            <div style={{"textAlign": "center"}}>

            </div>
        )
    }
}

export default App

//// =============================== lesson 2
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "",
//             text2: 7777
//         };
//     }
//
//     myInput = (e) => {
//         console.log(e.target.name, e.target.value)
//         // this.setState({text: e.target.value})
//     };
//     submitForm = (e) => {
//         e.preventDefault()
//         console.log(e)
//     };
//     render() {
//         let a = "";
//         (this.state.text)? a = <p>{this.state.text}</p> : a = "";
//
//         return (
//             <div style={{"textAlign": "center"}}>
//                 {/*<form onSubmit={this.submitForm} action="">*/}
//                     <input onChange={this.myInput} type="text"  name={"text"} style={{"border": "1px solid blue"}}/>
//                     <input onChange={this.myInput} type="number" name = "age"/>
//                     {a}
//                     <input type="submit"/>
//                     <p>{this.state.age}</p>
//                 {/*</form>*/}
//             </div>
//         )
//     }
// }
//
// export default App


