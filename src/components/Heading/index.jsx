import P from 'prop-types';
import * as Styled from './styles';
import imgGitHub from '../../assets/images/github.svg'
import imgLinkedin from '../../assets/images/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image';

export const Heading = ({text}) => {
  const rotas = [{
    label: 'Inicio',
    to: '/'
  }, {
    label: 'Sobre',
    to: '/#about'
  }, {
    label: 'Tech Stack',
    to: '/#techstack'
  }, {
    label: 'Projetos',
    to: '/#projects'
  }, {
    label: 'Contato',
    to: '/#contact'
  }];
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Logo>{text}</Styled.Logo>
        <Styled.NavBar>
          <Styled.Links>
            {rotas.map((rota, index) => (
              <Styled.LinkLi key={index}>
                <Link href={rota.to}>
                  {rota.label}
                </Link>
              </Styled.LinkLi>
            ))}
            <Styled.LinkLi >
              <Link href='https://github.com/LeandroMenoci' passHref><a target="_blank" rel="noopener noreferrer"><Image src={imgGitHub} width={30} height={30}/></a></Link>
            </Styled.LinkLi>
            <Styled.LinkLi>
              <Link href='https://www.linkedin.com/in/leandromenoci/' passHref><a target="_blank" rel="noopener noreferrer"><Image src={imgLinkedin}  width={30} height={30}  /></a></Link>
              
            </Styled.LinkLi>
          </Styled.Links>
        </Styled.NavBar>
      </Styled.Container>
    </Styled.Header>
  );
};
Heading.propTypes = {
  text: P.string.isRequired,
};