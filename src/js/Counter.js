import React, {Fragment} from "react"
import {connect} from "react-redux"
import {counterC} from "./redux/actions/actions";

const mapToProps = (state) => {
    return {
        store: state
    }
};

const mapDispatch = {
    counterC
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    //------------------------------------

    onPLus = () => {
        let n = this.state.number +=1;
        this.setState(
            {number: n}
            );
        this.props.counterC(n);
        // console.log("this.state :" + this.state.number);
        // console.log("props :" + this.props.store.count.count)
    };
    //------------------------------------

    onMinus = () => {
        let n = this.state.number -=1;
        this.setState(
            {number: n}
        );
        this.props.counterC(n);
    };

    render() {
        const {count} = this.props.store.count;
        const {number} = this.state;

        return (
            <div style={{display: "flex"}}>
                <button onClick={this.onMinus}>-1</button>
                <p style={{padding: "3px"}}>PROPS {count} </p>
                <p style={{padding: "3px"}}>STATE {number} </p>
                <button onClick={this.onPLus}> +1</button>
            </div>
        );
    }
}

export default connect(mapToProps, mapDispatch)(Counter)