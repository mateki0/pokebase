import styled from 'styled-components';

const SingleCardItem = styled.li`
  box-shadow: 5px -5px 5px 0px #3d7dca;
  border-radius: 10px;

  opacity: 0;
  &:hover {
    z-index: 1002;
  }
  transition: all 0.8s;
  height: auto;
`;
export default SingleCardItem;
