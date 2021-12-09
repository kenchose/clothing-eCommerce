import React from "react";

import * as sc from "./FormInput.styles";

const FormInput = ({ handleChange, label, id, ...props }) => {
	return (
		<sc.GroupContainer>
			<sc.FormInputContainer id={id} {...props} onChange={handleChange} />
			{label ? (
				<sc.FormInputLabel
					htmlFor={id}
					className={`${props.value.length ? "shrink" : ""} form-input-label`}>
					{label}
				</sc.FormInputLabel>
			) : null}
		</sc.GroupContainer>
	);
};

export default FormInput;
