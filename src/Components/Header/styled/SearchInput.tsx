import styled from 'styled-components';
const SearchInput = styled.input`
  font-family: 'PokemonSolid';
  letter-spacing: 3px;
  color: #ffcb05;
  margin: 0 auto;
  border-radius: 30px;
  border: none;
  background: #3d7dca;
  box-shadow: 0px 0px 5px 0px #003a70;
  &::placeholder {
    color: #ffcb05;
  }
  font-size: 16px;
  width: 300px;
  height: 40px;
  padding-left: 10px;
`;
export default SearchInput;
