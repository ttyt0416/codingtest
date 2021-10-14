import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import rootReducer from "./Modules";
import { rootSaga } from "./Modules";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import logger from "redux-logger";

// const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  rootReducer,
  applyMiddleware(logger)
  // compose(
  //   applyMiddleware(sagaMiddleware, [logger])
  //   ,
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__
  //     ? composeWithDevTools()
  //     : (f) => f
  // )
);
const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
