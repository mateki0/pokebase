import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const SearchButton = styled(MdSearch)`
  position: absolute;
  font-size: 42px;
  right: 10px;
  color: #ffcb05;
  &:hover {
    cursor: pointer;
  }
`;
export default SearchButton;
