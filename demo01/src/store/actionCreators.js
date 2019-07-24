import {CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, GET_LIST} from './actionType'
import axios from 'axios'

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

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cff5255ae06cd5f4fc7e053/reactdemo01/getList')
        .then( (res) => {
            const data = res.data.data
            const action = getListAction(data)
            dispatch(action)
        } )
        .catch( (error) => {
            console.log(error)
        })
    }
}