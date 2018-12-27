import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export default function PostItem({ title, date, excerpt, to }) {
  return (
    <ItemContainer>
      <Title>
        <Link to={to}>{title}</Link>
      </Title>
      <Date>{date}</Date>
      <Excerpt>{excerpt}</Excerpt>
      <BorderLine />
    </ItemContainer>
  )
}

const ItemContainer = styled.section`
  padding: 8px;
`

const Title = styled.h3`
  /* font-size: 20px; */
  font-weight: normal;
  margin: 0;
  > * {
    color: inherit;
    text-decoration: none;
  }
`

const Date = styled.small``

const Excerpt = styled.p`
  margin: 8px;
  margin-left: 1em;
  margin-right: 1em;
`

const BorderLine = styled.hr`
  margin: 0;
`
