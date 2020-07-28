import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import styled from 'styled-components'
const pokemon = require('pokemontcgsdk');


const Main = styled.main`
    display:flex;
    flex-direction:column;
    width:80%;
    margin: 0 auto;
`
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

const Type = () => {
    const [pokemons, setPokemons] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const {id} = useParams();

    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                await (pokemon.card.where({pageSize:12, types:id, supertype:'pokemon' }).then((res: any) => setPokemons(res)))
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
            <Main>
                <CardWrapper>
                    {pokemons.map((a:{id:string, imageUrl:string},b:number)=>(
                        <CardDiv key={b}>
                            <a href={`/card/${a.id}`}>
                                <Card src={a.imageUrl}/>
                            </a>
                        </CardDiv> 
                    ))} 
                </CardWrapper>
                
            </Main>
        )
    }
        return(
            <div>
                Loading...
            </div>
        )
}
export default Type;