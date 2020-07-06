import {ADD_COUNTER, ADD_TO_CAR} from "./mutations-type";

export default {
  [ADD_COUNTER](state, payload) {
    payload.count += 1
  },
  [ADD_TO_CAR](state, payload) {
    payload.checked = true;
    state.carList.push(payload)
  }
}