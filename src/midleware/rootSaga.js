import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/sagas";
import userRootSaga from "./user/sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userRootSaga)]);
}
