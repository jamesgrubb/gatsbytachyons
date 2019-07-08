import React from "react"
import styled from "styled-components"

const Hello = styled.h3.attrs({
    className: "flex items-center justify-center"
})`
border: 20px solid red;
`

export default () => <Hello className="fw9 f2 pa3 headline light-blue db fw vh-50 bg-blue">Hello world!</Hello>
