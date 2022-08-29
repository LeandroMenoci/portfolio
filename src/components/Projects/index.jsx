
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import projectsApi from '../../../pages/api/projectsApi.json'
import Image from 'next/image';
import imgLink from '../../assets/images/link.svg'
import imgGitHub from '../../assets/images/github.svg'


export const Projects = () => {

  const [projects, setProjects] = useState(projectsApi)

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

 
  return (
    <Styled.Container>
      <Styled.BoxText>
        <h3>Projetos</h3>
        <p>Coisas que eu construí até agora</p>
      </Styled.BoxText>
      <Styled.BoxProjects>
          {projects.map((project) => (
            <Styled.Projects key={project.id}>
              <Styled.BoxDescrip>
                <h2>{project.name}</h2>
                <p>{project.descr}</p>
                <p>Tech Stack: <span>{project.techStack}</span></p>
              </Styled.BoxDescrip>
              <Styled.BoxLinks>
                
                <Link href={project.linkProject} passHref><a target="_blank" rel="noopener noreferrer"><span><Image src={imgLink} width={20} height={20} /></span>Link Preview</a></Link>
                
                <Link href={project.linkGit} passHref><a target="_blank" rel="noopener noreferrer"><span><Image src={imgGitHub} width={20} height={20} /></span>View Code</a></Link>
                
              </Styled.BoxLinks>
            </Styled.Projects>
          ))}
      </Styled.BoxProjects>
      <Styled.Button>
        <Link href='https://github.com/LeandroMenoci?tab=repositories' passHref><a target="_blank" rel="noopener noreferrer">Ver mais</a></Link>
      </Styled.Button>
    </Styled.Container>
  );
};
Projects.propTypes = {
};