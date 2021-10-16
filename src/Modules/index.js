import { combineReducers } from "redux";
// import { all } from "redux-saga/effects";

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import headerReducer from "./header/header.reducer";
import modalReducer from "./modal/modal.reducer";
import cartReducer from "./cart/cart.reducer";
import darkmodeReducer from "./darkmode/darkmode.reducer";

enableES5();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["header", "cart"],
};

const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
  cart: cartReducer,
  darkmode: darkmodeReducer,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);

//wathcer saga
// export function* rootSaga() {
//   yield all([]);
// }
