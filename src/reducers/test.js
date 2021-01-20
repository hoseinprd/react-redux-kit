import * as types from "../actions/types";

const initState = []; // or anything u or me like :)

function testReducer(state = initState, action) {
  switch (action.type) {
    case types.TEST_1:
      return; // Do something
    default:
      return state;
  }
}

export default testReducer;
