import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
const sagaMiddlewere = createSagaMiddleware();

const middlewares = [sagaMiddlewere];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddlewere.run(rootSaga);
export const persistor = persistStore(store);
//export default { store, persistor };
