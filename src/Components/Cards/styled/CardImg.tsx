import styled from 'styled-components';

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: all 0.8s;
  &:hover {
    cursor: pointer;
    transform: rotateX(0);
    transform: scale(1.3);
  }
`;
export default CardImg;
