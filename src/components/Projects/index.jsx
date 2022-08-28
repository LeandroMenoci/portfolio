
// import * as Styled from './styles';
// import { useEffect, useState } from 'react';
// // import Link from 'next/link';
// import projectsApi from '../../../data/projectsApi.json'

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const data = await res.json()
//   console.log(data)

//   // Pass data to the page via props
//   return { props: { data } }
// }


// export const Projects = ({data}) => {


 
//   return (
//     <Styled.Container>
//       <Styled.BoxText>
//         <h3>Projetos</h3>
//         <p>Coisas que eu construí até agora</p>
//       </Styled.BoxText>
//       <Styled.BoxProjects>
//         <Styled.Projects>
//           {data && data.map((post) => (
//             <li>{post.title}</li>
//           ))}

//           {/* {posts.map((project) => (
//             <div key={project.id}>
//               <h2>{project.name}</h2>
//               <p>{project.descr}</p>
//               <p>Tech Stack: {project.techStack}</p>
//               <div>
//                 <ul>
//                   <li>
//                     <Image/>
//                     <Link href={project.linkGit}><a>Live Preview</a></Link>
//                   </li>
//                   <li>
//                     <Image/>
//                     <Link href={project.linkProject}><a>View Code</a></Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//           ))} */}
//         </Styled.Projects>
//       </Styled.BoxProjects>
//     </Styled.Container>
//   );
// };
// Projects.propTypes = {
// };