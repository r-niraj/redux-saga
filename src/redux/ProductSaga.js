import {takeEvery,put} from 'redux-saga/effects'
import {PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts(){
    let payload = yield fetch('http://localhost:3500/products');
    payload = yield payload.json();
    yield put({type: SET_PRODUCT_LIST, payload})
}

function* searchProduct(searchTerm){
    let payload = yield fetch(`http://localhost:3500/products/?q=${searchTerm.payload}`);
    payload = yield payload.json();
    yield put({type: SET_PRODUCT_LIST, payload})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts);
    yield takeEvery(SEARCH_PRODUCT,searchProduct)
}
export default productSaga; 