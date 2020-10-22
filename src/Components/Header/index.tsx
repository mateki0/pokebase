import React from 'react';
import HeaderWrapper from './styled/HeaderWrapper';
import HomeLinkWrapper from './styled/HomeLinkWrapper';
import HomeLink from './styled/HomeLink';
import WelcomeWrapper from './styled/WelcomeWrapper';
import InputWrapper from './styled/InputWrapper';
import SearchInput from './styled/SearchInput';
import SearchButton from './styled/SearchButton';

const Header = ({ ...props }) => {
  return (
    <HeaderWrapper>
      <WelcomeWrapper>
        <HomeLinkWrapper>
          <HomeLink href="/">PokeBase</HomeLink>
        </HomeLinkWrapper>
      </WelcomeWrapper>
      <InputWrapper>
        <SearchInput
          placeholder="Find pokemon"
          ref={props.inputRef}
          onKeyPress={(e) => props.changeQuery(e)}
        />
        <SearchButton id="button" onClick={(e) => props.changeQuery(e)}></SearchButton>
      </InputWrapper>
    </HeaderWrapper>
  );
};
export default Header;
