import { createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore, compose } from "redux";
import { rootEpic, rootReducer } from "./reducer";

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();

  const middleware = [epicMiddleware];

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
