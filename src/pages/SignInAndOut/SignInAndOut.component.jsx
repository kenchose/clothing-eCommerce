import React from "react";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import { SignInAndOutContainer } from "./SignInAndOut.styles";

const SignInAndOut = () => {
	return (
		<SignInAndOutContainer>
			<SignIn />
			<SignUp />
		</SignInAndOutContainer>
	);
};

export default SignInAndOut;
