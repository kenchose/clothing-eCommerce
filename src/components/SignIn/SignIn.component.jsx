import React from "react";

import "./SignIn.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						id="email"
						name="email"
						type="email"
						value={this.state.email}
						label="email"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						id="password"
						name="password"
						type="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">Sign in</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
