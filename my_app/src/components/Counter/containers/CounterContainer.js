import React, { Component } from 'react';
import CounterView from '../components/CounterView';

class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countValue: 0
        }
    }

    handleIncrement = () => {
        // this.setState({countValue:this.state.countValue +1})
        this.setState((state) => {
            const incrementedValue = state.countValue + 1;

            return {
                countValue: incrementedValue
            }
        })
    }
    

    render() {
        return (
            <CounterView countValue={this.state.countValue} handleIncrement={this.handleIncrement}/>
        );
    }
}

export default CounterContainer;