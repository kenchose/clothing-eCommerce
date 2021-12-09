import React from "react";
import { withRouter } from "react-router-dom";

import * as sc from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<sc.MenuItemContainer
			size={size}
			onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<sc.BackgroundImage className="background-image" imageUrl={imageUrl} />
			<sc.ContentContainer className="content">
				<sc.TitleContainer>{title.toUpperCase()}</sc.TitleContainer>
				<sc.SubTitleContainer>SHOP NOW</sc.SubTitleContainer>
			</sc.ContentContainer>
		</sc.MenuItemContainer>
	);
};

export default withRouter(MenuItem);
