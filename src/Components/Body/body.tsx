import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import FilteredCards from './filtered-cards';
import Pages from './pages'
import Navbar from '../Navbar/navbar';

const pokemon = require('pokemontcgsdk');


const Main = styled.main`
    display:flex;
    flex-direction:column;
    width:80%;
    margin: 0 auto;
`
const Body = () =>{
    const [type, setType] = useState<string>('');
    const [superType,setSuperType] = useState<string>('');
    const [pokemons, setPokemons] = useState<Array<any>>([]);
    const [page, setPage] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(12);

    const setCurrentSuperType = (e:{currentTarget:{value:string, checked:boolean}}) => {
        
        if(superType === '' && e.currentTarget.checked === true){
            setSuperType(e.currentTarget.value+'|');
        }else if(e.currentTarget.checked === false){
            let replaced = superType.replace(e.currentTarget.value, '')
            setSuperType(replaced)
        }else if(superType !== '' && e.currentTarget.checked === true ){
            setSuperType(superType + e.currentTarget.value + '|')
        }
    }
    const setCurrentType = (e:{currentTarget:{value:string, checked:boolean}}) =>{
        if(type === '' && e.currentTarget.checked === true){
            setType(e.currentTarget.value+'|');
        }else if(e.currentTarget.checked === false){
            let replaced = type.replace(e.currentTarget.value+'|', '')
            setType(replaced)
        }else if(type !== '' && e.currentTarget.checked === true ){
            setType(type + e.currentTarget.value + '|')
        }
    }

    const prevPage = () => {
        setPage(page-1)
    }
    const nextPage = () =>{
        setPage(page+1);
    }
    const changePage = (e:{currentTarget:{value:string}, key:string}) => {
        if(e.key === "Enter"){
            let page = parseInt(e.currentTarget.value);
            setPage(page);
        }
    }
    const choosePage = (e:{currentTarget:{innerText:string}}) => {
        let page = parseInt(e.currentTarget.innerText);
        
        setPage(page);
    }
    useEffect(()=>{
        setMin((page*12)-12)
        setMax(page*12);
    },[page])
    useEffect(()=>{
        pokemon.card.where({pageSize:500, type:type, supertype:superType})
        .then((cards: React.SetStateAction<any[]>)=>{
            setPokemons(cards)
        });
         
        console.log(type)
    },[superType, type])
        
    return(
        <Main>
            <Navbar setCurrentSuperType={setCurrentSuperType} setCurrentType={setCurrentType}/>
            <FilteredCards pokemons={pokemons} page={page} min={min} max={max}></FilteredCards>
            <Pages 
                choosePage={choosePage} 
                changePage={changePage} 
                prevPage={prevPage} 
                nextPage={nextPage} 
                
                length={pokemons.length} 
                page={page}/>
        </Main>
    )
}
export default Body;