import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const HomeNavContainer = styled.div`
    position: absolute;
    bottom: 0;
    margin-left: 35px;
    padding-bottom: 15px;
    
    a {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;

        text-transform: uppercase;
        text-decoration: none;
        line-height: 29px;
        letter-spacing: 0.3em;

        color: #FFFFFF;
    }
`

const HomeNav = () => (
  <HomeNavContainer>
    <Link to="/">/Home</Link>
  </HomeNavContainer>
)

export default HomeNav
