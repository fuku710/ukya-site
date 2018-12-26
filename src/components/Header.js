import React from 'react'
import styled from '@emotion/styled'

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <Title>{children}</Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: deepskyblue;
`

const Title = styled.h1`
  margin: 0px;
  font-size: 48px;
  color: white;
  line-height: 1.5em;
`
