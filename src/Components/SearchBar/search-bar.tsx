import React from 'react';
import styled from 'styled-components'

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
const SearchBar = ({...props}) =>{

    return(
        <SearchDiv>
            <WelcomeDiv>
            <HomeDiv>
                <HomePage href="/">PokeBase</HomePage>
            </HomeDiv>
            </WelcomeDiv>
            <SearchInput placeholder="Find pokemon" onKeyPress={(e) => props.changeQuery(e)}/>
        </SearchDiv>
    )
}
export default SearchBar;