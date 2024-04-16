import React from 'react'
import styled from 'styled-components'

const Home = () => {
	return (
		<div>
			<Background></Background>
		</div>
	)
}

export default Home

const Background = styled.div`
	width: 100%;
	height: 500px;
	background-color: var(--color-gray-2);
`