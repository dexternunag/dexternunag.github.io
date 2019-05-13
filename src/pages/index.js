import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import HomeBackground from '../images/home.jpg'

const HomeContainer = styled.section`
  
`

const BackgroundColor = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #000;
`

const BackgroundImage = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${HomeBackground});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  opacity: 0.5;
`

const HomeHeader = styled.h1`
  position: absolute;
  bottom: 0;
  padding-left: 40px;
  font-family: 'Montserrat',sans-serif;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  font-size: 80px;
  letter-spacing: 25px;

  &::before,
  &::after {
    position: relative;
    top: -6px;
    color: rgba(214, 48, 49, 0.7);
  }

  &::before {
    content: "["; 
  }

  &::after {
    content: "]";
  }
`

const HomeSubHeader = styled.p`
  position: absolute;
  bottom: 110px;
  padding-left: 40px;
  font-family: 'Montserrat',sans-serif;
  font-weight: 200;
  color: #fff;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 15px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Dexter - Home" keywords={[`web developer`, `dexter`, `react`]} />

    <HomeContainer>
      <BackgroundColor />
      <BackgroundImage />

      <HomeSubHeader>Web Developer</HomeSubHeader>
      <HomeHeader>Dexter</HomeHeader>
    </HomeContainer>
  </Layout>
)

export default IndexPage
