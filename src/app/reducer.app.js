import * as types from "../infra/types";

export default function user(state = {}, action) {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case types.SYNC_ACTION:
      return {
        ...state
      };
    case types.ASYNC_ACTION:
      return {
        ...state
      };
    case types.ASYNC_ACTION_SUCCESS:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
}
