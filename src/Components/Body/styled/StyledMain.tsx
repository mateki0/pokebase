import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
  @media only screen and (min-width: 1280px) {
    width: 80%;
  }
`;
export default StyledMain;
