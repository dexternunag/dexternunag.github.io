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
  height: 100vh;
  min-height: 100vh;
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


        </PlaygroundContainer>

        <HomeNav />
        
      </Layout>
    )
  }
}

export default Playground
