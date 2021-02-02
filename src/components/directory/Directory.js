import React, {useState} from "react";
import "./directory.scss";
import MenuItem from "../menu-item/Menu-item";
import { data } from "../../data";

const Directory = () => {
 const [sections, setSections] = useState(data)
	return (
		<div className="directory-menu">
			{sections.map((section) => (
				<MenuItem key={section.id} {...section} />
			))}
		</div>
	);
};

export default Directory;
