import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const SubHeaderContainer = styled.div`
  position: relative;
`

const SubHeaderName = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-size: 70px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -10px;
`

const SubHeader = ({ subHeaderName }) => (
  <SubHeaderContainer>
    <SubHeaderName>{subHeaderName}</SubHeaderName>
  </SubHeaderContainer>
)

export default SubHeader
