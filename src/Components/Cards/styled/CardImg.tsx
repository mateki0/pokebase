import styled from 'styled-components';
import device from '../../MediaQuerySizes';
const CardImg = styled.img`
  @media ${device.laptop} {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: all 0.8s;
    &:hover {
      transform: rotateX(0);
      transform: scale(1.3);
      box-shadow: 20px -20px 10px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;
export default CardImg;
