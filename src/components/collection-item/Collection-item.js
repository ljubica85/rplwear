import React from "react";
import "./collection-item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<article className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
   </div>
		</article>
	);
};

export default CollectionItem;
