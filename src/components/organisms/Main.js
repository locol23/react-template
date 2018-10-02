import React from 'react'
import styled from 'styled-components'
import { compose, setDisplayName, pure } from 'recompose'

import { Header } from '../molecules/Header'
import { Container } from '../molecules/Container'

const Component = props => (
  <Layout>
    <Header />
    <Container {...props} />
  </Layout>
)

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const Enhance = compose(
  setDisplayName('Main'),
  pure
)

export const Main = Enhance(Component)
