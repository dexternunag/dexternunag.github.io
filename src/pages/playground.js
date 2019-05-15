import React, { Component } from "react"
import { Spring } from 'react-spring/renderprops'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"
import HomeNav from "../components/home-nav"

import styled from "styled-components"
import PlaygroundBackground from '../images/playground.jpg'

const PlaygroundContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

const PlaygroundDiv = styled.div`
  height: 50vh;
  // min-height: 100vh;

  &.playground--list {
    padding: 350px 300px;
  }
`

const BackgroundColor = styled.div`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000;
`
const BackgroundImage = styled.div`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url(${PlaygroundBackground});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  opacity: 0.5;
`

const PlaygroundHeader = styled.h1`
  padding-left: 40px;
  padding-top: 18px;
`

const PlaygroundText = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;

  line-height: 31px;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  color: #E3E3E3;
`

const PlaygroundTextRedShadow = styled.div`
  z-index: -1;
  position: absolute;
  top: 8px;
  height: 44%;
  width: 100%;
  max-width: ${props => props.maxWidth}%;
  background-color: rgba(214,48,49,0.7);
`

class Playground extends Component {
  render() {
    return (
      <Layout location={this.props['*']} >
        <SEO title="Playground | Web Developer [DEXTER]" />
        
        <PlaygroundContainer>
          <PlaygroundHeader>
            <Header 
              headerName="Playground" 
              hasShadow={false}
            />
          </PlaygroundHeader>
          
          <BackgroundColor />
          <BackgroundImage />

          <PlaygroundDiv>
            <PlaygroundText>
              <PlaygroundTextRedShadow maxWidth={97} />
              Under Construction
            </PlaygroundText>
          </PlaygroundDiv>


        </PlaygroundContainer>

        <HomeNav />
        
      </Layout>
    )
  }
}

export default Playground
