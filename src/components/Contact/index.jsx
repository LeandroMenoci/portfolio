import P from 'prop-types';
import * as Styled from './styles';
import imgGitHub from '../../assets/images/github.svg'
import imgLinkedin from '../../assets/images/linkedin.svg'
import Image from 'next/image';
import Link from 'next/link';


export const Contact = () => {
  return (
    <>
    <Styled.Line/>
    <Styled.Container id='contact' >
      <Styled.Title>Leandro Menoci</Styled.Title>
      <Styled.Box>
        <Styled.Infos>+55 (41) 99238-3729</Styled.Infos>
        <Styled.Infos>menoci.leandro@gmail.com</Styled.Infos>
        <Styled.Infos>
          <Link href='https://github.com/LeandroMenoci' passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={imgGitHub} width={30} height={30}/>
            </a> 
          </Link>
        </Styled.Infos>
        <Styled.Infos>
          <Link href='https://www.linkedin.com/in/leandromenoci/' passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={imgLinkedin}  width={30} height={30}  />
            </a>
          </Link>
        </Styled.Infos>
      </Styled.Box>
    </Styled.Container>
    </>
  );
};
Contact.propTypes = {
};