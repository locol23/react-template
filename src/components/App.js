import React from 'react'
import {
  compose,
  setDisplayName,
  withStateHandlers,
  lifecycle,
  pure,
} from 'recompose'
import { Main } from './organisms/Main'

const Component = props => <Main {...props} />

const Enhance = compose(
  setDisplayName('App'),
  withStateHandlers(
    {
      text: '',
      show: false,
    },
    {
      setText: () => t => ({ text: t }),
      setShow: ({ show }) => () => ({ show: !show }),
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.setText('Hello React')
    },
  }),
  pure
)

export const App = Enhance(Component)
