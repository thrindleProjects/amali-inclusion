import styled from "styled-components";

export const AmountBtn = styled.button<{ selected: boolean }>`
	background-color: ${(props) => (props.selected ? "#1B2850" : "#fff")};
	color: ${(props) => (props.selected ? "#fff" : "#1B2850")};
	box-shadow: 3px 4px 10px #71809650;
`;
