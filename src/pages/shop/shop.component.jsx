import React from "react";
import { connect } from "react-redux";
//import { connect } from "react-redux";
import { Route } from "react-router-dom";
//import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collections-overview/collections-overview.component.jsx";
//import { selectCollections } from "../../redux/shop/shop.selectors.js";
import CollectionPage from "../collection/collection.component.jsx";
import { selectCollection } from "../../redux/shop/shop.selectors.js";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
import { updateCollections } from "../../redux/shop/shop.actions.js";

import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("abc");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionMap);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

/*const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});*/
//export default connect(mapStateToProps)(ShopPage);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
