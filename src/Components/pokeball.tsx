import React from 'react';
import styled,{keyframes} from 'styled-components';
import device from './MediaQuerySizes'
const rotate = keyframes`
0%{
    transform:rotateY(0deg);
    box-shadow: 0px 0px 35px 10px rgba(255,105,79,1);
}
25%{
    
    box-shadow: 0px 0px 35px 10px rgba(245,71,71,1);
}
50%{
    box-shadow: 0px 0px 35px 10px rgba(245,44,44,1);
}

100%{
    transform:rotateY(360deg);
    box-shadow: 0px 0px 35px 10px rgba(255,13,13,1);
}
`
const PokeDiv = styled.div`
min-height:100%;
display:flex;
flex-direction:column;
width:40vw;
`
const PokeImg = styled.img`
border-radius:50%;
    width:100%;
   
    transition:all 1s;
    animation:${rotate} 5s linear infinite;
    &:hover{
        cursor:pointer;
        
    }
`
const OpenSpan = styled.span`
font-family:'MuseoW01-900';
color:#fff;
padding-bottom:20px;
    
    text-align:center;

    @media ${device.mobileS}{
        font-size:26px;
    }
    @media ${device.mobileL}{
        font-size:30px;
    }
    @media ${device.tablet}{
        font-size:36px;
    }
    @media ${device.laptop}{
        font-size:40px;
    }
    @media ${device.laptopL}{
        font-size:44px;
    }
`

const Pokeball = ({...props}) => {
    
    return(
        <PokeDiv>
            <OpenSpan>Click Pokeball</OpenSpan>
            <PokeImg onClick={()=>props.showCards()} src='./pokeball.png'/>
        </PokeDiv>
    )
}

export default Pokeball;