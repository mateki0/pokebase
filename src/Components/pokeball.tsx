import React,{useEffect, useRef} from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import device from './MediaQuerySizes'

const PokeDiv = styled.div`
    min-height:100%;
    display:flex;
    flex-direction:column;
    width:40vw;
`
const PokeImg = styled.img`
    opacity:0;
    border-radius:50%;
    width:100%;

    transition:all 1s;
    
    &:hover{
        cursor:pointer;
        
    }
`
const OpenSpan = styled.span`
    font-family: 'Courgette', cursive;
    color:#0424D9;
    padding-bottom:20px;
    font-weight:600;
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
    const Poke = useRef<HTMLImageElement>(null!);
    useEffect(()=>{
        gsap.registerEffect({
            name: "fade",
            effect: (targets: gsap.TweenTarget, config: { duration: number; }) => {
                return gsap.to(targets, {duration: config.duration, opacity: 1});
            },
            defaults: {duration: 1},
            extendTimeline: true, 
        });
        gsap.effects.fade(Poke.current)
        
    },[])
    return(
        <PokeDiv>
            <OpenSpan>Click Pokeball</OpenSpan>
            <PokeImg ref={Poke} onClick={()=>props.showCards()} src='./pokeball.png'/>
        </PokeDiv>
    )
}

export default Pokeball;