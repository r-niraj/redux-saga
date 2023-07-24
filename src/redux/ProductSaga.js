import {takeEvery,put} from 'redux-saga/effects'
import {PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts(){
    yield console.log("getProducts called");
    let payload = yield fetch('http://localhost:3500/products');
    payload = yield payload.json();
    // console.log(payload); 
    yield put({type: SET_PRODUCT_LIST, payload})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts);

    // yield takeEvery(ADD_TO_CART,add2Cart)
}
export default productSaga; 