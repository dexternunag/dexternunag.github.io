import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollSnap from 'scroll-snap'
import { Spring } from 'react-spring/renderprops'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"
import HomeNav from "../components/home-nav"

import styled from "styled-components"
import AboutBackground from '../images/about.jpg'

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

const AboutDiv = styled.div`
  height: 100vh;
  min-height: 100vh;

  &.about--info {
    display: flex;
    
    padding-top: 185px;
    padding-left: 35px;
    padding-right: 35px;

    color: #fff;
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
  background-image: url(${AboutBackground});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  opacity: 0.5;
`

const AboutHeader = styled.h1`
  position: absolute;
  bottom: 0;
  padding-left: 40px;
`

const AboutSubHeader = styled.div`
  font-family: 'Montserrat',sans-serif;
  font-size: 70px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -10px;

  p:not(:last-of-type) {
    margin-bottom: -30px;
  }
`

const AboutInfoHolder = styled.div`
  margin-right: 150px;
  width: 100%;
  max-width: 40%;
`

const AboutText = styled.p`
  position: relative;
  margin-bottom: ${props => props.marginBottom || 50}px;

  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;

  line-height: 31px;
  letter-spacing: 0.15em;

  color: #E3E3E3;

  &.about--experience {
    font-weight: bold;
    text-transform: uppercase;
  }
`

const AboutSubText = styled.span`
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15em;
`

const AboutTextRed = styled.span`
  position: relative;

  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.3em;
    color: #E3E3E3;
    text-decoration: none;
  }
`

const AboutTextRedShadow = styled.div`
  z-index: -1;
  position: absolute;
  top: 8px;
  height: 44%;
  width: 100%;
  max-width: ${props => props.maxWidth}%;
  background-color: rgba(214,48,49,0.7);
`


const snapConfig = {
  scrollSnapDestination: "0% 100%",
  scrollTimeout: 1,
  scrollTime: 500
};

class About extends Component {
  section = React.createRef()

  state = {
    hasScrolled: false
  }

  bindScrollSnap() {
    const element = this.section.current
    const snapObject = new ScrollSnap(element, snapConfig)

    snapObject.bind(this.snapScrollCallback)
  }

  snapScrollCallback = () => {
    this.setState({hasScrolled: !this.state.hasScrolled})
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    const { hasScrolled } = this.state
    return (
      <Layout location={this.props['*']} >
        <SEO title="About | Web Developer [DEXTER]" />
        
        <AboutContainer id="section" ref={this.section}>
          <BackgroundColor />
          <BackgroundImage />

          <AboutDiv>
            <Spring
              to={{ 
                bottom: hasScrolled ? -160 : 0,
                hasShadow: !hasScrolled,
                display:  hasScrolled ? 'none' : 'initial',
              }}
            >
              {
                ({ bottom, display }) => (
                  <AboutHeader style={{ bottom }}>
                    <Header 
                      headerName="About" 
                      hasShadow={hasScrolled}
                    />
                    <AboutSubHeader style={{ display }}>

                      <Spring
                        delay={100}
                        from={{ position: 'relative' }}
                        to={{ 
                          left: hasScrolled ? -270 : 0
                        }}
                      >
                        {props => <p style={props}>Strive</p>}
                      </Spring>

                      <Spring
                        delay={150}
                        from={{ position: 'relative' }}
                        to={{ 
                          left: hasScrolled ? -400 : 0
                        }}
                      >
                        {props => <p style={props}>For</p>}
                      </Spring>

                      <Spring
                        delay={200}
                        from={{ position: 'relative' }}
                        to={{ 
                          left: hasScrolled ? -410 : 0
                        }}
                      >
                        {props => <p style={props}>Greatness</p>}
                      </Spring>

                    </AboutSubHeader> 
                  </AboutHeader>
                )
              }
            </Spring>
          </AboutDiv>
          
          <AboutDiv className="about--info">
            {/* Info Here */}
            <AboutInfoHolder>
              <AboutText>
                Hi, my name is Dexter! I'm a fullstack web developer based in Angeles City, Pampanga, Philppines. I'm a big proponent of the any JavaScript frameworks, preferably work with React and Node.js
              </AboutText>
              <AboutText>
                I love to create websites and web applications, paying close attention to all the small details. Also I enjoy doing programming in several coding languages, solving problems, and even doing occasional design work. 
              </AboutText>
              {/* <AboutText>
                Sounds good? Great!
                No matter if you are a startup in need of a landing page, a small business who wants a unique web shop, or an entrepreneur who has an idea for an exciting web application.

                Please feel free to contact me and we'll discuss the rest!
              </AboutText> */}

              <AboutText>
                <AboutTextRed>
                  <AboutTextRedShadow maxWidth={97} />
                  <a href="../DexterNunag-Resume.pdf" download>DOWNLOAD RESUME</a>
                </AboutTextRed>
              </AboutText>
            </AboutInfoHolder>

            <AboutInfoHolder>
              <AboutText className="about--experience" marginBottom={89}>
                <AboutSubText>Education</AboutSubText>
                Bachelors of Science in Computer Engineering, Holy Angel University, 2017
              </AboutText>
              <AboutText className="about--experience">
                <AboutSubText>Experience</AboutSubText>
                Website Developer, Fullstack HQ, Inc., 2017-Present
              </AboutText>
            </AboutInfoHolder>

          </AboutDiv>


        </AboutContainer>

        <Spring
          to={{ 
            visibility: hasScrolled ? 'unset' : 'hidden',
          }}
        >
          {
            ({ visibility }) => (
              <div style={{ visibility }}>
                <HomeNav />
              </div>
            )
          }
        </Spring>
        

      </Layout>
    )
  }
}

export default About
