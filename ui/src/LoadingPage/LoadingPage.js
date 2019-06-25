import React from 'react';
import styled from 'styled-components';
import AppBar from '/AppBar';
import CircularProgress from '@material-ui/core/CircularProgress';

const PageContainer = styled.div`
width:100%;
margin: 0;
height: 100%;
overflow: hidden
`;

const ContainerProgress = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:70%;
`


const LoadingPage = () => {
	return (
		<PageContainer>
			<AppBar position='sticky'/>
			<ContainerProgress>
			<CircularProgress/>
		</ContainerProgress>
		</PageContainer>
)
}

export default LoadingPage;
