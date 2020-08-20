import React from 'react';
import styled,{keyframes} from 'styled-components';

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
    display:flex;
    justify-content:center;
    margin-top:50px;
    
`
const PokeImg = styled.img`
border-radius:50%;
    width:40vw;
    height:auto;
    transition:all 1s;
    animation:${rotate} 5s linear infinite;
    &:hover{
        cursor:pointer;
        
    }
`

const Pokeball = ({...props}) => {
    
    return(
        <PokeDiv>
            <PokeImg onClick={()=>props.showCards()} src='./pokeball.png'/>
        </PokeDiv>
    )
}

export default Pokeball;