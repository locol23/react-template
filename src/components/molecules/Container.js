import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'

import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

const Component = props => (
  <React.Fragment>
    <Text {...props} />
    <Button {...props} />
  </React.Fragment>
)

const Enhance = compose(
  setDisplayName('Container'),
  pure
)

export const Container = Enhance(Component)
