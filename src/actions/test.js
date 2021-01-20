import * as types from "./types";

export const setTest = params => dispatch => {
  dispatch({
    type: types.TEST_1,
    payload: {
      // DATA TO SEND
    },
  });
};
