import styled from 'styled-components';

const PageListItem = styled.li<{ isActive?: boolean }>`
  padding: 0 5px;
  color: ${(props) => (props.isActive ? '#003a70' : '#3d7dca')};
  font-size: 24px;
  font-weight: 600;
  transition: all 0.2s ease-in;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #003a70;
  }
`;
export default PageListItem;
