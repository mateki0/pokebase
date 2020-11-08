import styled from 'styled-components';

const PokeballWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  width: 60vw;
  @media only screen and (min-width: 1024px) {
    margin-top: 50px;
    width: 40vw;
  }
`;

export default PokeballWrapper;
