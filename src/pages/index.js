import * as React from "react"

const bodyStyles = {
  margin: 0,
  padding:0,
}
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  paddingBottom: 60,
  backgroundColor: "#F4E7E7",
}
const headingStyles = {
  marginTop: 0,
  maxWidth: 320,
}
const topNavStyles= {
  position: "sticky",
  top: 0, 
  backgroundColor: "white",
}
const listStyles = {
  listStyleType: "none", 
  display: "flex", 
  justifyContent: "flex-end",
  paddingTop: 10, 
  paddingBottom: 10, 
  margin: 0,
}
const listItemStyles = {
  fontWeight: 700,
  fontSize: 16,
  color: "black",
  paddingTop: 10, 
  paddingLeft: 16, 
  paddingRight: 16, 
  paddingBottom: 10, 
  textDecoration: "none",
}
const sectionStyle = {
  paddingTop: 80,
  paddingBottom: 40,
  height: "85vh", 
  display: "grid",
  gridTemplateColumns: "auto auto auto", 
  gap: 40,
  paddingLeft: 200, 
  paddingRight: 200,
}
const sectionGridOne = {
  gridColumnStart: 1, 
  gridColumnEnd: 3,
  paddingLeft: 40,
  border: "4px solid pink",
}
const sectionGridTwo = {
  gridColumnStart: 2, 
  gridColumnEnd: 4,
  paddingLeft: 40,
  border: "4px solid pink",
}
const basicGridItem = {
  paddingLeft: 40,
  border: "4px solid pink",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <nav style={topNavStyles}>
        <ul style={listStyles}>
          <li><a href="#home" style={listItemStyles}>Home</a></li>
          <li><a href="#about-me" style={listItemStyles}>About Me</a></li>
          <li><a href="#background" style={listItemStyles}>Background</a></li>
          <li><a href="#projects" style={listItemStyles}>Projects</a></li>
          <li><a href="#contact-me" style={listItemStyles}>Contact Me</a></li>
        </ul>
      </nav>
      <div id="home" style={sectionStyle}>
        <div style={sectionGridOne}>
          <h1 style={headingStyles}>
          Hello World! 🎉
          </h1>
        </div>
        <div style={basicGridItem}>
          <span>Home</span>
        </div>
      </div>
      <div id="about-me" style={sectionStyle}>
        <div style={basicGridItem}>
          <span>About Me</span>
        </div>
        <div style={sectionGridTwo}>
          <span>About Me</span>
        </div>
      </div>
      <div id="background" style={sectionStyle}>
        <div style={sectionGridOne}>
          <span>Background</span>
        </div>
        <div style={basicGridItem}>
          <span>Background</span>
        </div>
      </div>
      <div id="projects" style={sectionStyle}>
        <div style={basicGridItem}>
          <span>Projects</span>
        </div>
        <div style={sectionGridTwo}>
          <span>Projects</span>
        </div>
      </div>
      <div id="contact-me" style={sectionStyle}>
        <div style={sectionGridOne}>
          <span>Contact Me</span>
        </div>
        <div style={basicGridItem}>
          <span>Contact Me</span>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => (<>
  <html lang="en"/>
  <title>Home Page</title>
  <body style={bodyStyles}></body>
</>)
