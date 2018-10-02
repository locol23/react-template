import React from 'react'
import {
  compose,
  setDisplayName,
  branch,
  renderComponent,
  pure,
} from 'recompose'
import styled from 'styled-components'

const Component = ({ text }) => (
  <Layout>
    <div>{text}</div>
  </Layout>
)

const Layout = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
`

const Identity = c => c
const checkShowState = ({ show }) => !show
const withCheckShowState = branch(
  checkShowState,
  Identity,
  renderComponent(() => <Component text="Change Text!!" />)
)

const Enhancer = compose(
  setDisplayName('Text'),
  withCheckShowState,
  pure
)

export const Text = Enhancer(Component)
