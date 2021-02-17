import React from "react";
import "./shop.scss";

import CollectionPreview from "../../components/collection-preview/Collection-preview";
import { SHOP_DATA } from "./shop_data";

const ShopPage = () => {
	const [collections, setCollections] = React.useState(SHOP_DATA);
	console.log(collections);
	return (
		<div className="shop-page">
			{collections.map((collection) => (
				<CollectionPreview key={collection.id} {...collection} />
			))}
		</div>
	);
};

export default ShopPage;
