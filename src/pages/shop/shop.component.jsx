import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionLoaded } = this.props;
    console.log(isCollectionLoaded);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
