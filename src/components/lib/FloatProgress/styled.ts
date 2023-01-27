import styled from "styled-components";

export const ProgressWrapper = styled.ul<{ length: number }>`
	grid-template-columns: repeat(${(props) => props.length}, minmax(0, 1fr));
`;
