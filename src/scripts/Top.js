import React from 'react'
import { pure } from 'recompose'
import styled from 'styled-components'

const { StrictMode } = React

const Top = () => {
  return (
    <Layout>
      <StrictMode>
        <h1>Hello React</h1>
      </StrictMode>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
`

export default pure(Top)
