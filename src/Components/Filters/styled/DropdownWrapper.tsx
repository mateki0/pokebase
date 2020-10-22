import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media ${device.mobileS} {
    padding: 0 5px;
  }
  @media ${device.mobileL} {
    padding: 0 8px;
  }
  @media ${device.tablet} {
    padding: 0 10px;
  }
  @media ${device.laptop} {
    padding: 0 15px;
  }
  @media ${device.laptopL} {
    padding: 0 20px;
  }
`;

export default DropdownWrapper;
