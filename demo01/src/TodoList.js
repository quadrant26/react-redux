import React, { Component } from 'react'
import store from './store/index'
import { changeInputAction, addItemAction, removeItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {

    constructor(props){
        super(props)
        // console.log( store.getState() )
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange) // 订阅Redux的状态

    }

    componentDidMount (){
        axios.get('https://www.easy-mock.com/mock/5cff5255ae06cd5f4fc7e053/reactdemo01/getList')
        .then( (res) => {
            console.log(res)
            const data = res.data.data
            const action = getListAction(data)
            store.dispatch(action)

        } )
        .catch( (error) => {
            console.log(error)
        })
    }

    render() { 
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem = {this.deleteItem}
            />
        );
    }
    
    changeInputValue (e){
        // console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange (){
        this.setState(store.getState())
    }

    clickBtn (e){
        const action = addItemAction
        store.dispatch(action)
    }

    deleteItem (index){
        const action = removeItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;