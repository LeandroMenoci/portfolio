import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
      font-weight: 700;
      font-size: 5rem;
      margin-bottom: 5rem;
    }

    p {
      font-weight: 400;
      font-size: 3.2rem;
      margin-bottom: 10rem;
    }
`;

export const BoxProjects = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  text-align: center;
`;

export const Projects = styled.div`
  background: rgb(51, 50, 50);
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
  transition: transform 100ms ease-in-out;
  padding: 2.5rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BoxDescrip = styled.div`
  h2 {
    font-weight: 500;
    font-size: 2.8rem;
    padding: .5rem;
  }

  p {
    font-weight: 400;
    font-size: 1.8rem;
    padding: .5rem;

    span {
      font-weight: 300;
      font-size: 1.4rem;
    }
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    color: #FFF;
    
    span {
      margin-right: 1rem;
    }
  }
`;

export const Button = styled.button`
  width: 32%;
  background-color: rgb(67, 114, 64);
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  color: white;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: white;
  }
`;