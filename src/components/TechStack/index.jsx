import P from 'prop-types';
import * as Styled from './styles';
import github from '../../assets/images/akar-icons_github-fill.svg'
import git from '../../assets/images/logos_git-icon.svg'
import react from '../../assets/images/logos_react.svg'
import sass from '../../assets/images/logos_sass.svg'
import css from '../../assets/images/vscode-icons_file-type-css.svg'
import htmlIcon from '../../assets/images/vscode-icons_file-type-html.svg'
import js from '../../assets/images/vscode-icons_file-type-js-official.svg'
import vscode from '../../assets/images/vscode-icons_file-type-vscode.svg'
import nextjs from '../../assets/images/nextjs.svg'
import styledcomponentsIcon from '../../assets/images/styled-components-1.svg'
import Image from 'next/image'



export const TechStack = () => {
  return (
    <Styled.Container id='techstack'>
      <Styled.BoxText>
        <h3>Minha Tech Stack</h3>
        <p> Principais tecnologias que estudei e trabalhei recentemente</p>
      </Styled.BoxText>
      <Styled.Stacks>
        <Image alt='logo html5' src={htmlIcon} width={90} height={90}/>
        <Image alt='logo styled-components' src={styledcomponentsIcon} width={90} height={90} />
        <Image alt='logo css3' src={css} width={90} height={90}/>
        <Image alt='logo sass' src={sass} width={90} height={90}/>
        <Image alt='logo javascript' src={js} width={90} height={90}/>
        <Image alt='logo git' src={git} width={90} height={90}/>
        <Image alt='logo reactjs' src={react} width={90} height={90}/>
        <Image alt='logo github' src={github} width={90} height={90}/>
        <Image alt='logo nextjs' src={nextjs} width={90} height={90}/>
        <Image alt='logo vscode' src={vscode} width={90} height={90}/>
      </Styled.Stacks>
    </Styled.Container>
  );
};
TechStack.propTypes = {
};