import styled, { isStyledComponent, keyframes } from 'styled-components';
import logo from './logo.svg';

const App = () => {
	return (
		<>
			<AppWraper>
				<p>center</p>
				<AppHeader>
					<AppLogo src={logo} alt='logo'></AppLogo>
					<AppLink>
						<p>test2</p>
					</AppLink>
					<Button>default</Button>
					<TomatoButton>tomato</TomatoButton>
				</AppHeader>
			</AppWraper>
			<p> test</p>
		</>
	);
};

const AppLink = styled.p`
	color: #61dafb;
`;

const Button = styled.button`
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palegoldenrod;
	border-radius: 3px;
	color: palevioletred;
	font-size: 1em;
`;

const TomatoButton = styled.button`
	border-color: tomato;
	color: tomato;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppWraper = styled.div`
	text-align: center;
`;

const AppHeader = styled.header`
	background-color: ${({ color }) => (color ? '#ff00000' : '#fff')};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	z-index: -1;
`;

const AppLogo = styled.img`
	height: 40vmin;
	pointer-events: none;
	z-index: 1000;

	@media (prefers-reduced-motion: no-preference) {
		animation: ${appLogoSpin} infinite 20s linear;
	}
`;

export default App;

// const StyledFirstText = styled.h2`
// 	font-size: 20px;
// 	color: green;
// `;

// const StyledSecondText = styled.h3`
// 	font-size: 15px;
// 	color: red;
// `;

/* <StyledFirstText>Text1</StyledFirstText>
			<StyledSecondText>Text2</StyledSecondText>
			<h4>Text3</h4> */
