import React from "react";
import ReactDOM from 'react-dom';

class Rate extends React.Component{

    render() {
        return(
            <div className="rate">
                    <p className='titleP'>Курс валют на 30 ноября 2019</p>
                    <div className="container_of_blocksCurrency">
                        <div className="block_currency">
                            <p className="usd">USD</p>
                            <p className="block_currency_p">1500 Kr</p>
                            <p className="block_currency_p">1200 Kr</p>
                        </div>
                        <div className="block_currency">
                            <p className="usd">USD</p>
                            <p className="block_currency_p">1500 Kr</p>
                            <p className="block_currency_p">1200 Kr</p>
                        </div>
                        <div className="block_currency">
                            <p className="usd">USD</p>
                            <p className="block_currency_p">1500 Kr</p>
                            <p className="block_currency_p">1200 Kr</p>
                        </div>
                    </div>
            </div>

        )
    }
}

export default Rate