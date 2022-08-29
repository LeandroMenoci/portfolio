import { About } from '../src/components/About'
import {Heading} from '../src/components/Heading'
import { Projects } from '../src/components/Projects'
import { TechStack } from '../src/components/TechStack'
// import projectsApi from '../data/projectsApi.json'
import projectsApi from './api/projectsApi.json'
import { useEffect, useState } from 'react'
import { Contact } from '../src/components/Contact'



export default function Home() {
  

  return (
    <>
    <Heading text='Portfolio'/>
    <About/>
    <TechStack/>
    <Projects/>
    <Contact/>
    </>
  )
}


export async function getStaticProps() { 
  return {
    props: {
      posts,
    },
  }
}