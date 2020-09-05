import React,{useEffect} from "react";
import {gsap} from 'gsap';
import styled from 'styled-components'
import LoadingIcon from "../loading-icon";
import device from '../MediaQuerySizes'
const Card = styled.img`
@media ${device.laptop}{
    display:block;
    width:100%;
    height:auto;
    border-radius:10px;
    
    transition:all .8s;
    &:hover{
        transform:rotateX(0);
        transform:scale(1.3);
        box-shadow: 20px -20px 10px 0px rgba(0,0,0,0.75);
    }
}
`
const CardDiv = styled.li`
box-shadow: 10px -10px 5px 0px rgba(0,0,0,0.75);
    opacity:0;
    &:hover{
        z-index:1002;
    }
    transition:all .8s;
    height:auto;
    
    @media ${device.mobileS}{
        width:70px;
    }
    @media ${device.mobileL}{
        width:90px;
    }
    @media ${device.tablet}{
        width:170px;
    }
    @media ${device.laptopL}{
        width:250px;
    }
`
const CardWrapper = styled.ul`
    display:grid;
    justify-content:center;
    list-style-type:none;
    padding:0;
    margin:0;
    @media ${device.mobileS}{
        margin:10px auto 0 auto;
        column-gap:10px;
        grid-gap:5px;
        grid-template-columns:70px 70px 70px 70px;
    }

    @media ${device.mobileL}{
        
        grid-template-columns:90px 90px 90px 90px;
    }
    @media ${device.tablet}{
        grid-template-columns:170px 170px 170px 170px;
        column-gap:40px;
    }
    @media ${device.laptop}{
        grid-gap:20px;
        column-gap:50px;
        
    }
    @media ${device.laptopL}{
        margin-top:50px;
        grid-template-columns:250px 250px 250px 250px ;
        
        
    }
`
const FilteredCards = ({...props}) => {
    const eachPage = props.pokemons.slice(props.min,props.max);
    const myElements:any[] = [];
    useEffect(()=>{
        let tl = gsap.timeline();
    
        tl.fromTo(myElements, {opacity:0}, {duration:1, opacity: 1,  stagger:0.2})
        
    },[myElements])
    if(!props.isLoading){
    return (
        <CardWrapper >
            {eachPage.map((a: {
id: string;
imageUrl: string;
imageUrlHiRes:string;
}, index: number) => <CardDiv key={index} ref={li=> myElements[index] = li}>
                    <a href={a.imageUrlHiRes}>
                        <Card src={a.imageUrl} />
                    </a>
                </CardDiv>)} 
        </CardWrapper>
    );
} 
return(
    <LoadingIcon/>
)
}

export default FilteredCards;
