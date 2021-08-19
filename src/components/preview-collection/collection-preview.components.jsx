import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.components";
const CollectionPreview = ({ title, items }) => {
  console.log(title);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
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

export default CollectionPreview;
