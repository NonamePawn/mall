import {ADD_TO_CAR, ADD_COUNTER} from "./mutations-type";

export default {
  addCar(context, payload) {
    let oldProduct = context.state.carList.find( item => item.id === payload.id)
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    }else {
      payload.count = 1;
      context.commit(ADD_TO_CAR, payload)
    }
  }
}