import styled from 'styled-components';

const FiltersWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  justify-items: center;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
export default FiltersWrapper;
