import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import headerReducer from "./header/header.reducer";

// enableES5();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["header"],
};

const rootReducer = combineReducers({
  header: headerReducer,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);

//wathcer saga
// export function* rootSaga() {
//   yield all([]);
// }
