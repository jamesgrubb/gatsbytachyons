import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Header from "..components/header"

const Wrapper = styled.div`
width: 100%;
`

export default () => (
    <Wrapper>
    <Link to="/">Home</Link>
<Header>Hello</Header>
</Wrapper>
)
