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
  width: 100%;
  max-width: 72rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  margin-bottom: 150px;

  h3 {
    font-weight: 700;
    font-size: 4rem;
  }

  p {
    font-weight: 400;
    font-size: 3rem;
    text-align: center;
  }
`;

export const Stacks = styled.div`
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 24rem;
  margin-bottom: 19rem;
`;
