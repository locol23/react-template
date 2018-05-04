import React from 'react'
import {
  compose,
  setDisplayName,
  withStateHandlers,
  lifecycle,
  pure,
} from 'recompose'
import Contents from './Contents'
import Button from './Button'

const Component = props => (
  <React.Fragment>
    <Contents {...props} />
    <Button {...props} />
  </React.Fragment>
)

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

export default Enhance(Component)
