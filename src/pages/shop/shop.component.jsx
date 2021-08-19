import React from "react";
import { connect } from "react-redux";
//import { connect } from "react-redux";
import { Route } from "react-router-dom";
//import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collections-overview/collections-overview.component.jsx";
//import { selectCollections } from "../../redux/shop/shop.selectors.js";
import CollectionPage from "../collection/collection.component.jsx";
import { selectCollection } from "../../redux/shop/shop.selectors.js";
const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

/*const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});*/
//export default connect(mapStateToProps)(ShopPage);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(ShopPage);
