import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import {useParams} from 'react-router';
const pokemon = require('pokemontcgsdk');

const CardImg = styled.img`
    width:100%;
    height:auto;
    border-radius:10px;
`
const CardDiv = styled.div`
    width:400px;
    height:auto;
    padding:0 20px;
`
const CardWrapper = styled.div`
    margin-top:50px;
    display:flex;
    justify-content:center;
`
interface ICard {
    
        artist?:string,
        id?:string,
        name?:string,
        nationalPokedexNumber?:number,
        imageUrl?:string,
        imageUrlHiRes?:string,
        convertedRetreatCost?:number,
        evolvesFrom?:string,
        hp?:string,
        number?:number,
        rarity?:string,
        retreatCost?:Array<string>,
        series?:string,
        set?:string,
        setCode?:string,
        subtype?:string,
        supertype?:string,
        types?:Array<string>
    
}

const Card = () =>{
    const [pokemons, setPokemons] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async() =>{
            try{
                await (pokemon.card.find(id)).then((res: { card: ICard[]; })=>setPokemons(res.card))
                setIsLoading(false);
            
            }catch (error){
                console.log(error)
                setIsLoading(true)
            }
    }
        fetchData();
    },[id])
    
    console.log(pokemons)
    if(!isLoading){
    return(
        <div>
            <CardWrapper>
                <CardDiv>
                    <a href={pokemons.imageUrlHiRes}>
                        <CardImg src={pokemons.imageUrlHiRes} alt="pokemonCard"/>
                    </a>
                </CardDiv>
            </CardWrapper>
        </div>
    )
    }
    return (
        <div>
            ...Loading
        </div>
    )
}
export default Card