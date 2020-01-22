import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/sagas";
import userRootSaga from "./user/sagas";
import cartSaga from "./cart/sagas";
export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userRootSaga), call(cartSaga)]);
}
