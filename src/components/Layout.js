import styled from 'styled-components'
import { compose, setDisplayName, pure } from 'recompose'

const Component = styled.div`
  display: flex;
  justify-content: center;
`

const Enhance = compose(
  setDisplayName('Layout'),
  pure
)

export default Enhance(Component)
