import styled from 'styled-components';

const StyledFirstText = styled.h2`
	font-size: 20px;
	color: green;
`;

const StyledSecondText = styled.h3`
	font-size: 15px;
	color: red;
`;

const App = () => {
	return (
		<div>
			<StyledFirstText>Text1</StyledFirstText>
			<StyledSecondText>Text2</StyledSecondText>
			<h4>Text3</h4>
		</div>
	);
};

export default App;
