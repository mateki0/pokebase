import styled from 'styled-components';

const DropdownOptionsWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: rgb(5, 40, 242);
  background: linear-gradient(0deg, rgba(5, 40, 242, 1) 0%, rgba(2, 30, 115, 1) 100%);
  top: 7.3vh;
  transition: all 0.5s;
  will-change: opacity, visibility;
  border: none;
  border-radius: 4px;
  z-index: 1001;
  color: #fff;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;
export default DropdownOptionsWrapper;
