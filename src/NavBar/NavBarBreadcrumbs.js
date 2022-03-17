import React from "react";
import PropTypes from "prop-types";

function NavBarBreadcrumbs(props) {
	return <ul className={"breadcrumbs"}>
		<li onClick={props.onClick}>Home</li>
		{props.currentFolder.map((folder, index) => <li key={"breadcrumb_" + index}
														onClick={() => this - props.onClickBreadcrumbsButton(index)}>{folder}</li>)}
		{props.currentFile !== "" && <li>{props.currentFile}</li>}
	</ul>;
}

NavBarBreadcrumbs.propTypes = {
	onClick: PropTypes.any,
	currentFolder: PropTypes.any,
	onClickBreadcrumbsButton: PropTypes.func,
	currentFile: PropTypes.any
};



export default NavBarBreadcrumbs;
