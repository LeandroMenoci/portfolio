import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  max-height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.h1`
    max-width: 20rem;
    max-height: 6rem;
    background-image: linear-gradient(90deg, rgba(19,176,245,1) 0%, rgba(231,15,170,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

export const NavBar = styled.nav`
    width: 79rem;
`;

export const Links = styled.ul`
    width: 100% ;
    display: flex;
    justify-content: space-around;
    align-items: center;
 
`;

export const Link = styled.li`
    list-style: none;
`;

