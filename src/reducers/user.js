import { SET_TRANSACTIONS } from "../actions/types";
let initialState = {
      list: [
            {
                  "id": 1,
                  "username": "ken"
            },
            {
                  "id": 2,
                  "username": "lee"
            }
      ],
      transactions: []
};
const users = (state = initialState, action = {}) => {
      switch (action.type) {
            case SET_TRANSACTIONS:
                  return {
                        ...state,
                        transactions: action.transactions
                  }
            default:
                  return state;
      }
}
export default users