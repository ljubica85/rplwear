import React from "react";
import CollectionItem from "../collection-item/Collection-item";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
	return (
		<section className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
      <CollectionItem key={item.id} {...item} />
					))}
			</div>
		</section>
	);
};

export default CollectionPreview;
