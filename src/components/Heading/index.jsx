import P from 'prop-types';
import * as Styled from './styles';

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
          <Styled.Link>Github</Styled.Link>
          <Styled.Link>LinkedIn</Styled.Link>
        </Styled.Links>
      </Styled.NavBar>
    </Styled.Container>
  );
};
Heading.propTypes = {
  text: P.string.isRequired,
};