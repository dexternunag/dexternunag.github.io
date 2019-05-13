import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavbarWrapper = styled.aside`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 15px;
  height: 100%;
  padding-top: 7px;

  ul {
    list-style: none;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    li {
      font-family: 'Montserrat',sans-serif;
      font-weight: 900;
      text-transform: uppercase;
      color: #303030;
      writing-mode: vertical-lr;
      text-orientation: upright;

      a {
        font-size: 20px;
        color: #303030;
        text-decoration: none;

        &.active {
          color: #D63031;
        }
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

const Navbar = ({ location }) => (
  <NavbarWrapper>
    <ul>
      <li>
        <Link
          className={location === 'about' ? 'active' : ''}
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={location === 'skills' ? 'active' : ''}
          to="/skills"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className={location === 'playground' ? 'active' : ''}
          to="/playground"
        >
          Playground
        </Link>
      </li>
      <li>
        <Link
          className={location === 'connect' ? 'active' : ''}
          to="/connect"
        >
          Connect
        </Link>
      </li>
    </ul>
  </NavbarWrapper>
)

export default Navbar
