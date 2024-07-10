import React from 'react'
import Hero from '../components/Hero'
import Form from '../components/Form'

function Contact() {
  return (
    <>
    <Hero
    cName="con"
    heroImg="https://images.unsplash.com/photo-1555786766-e1e69380c4bc?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    aboutText="Hello!!"
    btnClass="hide"
     />

    <Form />
    </>
  )
}

export default Contact