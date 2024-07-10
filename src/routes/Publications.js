import React from 'react'
import Hero from '../components/Hero'
import PubIntro from '../components/PubIntro'
import PaperType from '../components/PaperType'

function Publications() {
  return (
    <>
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/38/awhCbhLqRceCdjcPQUnn_IMG_0249.jpg?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="My Research"
    btnClass="hide"
    />
    <PubIntro />
    <PaperType />
    </>
  )
}

export default Publications