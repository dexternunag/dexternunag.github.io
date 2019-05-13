import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"
import HomeNav from "../components/home-nav"

import styled from "styled-components"
import ConnectBackground from '../images/connect.jpg'

const ConnectContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

const ConnectDiv = styled.div`
  padding-left: 100px;
  padding-top: 200px;
   
  height: 100vh;
  min-height: 100vh;

  @media screen and (max-width: 575px) {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
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
  background-image: url(${ConnectBackground});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  opacity: 0.5;
`

const ConnectHeader = styled.h1`
  position: absolute;
  padding-left: 40px;
  padding-top: 18px;

  @media screen and (max-width: 575px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`

const ConnectTextContainer = styled.div`
  margin-bottom: 90px;

  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 37px;
    
    color: #D63031;
    text-decoration: none; 
  }

  @media screen and (max-width: 575px) {
    a {
      font-size: 20px;
    }
  }
`

const ConnectTextHeading = styled.h2`
  margin-bottom: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  text-transform: uppercase;
  line-height: 55px;

  color: #fff;
`

const ConnectText = styled.p`
  margin: 0;
  padding-top: 5px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 37px;

  color: #fff;

  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`

const ConnectSocialsContainer = styled.div`

`

const ConnectSocialsHeading = ConnectTextHeading;

const ConnectSocialLists = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;

  @media screen and (max-width: 575px) {
    flex-flow: wrap;
  }
`

const Social = styled.li`
  margin-right: 50px;

  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 80px;

    text-decoration: none;
    text-transform: uppercase;
    line-height: 98px;

    color: #fff;

    &:after {
      content: '.';
      color: ${props => props.color};
    }
  }

  @media screen and (max-width: 575px) {
    a {
      font-size: 50px;
    }
  }
`

class Connect extends Component {
  state = {
    socials: [
      { title: 'fb', color: '#0056BB', link: 'https://fb.com/dxtrr' },
      { title: 'ig', color: '#D662FF', link: 'https://instagram.com/_dexnunag' },
      { title: 'li', color: '#0075FF', link: 'https://www.linkedin.com/in/dexter-nunag-a11327139' },
      { title: 'gh', color: '#303030', link: 'https://github.com/dexternunag' }
    ]
  }

  render() {
    return (
      <Layout location={this.props['*']} >
        <SEO title="Connect | Web Developer [DEXTER]" />
        
        <ConnectContainer>
          <ConnectHeader>
            <Header 
              headerName="Connect" 
              hasShadow={false}
            />
          </ConnectHeader>
          
          <BackgroundColor />
          <BackgroundImage />

          <ConnectDiv>
            <ConnectTextContainer>
              <ConnectTextHeading>Contact</ConnectTextHeading>
              <ConnectText>Feel free to contact me through the email below.</ConnectText>
              <Link to="mailto:nunagdexter@gmail.com">nunagdexter@gmail.com</Link>
            </ConnectTextContainer>

            <ConnectSocialsContainer>
              <ConnectSocialsHeading>Where to find me</ConnectSocialsHeading>
              <ConnectSocialLists>
                {
                  this.state.socials.map((social, i) => (
                    <Social key={i} color={social.color}>
                      <a href={social.link} target="_blank">{social.title}</a>
                    </Social>
                  ))
                }
              </ConnectSocialLists>
            </ConnectSocialsContainer>
          </ConnectDiv>

          <HomeNav />

        </ConnectContainer>
        
      </Layout>
    )
  }
}

export default Connect
