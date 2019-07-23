import {CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM} from './actionType'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}

export default (state=defaultState, action) =>{
    // console.log(state, action)
    // Reducer 只能接收state, 不能改变state
    if( action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
        newState.inputValue = action.value
        return newState
    }

    if ( action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if ( action.type === REMOVE_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}