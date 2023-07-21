import { PRODUCT_LIST } from "./constant";

export const productList = ()=>{
    let payload = "Hello from prod action";
    return {
        type: PRODUCT_LIST,
        payload
    }
}