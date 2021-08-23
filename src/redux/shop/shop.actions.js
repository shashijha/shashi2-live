import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});
export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("abc");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        // console.log(collectionMap);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error)));
  };
};
