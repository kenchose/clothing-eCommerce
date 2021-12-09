import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirecotrySections } from "../../redux/selectors/directory.selectors";

import { DirectoryMenuContainer } from "./Directory.styles";

import MenuItem from "../MenuItem/MenuItem.component";

const Directory = ({ sections }) => {
	const directoryMenu = sections.map(({ id, ...otherProps }) => {
		return <MenuItem key={id} {...otherProps} />;
	});

	return <DirectoryMenuContainer>{directoryMenu}</DirectoryMenuContainer>;
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);
