import styled, { css } from 'styled-components';


const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  padding-top: 5rem;
  max-width: 120rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 22rem;
  margin-bottom: 35rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 22em;

  position: relative;

  border: 5px;
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    top: -10px; right: -10px; bottom: -10px; left: -10px;
    border-radius: inherit; 
    background: linear-gradient(to right, #13B0F5, #E70FAA);
  
  }

  img {
    border-radius: 50%;
  }
`;

export const ContainerText = styled.div`
  width: 64rem;
  height: 30rem;
`;

export const Text = styled.h2`
  font-weight: 700;
  font-size: 5rem;
  line-height: 7rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

