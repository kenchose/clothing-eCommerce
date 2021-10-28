import React from "react";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.styles.scss";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			return alert("Passwords do not match");
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className="sign-up">
				<h2 className="title">I don't have an account</h2>
				<span>Create a new account</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						label="Display Name"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						label="Email"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						label="Password"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						label="Confirm Password"
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">Create account</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
