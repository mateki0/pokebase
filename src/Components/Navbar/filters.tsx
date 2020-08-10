import React,{useState,useEffect, useRef} from 'react';
import styled from 'styled-components';
import {SuperTypeFilter, TypeFilter,SubTypeFilter, HpFilter} from './single-filter';
import device from '../MediaQuerySizes'
interface IOpenProps{
    isSuperOpen:boolean;
}
interface ITypeProps{
    isTypeOpen:boolean;
}
interface ISubProps{
    isSubOpen:boolean;
}
interface IHpProps{
    isHpOpen:boolean;
}
const FiltersDiv = styled.div`
    display:flex;
    margin:0 auto;
    justify-content:center;
`
const MixinDiv = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    background: rgb(233,148,148);
    background: linear-gradient(0deg, rgba(233,148,148,1) 0%, rgba(255,232,75,1) 100%);
    top:6vh;
    transition: all .5s;
    will-change:opacity,visibility;
    border:none;
    box-shadow:0px 0px 5px 0px rgb(233,148,148);
    border-radius:4px;
`
const SupertypesDiv = styled(MixinDiv)<IOpenProps>`
opacity:0;
visibility:hidden;
    ${({isSuperOpen}) => isSuperOpen && `
    opacity:1;
    visibility:visible;
        `}
`
const TypesDiv = styled(MixinDiv)<ITypeProps>`
opacity:0;
visibility:hidden;
    ${({isTypeOpen}) => isTypeOpen && `
    opacity:1;
    visibility:visible;
        `};
    
`

const SubTypesDiv = styled(MixinDiv)<ISubProps>`
opacity:0;
visibility:hidden;
    ${({isSubOpen}) => isSubOpen && `
    opacity:1;
    visibility:visible;
        `};
   
`
const HpDiv = styled(MixinDiv)<IHpProps>`
    opacity:0;
    visibility:hidden;
    ${({isHpOpen}) => isHpOpen && `
        opacity:1;
        visibility:visible;
        
        `};
    
    
`

const OpenDropdown = styled.button`
    border-radius:4px;
    border:none;
    outline:none;
    font-size:16px;
    font-family:'MuseoW01-900';
    background: rgb(233,148,148);
    background: linear-gradient(0deg, rgba(233,148,148,1) 0%, rgba(255,232,75,1) 100%);
    box-shadow:0px 0px 5px 0px rgb(233,148,148);
    transition: all .5s linear;

    &:hover{
        cursor:pointer;
        color:#e6001f;
    }

    @media ${device.mobileS}{
        font-size:12px;
        padding:0.3em 1em;
    }

    @media ${device.mobileL}{
        font-size:14px;
        padding:0.4em 1.2em;
    }

    @media ${device.tablet}{
        font-size:16px;
        padding:0.5em 1.4em;
    }
    @media ${device.laptopL}{
        font-size:18px;
        padding:0.6em 2em;
    }
`
const FirstOpen = styled(OpenDropdown)`
    margin-left:0;
`
const Dropdown = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    padding:0 20px;
    @media ${device.mobileS}{
        
        padding:0 5px;
    }
    @media ${device.mobileL}{
        
        padding:0 8px;
    }
    @media ${device.tablet}{
        
        padding:0 10px;
    }
    @media ${device.laptop}{
        
        padding:0 15px;
    }
    @media ${device.laptopL}{
        
        padding:0 20px;
    }
`
const Filters = ({...props}) =>{
    const [isSuperOpen, setIsSuperOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [isHpOpen, setIsHpOpen] = useState(false);
    const superRef = useRef<HTMLDivElement>(null!);
    const typeRef = useRef<HTMLDivElement>(null!);
    const subRef = useRef<HTMLDivElement>(null!);
    const hpRef = useRef<HTMLDivElement>(null!);

    
    const closeDropdowns = (e:{currentTarget:{innerText:string}}) => {
        switch(e.currentTarget.innerText){
            case 'SuperType':
                setIsSuperOpen(true);
                setIsTypeOpen(false);
                setIsSubOpen(false);
                setIsHpOpen(false);
            break;
            
            case 'Type':
                setIsSuperOpen(false);
                setIsTypeOpen(true);
                setIsSubOpen(false);
                setIsHpOpen(false);
            break;

            case 'SubType':
                setIsSuperOpen(false);
                setIsTypeOpen(false);
                setIsSubOpen(true);
                setIsHpOpen(false);
            break;
            
            case 'HP':
                setIsSuperOpen(false);
                setIsTypeOpen(false);
                setIsSubOpen(false);
                setIsHpOpen(true);
            break;
        }
            
    }
    const handleClickOutside = (e: any) =>{
        if(superRef && typeRef && subRef && hpRef){
            if(!superRef.current.contains(e.target) && !typeRef.current.contains(e.target) && !subRef.current.contains(e.target) && !hpRef.current.contains(e.target)){
                setIsSuperOpen(false);
                setIsTypeOpen(false);
                setIsSubOpen(false);
                setIsHpOpen(false);
            }
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside);
        return()=>{
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])
    return (
        <FiltersDiv>
            <Dropdown ref={superRef}>
                <FirstOpen onClick={(e)=>closeDropdowns(e)}>SuperType</FirstOpen>
                    <SupertypesDiv isSuperOpen={isSuperOpen} >
                        <SuperTypeFilter value='Energy' setCurrentSuperType={props.setCurrentSuperType}/>
                        <SuperTypeFilter value='Pokemon' setCurrentSuperType={props.setCurrentSuperType}/>
                        <SuperTypeFilter value='Trainer' setCurrentSuperType={props.setCurrentSuperType}/>
                    </SupertypesDiv>
            </Dropdown>
                <Dropdown ref={typeRef}>
                    <OpenDropdown onClick={(e)=>closeDropdowns(e)}>Type</OpenDropdown>
                    <TypesDiv isTypeOpen={isTypeOpen}>
                        <TypeFilter value='Colorless' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Darkness' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Dragon' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Fairy' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Fighting' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Fire' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Grass' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Lightning' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Metal' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Psychic' setCurrentType={props.setCurrentType}/>
                        <TypeFilter value='Water' setCurrentType={props.setCurrentType}/>
                    </TypesDiv>
                </Dropdown>
                <Dropdown ref={subRef}>
                    <OpenDropdown onClick={(e)=>closeDropdowns(e)}>SubType</OpenDropdown>
                    <SubTypesDiv isSubOpen={isSubOpen}>
                        <SubTypeFilter value='EX' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Special' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Restored' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Level Up' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='MEGA' setCurrentSubType={props.setCurrentSubType} />
                        <SubTypeFilter value='Technical Machine' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Item' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Stadium' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Supporter' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Stage 1' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='GX' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Pokemon Tool' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Basic' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='LEGEND' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='Stage 2' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value='BREAK' setCurrentSubType={props.setCurrentSubType}/>
                        <SubTypeFilter value="Rocket's Secret Machine" setCurrentSubType={props.setCurrentSubType}/>
                    </SubTypesDiv>
                </Dropdown>
                <Dropdown ref={hpRef}>
                    <OpenDropdown onClick={(e)=>closeDropdowns(e)}>HP</OpenDropdown>
                    <HpDiv isHpOpen={isHpOpen}>
                       <HpFilter value='lt50' type="radio" setCurrentHp={props.setCurrentHp}/>
                       <HpFilter value='lt100' type="radio" setCurrentHp={props.setCurrentHp}/>
                       <HpFilter value='lt150' type="radio" setCurrentHp={props.setCurrentHp}/>
                       <HpFilter value='gt50' type="radio" setCurrentHp={props.setCurrentHp}/>
                       <HpFilter value='gt100' type="radio" setCurrentHp={props.setCurrentHp}/>
                       <HpFilter value='gt150' type="radio" setCurrentHp={props.setCurrentHp}/>
                       <HpFilter value='gt200' type="radio" setCurrentHp={props.setCurrentHp}/>
                       <HpFilter value='all' type="radio" setCurrentHp={props.setCurrentHp}/>
                    </HpDiv>
                </Dropdown>
            </FiltersDiv>
    )
}

export default Filters;