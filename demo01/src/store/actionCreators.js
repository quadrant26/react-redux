import {CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, GET_LIST} from './actionType'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const removeItemAction = (index) => ({
    type: REMOVE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})