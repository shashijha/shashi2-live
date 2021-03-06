import { all, call } from "@redux-saga/core/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
