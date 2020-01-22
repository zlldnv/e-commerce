import { takeLatest, put } from "redux-saga/effects";
import { userActionTypes } from "midleware/user/types";
import { clearCart } from "./actions";
export default function* rootSaga() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCardSaga);
}

export function* clearCardSaga() {
  yield put(clearCart());
}
