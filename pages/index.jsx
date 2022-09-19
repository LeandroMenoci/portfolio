import { About } from '../src/components/About'
import { Heading } from '../src/components/Heading'
import { Projects } from '../src/components/Projects'
import { TechStack } from '../src/components/TechStack'
import { Contact } from '../src/components/Contact'
import Head from 'next/head'




export default function Home() {

  return (
    <>
      <Head>
        <title>Leandro Menoci</title>
      </Head>
      <Heading text='Portfolio' />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  )
}


export async function getStaticProps() {
  return {
    props: {
    },
  }
}