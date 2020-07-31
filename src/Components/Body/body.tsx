import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import FilteredCards from './filtered-cards';
import Pages from './pages'
import Navbar from '../Navbar/navbar';
import SearchBar from '../SearchBar/search-bar';

const pokemon = require('pokemontcgsdk');


const Main = styled.main`
    display:flex;
    flex-direction:column;
    width:80%;
    margin: 0 auto;
`
interface ICard {
    
    artist:string,
    id:string,
    name:string,
    nationalPokedexNumber:number,
    imageUrl:string,
    imageUrlHiRes:string,
    convertedRetreatCost:number,
    evolvesFrom:string,
    hp:string,
    number:number,
    rarity:string,
    retreatCost:Array<string>,
    series:string,
    set:string,
    setCode:string,
    subtype:string,
    supertype:string,
    types:Array<string>

}
const Body = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [superType,setSuperType] = useState<string>('');
    const [subType,setSubType] = useState<string>('');
    const [hp, setHp] = useState<string>('');
    const [pokemons, setPokemons] = useState<Array<any>>([]);
    const [page, setPage] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(12);

    const setCurrentSuperType = (e:{currentTarget:{value:string, checked:boolean}}) => {
        
        if(superType === '' && e.currentTarget.checked === true){
            setSuperType(e.currentTarget.value+'|');
        }else if(e.currentTarget.checked === false){
            let replaced = superType.replace(e.currentTarget.value+'|', '')
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
    const setCurrentSubType = (e:{currentTarget:{value:string, checked:boolean}}) =>{
        if(subType === '' && e.currentTarget.checked === true){
            setSubType(e.currentTarget.value+'|');
        }else if(e.currentTarget.checked === false){
            let replaced = subType.replace(e.currentTarget.value+'|', '')
            setSubType(replaced)
        }else if(subType !== '' && e.currentTarget.checked === true ){
            setSubType(subType + e.currentTarget.value + '|')
        }
    }
    const setCurrentHp = (e:{currentTarget:{value:string, checked:boolean}}) =>{
        if(e.currentTarget.checked === true && e.currentTarget.value !== 'all'){
            setHp(e.currentTarget.value);
        } 
        if(e.currentTarget.value === "all"){
            setHp('')
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
    },[page]);

    useEffect(()=>{
        if(query !== '') return
        const fetchData = async()=>{
            try{
                await(
                    pokemon.card.where({pageSize:500,  supertype:superType, types:type, subtype:subType, hp:hp})
                    .then((cards: React.SetStateAction<any[]>)=>{
                        setPokemons(cards);
                        setIsLoading(false);
                    }
                    ));
                
            }catch (error){
                console.log(error)
            }
        }
        
         fetchData()
        console.log(type)
    },[superType, type, subType, hp]);

    const changeQuery = (e: { currentTarget: { value: React.SetStateAction<string>; };key:string }) => {
        if(e.key === "Enter" && e.currentTarget.value.length>=3){
            setQuery(e.currentTarget.value);
        } 
        if(e.key === "Enter" && e.currentTarget.value.length<3){
            alert('The phrase should be at least 3 letters long');
        }
    }
    useEffect(()=>{
        if(query==='') return
        const fetchData = async()=>{
            try{
                await(
                    pokemon.card.where({pageSize:999, supertype:'pokemon', types:type, subtype:subType, hp:hp })
                    .then((cards: ICard[])=>{
                        let filtered: ICard[] = [];
                        cards.map(a=> {

                            if(a.name.toLowerCase().includes(query)){
                                console.log(a)
                                return filtered.push(a)
                            };
                        })
                        setPokemons(filtered);
                        setIsLoading(false);
                    })
                )
            }catch (error){
                console.log(error)
            }
        }
         fetchData()
        
    }, [query,type,subType,hp])
        
    // if pokemons filter => if pokemons.name contains query, set those as Pokemons variable;
    // write it in other useEffect and run every time query changes
    return(
        <Main>
            <SearchBar changeQuery={changeQuery}/>
            <Navbar 
                setCurrentSuperType={setCurrentSuperType} 
                setCurrentType={setCurrentType} 
                setCurrentSubType={setCurrentSubType}
                setCurrentHp={setCurrentHp}    
            />
            <FilteredCards pokemons={pokemons} page={page} min={min} max={max} isLoading={isLoading}></FilteredCards>
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