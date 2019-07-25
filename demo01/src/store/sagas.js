import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionType'
import { getListAction } from './actionCreators'
import axios from 'axios'

// generator
function* mySaga (){
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList (){
    // console.log('kang')
    // axios.get('https://www.easy-mock.com/mock/5cff5255ae06cd5f4fc7e053/reactdemo01/getList')
    // .then( (res) => {
    //     const data = res.data.data
    //     const action = getListAction(data)
    //     put(action)
    // } )
    // .catch( (error) => {
    //     console.log(error)
    // })

    const res = yield axios.get('https://www.easy-mock.com/mock/5cff5255ae06cd5f4fc7e053/reactdemo01/getList')
    const action = getListAction(res.data.data)
    yield put(action)
}

export default mySaga