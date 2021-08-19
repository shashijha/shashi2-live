import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/collection-preview.components";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overiew">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
