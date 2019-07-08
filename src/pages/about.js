import React from 'react';
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled(Link).attrs({
    className: "red"
})``

export default () => (

<div className="">
    <Nav to="/">Home</Nav>
    <h1 className="red">About</h1>
    <p className="red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis veniam iure architecto nulla dolores repellendus suscipit, corporis harum recusandae facere vel sequi reprehenderit aliquam ad velit obcaecati! Dolores, qui. </p>
</div>

)