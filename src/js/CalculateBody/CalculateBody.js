import React from "react";
import ReactDOM from 'react-dom';

import Rate from "./Rate";

class CalculateBoby extends React.Component{


    render() {
        return(
            <div className="content_body">
                <div className="value_of_change">
                  <Rate/>

                    <p className='titleP'>Калькулятор обмена</p>
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
                        <form action="">
                            <input className="value_of_Currency" type="text"/>
                            <select name="" id="" className="options">
                                <option value="usd">USD</option>
                                <option value="euro">EURO</option>
                            </select>
                        </form>

                        <div className="result_box">
                            <p>RESULT: </p>
                            <div className="result">150</div>                                <div className="result"></div>
                            <div className="result">150</div>
                            <div className="result">150</div>
                            <div className="result">150</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CalculateBoby