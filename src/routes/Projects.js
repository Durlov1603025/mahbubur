import React from 'react'
import Hero from '../components/Hero'
import Projct from "../asset/pro.jfif"
import ProjectList from '../components/ProjectList'

function Projects() {
  return (
    <>
    <Hero
    cName="proj"
    heroImg={Projct}
    btnClass="hide" 
    />

    <ProjectList />
    </>
  )
}

export default Projects