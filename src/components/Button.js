import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import Layout from './Layout'

const Component = props => (
  <Layout>
    <button onClick={props.setShow}>Change show state</button>
  </Layout>
)

const Enhance = compose(
  setDisplayName('Button'),
  pure
)

export default Enhance(Component)
