import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }

    render() { 
        return (
            <div>
                <div>
                    <input type="text" value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>kang</li>
                </ul>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            console.log(e.target.value)
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList)