import React, { Component } from "react"
import ScrollSnap from 'scroll-snap'
import { Spring } from 'react-spring/renderprops'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"
import HomeNav from "../components/home-nav"

import styled from "styled-components"
import SkillsBackground from '../images/skills.jpg'

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

const SkillsDiv = styled.div`
  height: 100vh;
  min-height: 100vh;

  &.skills--list {
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
  background-image: url(${SkillsBackground});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  opacity: 0.5;
`

const SkillsHeader = styled.h1`
  position: absolute;
  bottom: 0;
  padding-left: 40px;
`

const SkillsSubHeader = styled.div`
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

const SkillLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const Skill = styled.li`
  display: flex;
  align-items: center;
  text-align: center;

  margin-right: 15px;
  padding: 5px 25px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
  
  color: #000;

  background: rgba(214, 48, 49, 0.7);
`

const snapConfig = {
  scrollSnapDestination: "0% 100%",
  scrollTimeout: 1,
  scrollTime: 500
};

class Skills extends Component {
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
        <SEO title="Skills | Web Developer [DEXTER]" />
        
        <SkillsContainer id="section" ref={this.section}>
          <BackgroundColor />
          <BackgroundImage />

          <SkillsDiv>
            <Spring
              to={{ 
                bottom: hasScrolled ? -160 : 0,
                hasShadow: !hasScrolled,
                display:  hasScrolled ? 'none' : 'initial',
              }}
            >
              {
                ({ bottom, display }) => (
                  <SkillsHeader style={{ bottom }}>
                    <Header 
                      headerName="Skills" 
                      hasShadow={hasScrolled}
                    />
                    <SkillsSubHeader style={{ display }}>

                      <Spring
                        delay={100}
                        from={{ position: 'relative' }}
                        to={{ 
                          left: hasScrolled ? -270 : 0
                        }}
                      >
                        {props => <p style={props}>You are</p>}
                      </Spring>

                      <Spring
                        delay={150}
                        from={{ position: 'relative' }}
                        to={{ 
                          left: hasScrolled ? -400 : 0
                        }}
                      >
                        {props => <p style={props}>Your own limit</p>}
                      </Spring>

                    </SkillsSubHeader> 
                  </SkillsHeader>
                )
              }
            </Spring>
          </SkillsDiv>
          
          <SkillsDiv className="skills--list">
            {/* Info Here */}
            <SkillLists>
              <Skill>html</Skill>
              <Skill>css</Skill>
              <Skill>javascript</Skill>
              <Skill>php</Skill>
              <Skill>scss</Skill>
              <Skill>jquery</Skill>
              <Skill>angular</Skill>
              <Skill>react</Skill>
              <Skill>vue</Skill>
              <Skill>ionic</Skill>
              <Skill>nodejs</Skill>
              <Skill>firebase</Skill>
              <Skill>mongodb</Skill>
              <Skill>rest api</Skill>
              <Skill>electron</Skill>
            </SkillLists>
            
          </SkillsDiv>


        </SkillsContainer>

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

export default Skills
