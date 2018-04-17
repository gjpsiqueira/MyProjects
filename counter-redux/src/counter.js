import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions/counterActions'
import { bindActionCreators } from 'redux';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}


const mapStateToProps = state => {return {count: state.counter.count}}
const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Counter)