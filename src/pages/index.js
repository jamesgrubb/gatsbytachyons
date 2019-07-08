import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../utils/typography"

const Hello = styled.h3.attrs({
    className: "black"
})`
border: 20px solid red;
${scale(1)};
padding: ${rhythm(2)};
height: 50vh;
display: grid;
place-items: center;
`

export default () => <Hello className="fw9 f2 headline db fw bg-blue">Hello world!</Hello>
