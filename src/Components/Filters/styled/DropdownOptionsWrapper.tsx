import styled from 'styled-components';

const DropdownOptionsWrapper = styled.div<{ isOpen: boolean }>`
  width: 200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #3d7dca;
  top: 6.5vh;
  transition: all 0.5s;
  will-change: opacity, visibility;
  border: none;
  border-radius: 4px;
  z-index: 1001;
  color: #ffcb05;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;
export default DropdownOptionsWrapper;
