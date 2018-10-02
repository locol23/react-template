import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'

const Component = props => (
  <button onClick={props.setShow}>Change show state</button>
)

const Enhance = compose(
  setDisplayName('Button'),
  pure
)

export const Button = Enhance(Component)
