import P from 'prop-types';
import * as Styled from './styles';
import imgGitHub from '../../assets/images/github.svg'
import imgLinkedin from '../../assets/images/linkedin.svg'
import Image from 'next/image';

export const Heading = ({text}) => {
  return (
    <Styled.Container>
      <Styled.Logo>{text}</Styled.Logo>
      <Styled.NavBar>
        <Styled.Links>
          <Styled.Link>Ínicio</Styled.Link>
          <Styled.Link>Sobre</Styled.Link>
          <Styled.Link>Tech Stack</Styled.Link>
          <Styled.Link>Projetos</Styled.Link>
          <Styled.Link>Contato</Styled.Link>
          <Styled.Link >
            <Image src={imgGitHub} width={30} height={30}/>
          </Styled.Link>
          <Styled.Link>
            <Image src={imgLinkedin}  width={30} height={30}  />
          </Styled.Link>
        </Styled.Links>
      </Styled.NavBar>
    </Styled.Container>
  );
};
Heading.propTypes = {
  text: P.string.isRequired,
};