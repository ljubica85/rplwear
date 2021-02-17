import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
	return (
		<article className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${title}`)}>
   <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</article>
	);
};

export default withRouter(MenuItem);
