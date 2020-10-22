import styled from 'styled-components';
import device from '../../MediaQuerySizes';
const CardsList = styled.ul`
  display: grid;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media ${device.mobileS} {
    margin: 10px auto 0 auto;
    column-gap: 10px;
    grid-gap: 5px;
    grid-template-columns: 70px 70px 70px 70px;
  }
  @media ${device.mobileL} {
    grid-template-columns: 90px 90px 90px 90px;
  }
  @media ${device.tablet} {
    grid-template-columns: 170px 170px 170px 170px;
    column-gap: 40px;
  }
  @media ${device.laptop} {
    grid-gap: 20px;
    column-gap: 50px;
  }
  @media ${device.laptopL} {
    margin-top: 50px;
    grid-template-columns: 250px 250px 250px 250px;
  }
`;
export default CardsList;
