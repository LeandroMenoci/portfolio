import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgb(51, 50, 50);
  box-shadow: 0 0 10px rgba(0,0,0,0.6);

`;

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  max-height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const LinkLi = styled.li`
    list-style: none;

    a {
      text-decoration: none;
      color: #D9D9D9;
    }
`;

