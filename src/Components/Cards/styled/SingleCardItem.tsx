import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const SingleCardItem = styled.li`
  box-shadow: 10px -10px 5px 0px rgba(0, 0, 0, 0.75);
  opacity: 0;
  &:hover {
    z-index: 1002;
  }
  transition: all 0.8s;
  height: auto;
  @media ${device.mobileS} {
    width: 70px;
  }
  @media ${device.mobileL} {
    width: 90px;
  }
  @media ${device.tablet} {
    width: 170px;
  }
  @media ${device.laptopL} {
    width: 250px;
  }
`;
export default SingleCardItem;
