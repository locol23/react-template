import React from 'react'
import {
  compose,
  setDisplayName,
  branch,
  renderComponent,
  pure,
} from 'recompose'
import Layout from './Layout'

const Identity = c => c

const Show = () => (
  <Layout>
    <h1>Show!!</h1>
  </Layout>
)

const Component = ({ text }) => (
  <Layout>
    <h1>{text}</h1>
  </Layout>
)

const checkShowState = ({ show }) => !show
const withCheckShowState = branch(
  checkShowState,
  Identity,
  renderComponent(Show)
)

const Enhance = compose(
  setDisplayName('Contents'),
  withCheckShowState,
  pure
)

export default Enhance(Component)
