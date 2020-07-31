import React from 'react';
import styled from 'styled-components'
import {MdSearch} from 'react-icons/md';
import device from '../MediaQuerySizes'
const SearchDiv = styled.div`
    margin:0 0 40px 0;
    display:flex;
    flex-direction:column;
`
const SearchInput = styled.input`
    margin:0 auto ;
    padding:12px 80px;
    border-radius:30px;
    border:none;
    outline:none;
    font-size:18px;

    @media ${device.mobileS}{
        padding:6px 40px;
        font-size:14px;
    }
`
const WelcomeDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto 20px auto;
    color:#fff;
    font-family:'MuseoW01-900';
`

const HomeDiv = styled.div`
text-align:center;
padding:10px 0;
`
const HomePage = styled.a`
font-family:'MuseoW01-900';
    font-size:36px;
    color:#fff;
    transition:color .5s linear;
    &:hover{
        color:#e6001f;
    }
`
const Search = styled.div`
    margin:0 auto ;
    position:relative;
`

const SearchButton = styled(MdSearch)`
    position:absolute;
    font-size:42px;
    top:2px;
    right:10px;

    &:hover{
        cursor:pointer;
    }

    @media ${device.mobileS}{
        font-size:26px;
    }
    @media ${device.mobileL}{
        font-size:28px;
    }
`
const SearchBar = ({...props}) =>{
    
    return(
        <SearchDiv>
            <WelcomeDiv>
            <HomeDiv>
                <HomePage href="/">PokeBase</HomePage>
            </HomeDiv>
            </WelcomeDiv>
            <Search>
                <SearchInput placeholder="Find pokemon" ref={props.inputRef} onKeyPress={(e) => props.changeQuery(e)}/>
                <SearchButton id="button" onClick={(e) => props.changeQuery(e)}></SearchButton>
            </Search>
        </SearchDiv>
    )
}
export default SearchBar;