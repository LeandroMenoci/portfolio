import P from 'prop-types';
import * as Styled from './styles';
import Image from 'next/image'
import perfil from '../../assets/images/perfil.jpg'

export const About = () => {
  return (
    <Styled.Container>
      <Styled.ContainerText>
      <Styled.Text>Oi 👋, meu nome é <spam>Leandro</spam> e eu estudo para me tornar um grande dev Front-end</Styled.Text>
      </Styled.ContainerText>
      <Styled.Image>
        <Image alt='Foto do Leandro, homem branco, cabelo cacheado da cor castanho, usa óculos e uma camiseta preta, está em um fundo branco' src={perfil} width={350} height={350}/>
      </Styled.Image>
    </Styled.Container>
  );
};
About.propTypes = {
};