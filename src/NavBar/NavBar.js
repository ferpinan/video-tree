import "./navbar.scss";
import React from "react";
import PropTypes from "prop-types";
import NavBarIcons from "./NavBarIcons";
import NavBarLogo from "./NavBarLogo";
import NavBarBreadcrumbs from "./NavBarBreadcrumbs";

function NavBar(props) {
	const {
		isBackButtonVisible,
		onClickBackButton,
		currentFile,
		currentFolder,
		onClickHomeButton,
		onClickBreadcrumbsButton
	} = {...props};
	return <nav className={"nav-bar"}>
		<NavBarIcons onClickHomeIcon={onClickHomeButton} backButtonVisible={isBackButtonVisible}
					 onClickBackIcon={onClickBackButton}/>
		<NavBarBreadcrumbs onClick={onClickHomeButton} currentFolder={currentFolder}
						   onClickBreadcrumbsButton={onClickBreadcrumbsButton}
						   currentFile={currentFile}/>
		<NavBarLogo/>
	</nav>;
}

NavBar.propTypes = {
	onClickHomeButton: PropTypes.func,
	onClickBackButton: PropTypes.func,
	onClickBreadcrumbsButton: PropTypes.func,
	isBackButtonVisible: PropTypes.bool,
	currentFolder: PropTypes.array,
	currentFile: PropTypes.string
};


export default NavBar;
