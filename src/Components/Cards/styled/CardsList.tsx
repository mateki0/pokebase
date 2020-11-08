import styled from 'styled-components';

const CardsList = styled.ul`
  display: grid;
  width: 90%;
  margin-top: 20px;
  justify-self: center;
  list-style-type: none;
  padding: 0;
  grid-template-columns: 150px 150px;
  gap: 10px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    grid-template-columns: 150px 150px 150px 150px;
    gap: 20px;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 50px;
    grid-template-columns: 200px 200px 200px 200px;
    gap: 30px;
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: 200px 200px 200px 200px;
    gap: 40px;
  }
`;
export default CardsList;
