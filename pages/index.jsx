import { About } from '../src/components/About'
import {Heading} from '../src/components/Heading'
import { Projects } from '../src/components/Projects'
import { TechStack } from '../src/components/TechStack'
// import projectsApi from '../data/projectsApi.json'
import projectsApi from './api/projectsApi.json'
import { useEffect, useState } from 'react'



export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(projectsApi)
      .then(response => response.json())
      .then(data => {
        setProjects({
          name: data.name,
        })
      })
      .catch(error => console.log(error.message))
  }, [])

  // console.log(projects.data.name)

  
  return (
    <>
    <Heading text='Portfolio'/>
    <About/>
    <TechStack/>
    <div>
      oi
      {projects && projects.map((post) => (
              <li>{post.data.name}</li>
            ))}
    </div>
    </>
  )
}


// export async function getStaticProps() {
//   const url = projectsApi
//   const res = await fetch(url)
//   const posts = await res.json()
//   console.log(posts)

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }