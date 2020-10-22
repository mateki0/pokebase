import styled from 'styled-components';
import device from '../../MediaQuerySizes';
const FilterLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  font-family: 'Courgette', cursive;
  align-items: center;
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;
export default FilterLabel;
