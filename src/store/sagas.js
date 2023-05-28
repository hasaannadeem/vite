import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import postSaga from "./post/saga";
import authorizeSaga from "./autorization/saga";

export default function* rootSaga() {
  yield all([authSaga(), postSaga(), authorizeSaga()]);
}
