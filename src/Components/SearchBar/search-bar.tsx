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
font-family: 'Courgette', cursive;
font-weight:600;
    color:#fff;
    margin:0 auto ;
    border-radius:30px;
    border:none;
    outline:none;
    background:linear-gradient(90deg, rgba(5,40,242,1) 0%, rgba(4,36,217,1) 50%, rgba(2,30,115,1) 100%);

    &::placeholder{
        color:#fff;
    }
    @media ${device.mobileS}{
        padding:6px 40px;
        font-size:14px;
    }

    @media ${device.tablet}{
        padding:8px 50px;
    }
    @media ${device.laptop}{
        padding:10px 60px;
        font-size:16px;
    }
    @media ${device.laptopL}{
        padding:12px 80px;
        font-size:18px;
    }
`
const WelcomeDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto 20px auto;
    color:#fff;
    font-family: 'Courgette', cursive;
`

const HomeDiv = styled.div`
    text-align:center;
    padding:10px 0;
`
const HomePage = styled.a`
    font-family: 'Courgette', cursive;
    font-size:36px;
    color:#0424D9;
    transition:color .5s linear;
    font-weight:600;
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
    color:#F2CB05;
    &:hover{
        cursor:pointer;
    }

    @media ${device.mobileS}{
        font-size:26px;
    }
    @media ${device.tablet}{
        font-size:28px;
    }
    @media ${device.laptop}{
        font-size:36px;
    }
    @media ${device.laptopL}{
        font-size:42px;
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