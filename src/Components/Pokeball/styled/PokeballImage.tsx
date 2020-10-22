import styled from 'styled-components';

const PokeImage = styled.img`
  opacity: 0;
  border-radius: 50%;
  width: 100%;
  transition: all 1s;
  &:hover {
    cursor: pointer;
  }
`;
export default PokeImage;
