import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  className: "w9 f2 pa3 headline light-blue db fw vh-50 bg-blue",
})`
  display: grid;
  place-items: center;
`

export default () => <Wrapper>Hello no tachyons here world!</Wrapper>
