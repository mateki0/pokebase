import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import device from '../../MediaQuerySizes';

const SearchButton = styled(MdSearch)`
  position: absolute;
  font-size: 42px;
  top: 2px;
  right: 10px;
  color: #f2cb05;
  &:hover {
    cursor: pointer;
  }
  @media ${device.mobileS} {
    font-size: 26px;
  }
  @media ${device.tablet} {
    font-size: 28px;
  }
  @media ${device.laptop} {
    font-size: 36px;
  }
  @media ${device.laptopL} {
    font-size: 42px;
  }
`;
export default SearchButton;
