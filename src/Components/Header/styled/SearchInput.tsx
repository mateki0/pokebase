import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const SearchInput = styled.input`
  font-family: 'Courgette', cursive;
  font-weight: 600;
  color: #fff;
  margin: 0 auto;
  border-radius: 30px;
  border: none;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(5, 40, 242, 1) 0%,
    rgba(4, 36, 217, 1) 50%,
    rgba(2, 30, 115, 1) 100%
  );
  &::placeholder {
    color: #fff;
  }
  @media ${device.mobileS} {
    padding: 6px 40px;
    font-size: 14px;
  }

  @media ${device.tablet} {
    padding: 8px 50px;
  }
  @media ${device.laptop} {
    padding: 10px 60px;
    font-size: 16px;
  }
  @media ${device.laptopL} {
    padding: 12px 80px;
    font-size: 18px;
  }
`;
export default SearchInput;
