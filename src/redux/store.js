import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
import productSaga from "./ProductSaga";
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducers,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga);
export default store;