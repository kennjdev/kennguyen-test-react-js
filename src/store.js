import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers";
const configStore = () => {
      const store = createStore(
            rootReducer,
            composeWithDevTools(
                  applyMiddleware(thunk),
            )
      );
      return store;
};
export default configStore;