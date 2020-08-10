import React from "react";
import styled from 'styled-components'
import LoadingIcon from "../loading-icon";
import device from '../MediaQuerySizes'
const Card = styled.img`
    width:100%;
    height:auto;
    border-radius:10px;
`
const CardDiv = styled.div`
    
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
const CardWrapper = styled.div`
    display:grid;
    justify-content:center;
    
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
    }
    @media ${device.laptopL}{
        margin-top:50px;
        grid-template-columns:250px 250px 250px 250px ;
        column-gap:20px;
        grid-gap:10px;
    }

`
const FilteredCards = ({...props}) => {
    const eachPage = props.pokemons.slice(props.min,props.max)
    if(!props.isLoading){
    return (
        <CardWrapper>
            {eachPage.map((a: {
id: string;
imageUrl: string;
imageUrlHiRes:string;
}, b: number) => <CardDiv key={b}>
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


// dokonczyc media query