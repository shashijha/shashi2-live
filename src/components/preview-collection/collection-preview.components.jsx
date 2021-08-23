import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.components";
const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1
        onClick={() => history.push(`${match.url}/${routeName}`)}
        className="title"
      >
        {title.toUpperCase()}{" "}
      </h1>
      <div className="preview">
        {items
          .filter((id, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
