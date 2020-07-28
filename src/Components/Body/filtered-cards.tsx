import React from "react";
import styled from 'styled-components'

const Card = styled.img`
    width:100%;
    height:auto;
    border-radius:10px;
`
const CardDiv = styled.div`
    width:250px;
    height:auto;
    
`
const CardWrapper = styled.div`
    margin-top:50px;
    display:grid;
    grid-template-columns:250px 250px 250px ;
    column-gap:20px;
    grid-gap:10px;
    justify-content:center;
`
const FilteredCards = ({...props}) => {
    const eachPage = props.pokemons.slice(props.min,props.max)
    return (
        <CardWrapper>
            {eachPage.map((a: {
id: string;
imageUrl: string;
}, b: number) => <CardDiv key={b}>
                    <a href={`card/${a.id}`}>
                        <Card src={a.imageUrl} />
                    </a>
                </CardDiv>)} 
        </CardWrapper>
    );
}

export default FilteredCards;