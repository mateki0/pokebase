import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const OpenSpan = styled.span`
  font-family: 'Courgette', cursive;
  color: #0424d9;
  padding-bottom: 20px;
  font-weight: 600;
  text-align: center;

  @media ${device.mobileS} {
    font-size: 26px;
  }
  @media ${device.mobileL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 36px;
  }
  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.laptopL} {
    font-size: 44px;
  }
`;

export default OpenSpan;
