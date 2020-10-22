import styled from 'styled-components';
import device from '../../MediaQuerySizes';

const OpenDropdownButton = styled.button`
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Courgette', cursive;
  background: rgb(5, 40, 242);
  background: linear-gradient(0deg, rgba(5, 40, 242, 1) 0%, rgba(2, 30, 115, 1) 100%);
  box-shadow: 0px 0px 5px 0px rgb(233, 148, 148);
  transition: all 0.5s linear;
  color: #fff;
  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    color: #e6001f;
  }

  @media ${device.mobileS} {
    font-size: 12px;
    padding: 0.3em 1em;
  }

  @media ${device.mobileL} {
    font-size: 14px;
    padding: 0.4em 1.2em;
  }

  @media ${device.tablet} {
    font-size: 16px;
    padding: 0.5em 1.4em;
  }
  @media ${device.laptopL} {
    font-size: 18px;
    padding: 0.6em 2em;
  }
`;
export default OpenDropdownButton;
