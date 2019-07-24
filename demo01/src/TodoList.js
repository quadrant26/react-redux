import React, { Component } from 'react'
import store from './store/index'
import { changeInputAction, addItemAction, removeItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

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
        const action = getTodoList()
        store.dispatch(action)
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
        const action = addItemAction()
        store.dispatch(action)
        console.log(action);
    }

    deleteItem (index){
        const action = removeItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;