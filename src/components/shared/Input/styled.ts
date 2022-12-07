import styled from "styled-components";

export const MainInput = styled.input<{ error?: boolean | string }>`
	border-color: ${(props) => (props.error ? "rgb(252, 165, 165)" : "#88c3c1")};
	background-color: ${(props) =>
		props.error ? "rgba(252, 165, 165, 0.1)" : "#88c3c120"};
	box-shadow: 3px 4px 10px
		${(props) => (props.error ? "rgba(252, 165, 165, 0.25)" : "#88c3c180")};
	&:focus {
		border-color: #718096;
		background-color: #71809620;
		box-shadow: 3px 4px 10px #71809650;
	}
`;

export const PasswordInput = styled.div<{ error?: boolean | string }>`
	&:focus-within {
		border-color: #718096;
		background-color: #71809620;
		box-shadow: 3px 4px 10px #71809650;
	}
	border-color: ${(props) => (props.error ? "rgb(252, 165, 165)" : "#88c3c1")};
	background-color: ${(props) =>
		props.error ? "rgba(252, 165, 165, 0.1)" : "#88c3c120"};
	box-shadow: 3px 4px 10px
		${(props) => (props.error ? "rgba(252, 165, 165, 0.25)" : "#88c3c180")};
`;
