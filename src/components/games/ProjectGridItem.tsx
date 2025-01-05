import React from "react";
import {Link} from "react-router-dom";
import {To} from "react-router";

interface ProjectGridItemProps {
	title: string;
	id: string;
	readme: string;
	source: string;
}

const ProjectGridItem: React.FC<ProjectGridItemProps> = ({ title, id }) => {
	const to: To = {
		pathname: `/game/${id}`
	};

	return (
		<Link
			className="Grid-Item"
			to={to}
			state={{ modal: true }}
		>
			<div>{title}</div>
		</Link>
	);
};

export default ProjectGridItem;