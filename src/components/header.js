import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import { Spring, Transition } from 'react-spring/renderprops'

const HeaderContainer = styled.div`
  position: relative;
`

const HeaderName = styled.h1`
  display: flex;
  margin-bottom: -15px;
  font-family: 'Montserrat',sans-serif;
  font-size: 120px;
  font-weight: 800;
  -webkit-text-fill-color: #fff0;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  text-transform: uppercase;
  letter-spacing: 25px;

  @media screen and (max-width: 575px) {
    font-size: 32px;
    letter-spacing: 15px;
  }
`

const HeaderShadow = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 15px;
  left: -10px;
  height: 52%;
  width: 95%;
  background-color: rgba(214,48,49,0.7);
`

const Header = ({ headerName, hasShadow, headerNameArray }) => (
  <HeaderContainer>
    <Spring
      delay={100}
      to={{ 
        width: hasShadow ? 0 : 95
      }}
    >
      {
        ({ width }) => <HeaderShadow style={{ width: `${width}%` }}></HeaderShadow>
      }
    </Spring>
    
    <HeaderName>
      <Transition
        items={headerName.split('')} keys={item => item}
        from={{ transform: 'translate3d(0,-40px,0)' }}
        enter={{ transform: 'translate3d(0,0px,0)' }}
        leave={{ transform: 'translate3d(0,-40px,0)' }}>
        {item => props => 
          <div style={props}>{item}</div>
        }
      </Transition>
    </HeaderName>

  </HeaderContainer>
)

export default Header
