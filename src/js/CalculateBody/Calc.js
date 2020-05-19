import React from "react";
import ReactDOM from 'react-dom';


class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }
    static getDerivedStateFromProps(props, state){
        return {rate: props.rate}
    }


    calcRate = (e) => {
        e.preventDefault();
        let el = e.target.elements;
        console.log(el["currentCurrency"].value); // получаем el через name
        console.log(el["typeCurrency"].value);
        // console.log(el.currentCurrency.value); // можно через точку
        // console.log(el.typeCurrency.value);
        let countCurrency = el["currentCurrency"].value;
        let typeCurrency = el["typeCurrency"].value;
        this.setState({result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)})

    };

    render() {
        return (

            <div className="calc_body">
                <p className='titleP'>Калькулятор обмена </p>
                <div className="culculate_of_currency">
                    <p>I want: </p>
                    <div className="block_input">
                        <input className="inputBuy" type="radio" name="currency" value="buy"/>
                        <p>BUY</p>
                    </div>
                    <div className="block_input">
                        <input className="inputSell" type="radio" name="currency" value="sell"/>
                        <p>SELL</p>
                    </div>



                    <form action="" onSubmit={this.calcRate}>
                        <input className="value_of_Currency" type="text" name='currentCurrency'/>
                        <select name="typeCurrency" id="" className="options">
                            {Object.keys(this.props.rate).map((keyName, i) => (
                                <option key={keyName} value={keyName}>{keyName}</option>
                            ))}
                        </select>
                        <input className='submitBtn' type="submit" defaultValue="calc"/>
                    </form>



                    <div className="result_box">
                        <p>RESULT: </p>
                        <div className="result">EUR {this.state.result}</div>
                        {/*<div className="result">150</div>*/}
                        {/*<div className="result">150</div>*/}
                        {/*<div className="result">150</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Calc