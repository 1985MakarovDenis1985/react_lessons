import React from "react";
import ReactDOM from 'react-dom';
import Calc from "./Calc";

class Rate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {}
        };
        this.currency = ['USD', 'CAD', 'PHP'];
        this.getRate();
    }

    getRate = () => {
        fetch("https://api.exchangeratesapi.io/latest")
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({date: data.date});

                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                this.setState({currencyRate: result})
            })
    };

    render() {
        return (
            <div className="rate">
                <p className='titleP'>Курс валют на {this.state.date}</p>
                <div className="container_of_blocksCurrency">
                    {Object.keys(this.state.currencyRate).map((keyName, i) => ( //// => круглые скобки если в них html
                        <div className="block_currency" key={keyName}>
                            <p className="usd">{keyName}</p>
                            <p className="block_currency_p">{this.state.currencyRate[keyName].toFixed(2)}</p>
                            <p className="block_currency_p for_one">За один ЕВРО</p>
                        </div>
                    ))}
                </div>
                <Calc rate = {this.state.currencyRate}/>
            </div>
        )
    }
}

export default Rate