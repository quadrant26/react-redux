const defaultState = {
    inputValue: 'kang',
    list: []
}

export default (state=defaultState, action) => {

    if ( action.type === "change_input"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}