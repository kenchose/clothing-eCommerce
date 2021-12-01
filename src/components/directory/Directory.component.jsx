import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirecotrySections } from "../../redux/selectors/directory.selectors";

import "./Directory.styles.scss";

import MenuItem from "../MenuItem/MenuItem.component";

const Directory = ({ sections }) => {
	const directoryMenu = sections.map(({ id, ...otherProps }) => {
		return <MenuItem key={id} {...otherProps} />;
	});

	return <div className="directory-menu">{directoryMenu}</div>;
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);
