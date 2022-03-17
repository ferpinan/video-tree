import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faChessQueen} from '@fortawesome/free-regular-svg-icons'
import PropTypes from "prop-types";


function NavBarIcons(props) {
	return <div className={"icons"}>
		<FontAwesomeIcon onClick={props.onClickHomeIcon} icon={faChessQueen} size={"3x"}/>
		{props.backButtonVisible &&
		<FontAwesomeIcon icon={faArrowLeft} size={"3x"} onClick={props.onClickBackIcon}/>}
	</div>;
}

NavBarIcons.propTypes = {
	onClickHomeIcon: PropTypes.any,
	backButtonVisible: PropTypes.any,
	onClickBackIcon: PropTypes.any
};


export default NavBarIcons;
