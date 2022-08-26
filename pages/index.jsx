import { About } from '../src/components/About'
import {Heading} from '../src/components/Heading'
import { TechStack } from '../src/components/TechStack'

export default function Home() {
  return (
    <>
    <Heading text='Portfolio'/>
    <About/>
    <TechStack/>
    </>
  )
}
