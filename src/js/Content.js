import React from 'react';
import ReactDOM from 'react-dom';
// ----------------------------------
import Header from "./Header/Header";
import CalculateBoby from "./CalculateBody/CalculateBody";
import Footer from "./Footer/Footer";


class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main_container'>
                <Header/>
                <CalculateBoby/>
                <Footer/>
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