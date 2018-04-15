import React from 'react'
import { pure } from 'recompose'
import styled from 'styled-components'

const Top = () => {
  return (
    <Layout>
      <h1>Hello React</h1>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
`

export default pure(Top)
