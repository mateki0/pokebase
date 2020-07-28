import React from 'react';
import styled from 'styled-components';
const FiltersDiv = styled.div`
    display:flex;
    margin:0 auto;
    justify-content:center;
`
const SupertypesDiv = styled.div`
    display:flex;
    flex-direction:column;
    background:#fff;
`
const TypesDiv = styled(SupertypesDiv)`
    margin-left:20px;
`
const SingleFilter = styled.div`
    display:flex;
    padding:8px 15px;
    align-items:center;
    justify-content:space-between;
`
const FilterLabel = styled.label`
padding:0 5px;
   font-size:18px;
   font-family:'MuseoW01-900';
`
const FilterCheckbox = styled.input`
    
`
const Filters = ({...props}) =>{
    return (
        <FiltersDiv>
                <SupertypesDiv>
                    <SingleFilter>
                        <FilterLabel htmlFor="energy">Energy</FilterLabel>
                        <FilterCheckbox value="Energy" id="energy" type="checkbox"  onChange={(e) => props.setCurrentSuperType(e)}/>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="pokemon">Pokemon</FilterLabel>
                        <FilterCheckbox value="Pokemon" id="pokemon" type="checkbox"  onChange={(e) => props.setCurrentSuperType(e)}/>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="trainer">Trainer</FilterLabel>
                        <FilterCheckbox value="Trainer" id="trainer" type="checkbox"  onChange={(e) => props.setCurrentSuperType(e)}/>
                    </SingleFilter>
                </SupertypesDiv>
                <TypesDiv>
                    <SingleFilter>
                        <FilterLabel>Colorless</FilterLabel>
                        <FilterCheckbox value="Colorless" type="checkbox" onChange={(e) => props.setCurrentType(e)}/>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel>Darkness</FilterLabel>
                        <FilterCheckbox value="Darkness" type="checkbox" onChange={(e) => props.setCurrentType(e)}/>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel>Dragon</FilterLabel>
                        <FilterCheckbox value="Dragon" type="checkbox" onChange={(e) => props.setCurrentType(e)}/>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel>Fairy</FilterLabel>
                        <FilterCheckbox value="Fairy" type="checkbox" onChange={(e) => props.setCurrentType(e)}/>
                    </SingleFilter>
                </TypesDiv>
            </FiltersDiv>
    )
}

export default Filters;