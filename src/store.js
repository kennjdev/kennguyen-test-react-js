import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from "./reducers";
const persistConfig = {
      key: 'root',
      storage: storage,
      stateReconciler: autoMergeLevel2,
      // whitelist: ['auth','message']
};
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const persistedReducer = persistReducer(persistConfig, rootReducer);

const configStore = () => {
      const store = createStore(
            persistedReducer,
            composeEnhancers(applyMiddleware(thunk)),
      );
      return store;
};

export default configStore;