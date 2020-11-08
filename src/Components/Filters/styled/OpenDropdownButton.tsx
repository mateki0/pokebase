import styled from 'styled-components';

const OpenDropdownButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-family: 'PokemonSolid';
  letter-spacing: 2px;
  background: #3d7dca;
  box-shadow: 0px 0px 5px 0px #003a70;
  transition: all 0.2s;
  color: #ffcb05;
  margin-top: 20px;

  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    background: #003a70;
  }
  @media only screen and (min-width: 1024px) {
    margin: 0;
  }
`;
export default OpenDropdownButton;
