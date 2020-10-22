import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const FilterWrapper = styled.div`
  padding: 8px 15px;
  align-items: center;
  @media ${device.mobileS} {
    padding: 2px 4px;
  }
  @media ${device.tablet} {
    padding: 4px 8px;
  }
  @media ${device.laptop} {
    padding: 6px 12px;
  }
  @media ${device.laptopL} {
    padding: 8px 15px;
  }
`;
export default FilterWrapper;
