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
const SubTypesDiv = styled(SupertypesDiv)`
    margin-left:20px;
`
const HpDiv = styled(SupertypesDiv)`
    margin-left:20px;
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
                <SubTypesDiv>
                    <SingleFilter>
                        <FilterLabel htmlFor="ex">EX</FilterLabel>
                        <FilterCheckbox id="ex" value="EX" type="checkbox" onChange={(e) => props.setCurrentSubType(e)} />
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="special">Special</FilterLabel>
                        <FilterCheckbox id="special" value="Special" type="checkbox" onChange={(e) => props.setCurrentSubType(e)} />
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="restored">Restored</FilterLabel>
                        <FilterCheckbox id="restored" value="Restored" type="checkbox" onChange={(e) => props.setCurrentSubType(e)} />
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="lvlup" >Level Up</FilterLabel>
                        <FilterCheckbox id="lvlup" value="Level Up" type="checkbox" onChange={(e) => props.setCurrentSubType(e)} />
                    </SingleFilter>
                </SubTypesDiv>
                <HpDiv>
                    <SingleFilter>
                        <FilterLabel htmlFor="gt50">GT50</FilterLabel>
                        <FilterCheckbox id="gt50" value="gt50" type="radio" name="hp" onChange={(e) => props.setCurrentHp(e)}></FilterCheckbox>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="gt100">GT100</FilterLabel>
                        <FilterCheckbox  id="gt100" value="gt100" type="radio" name="hp" onChange={(e) => props.setCurrentHp(e)}></FilterCheckbox>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="gt150">GT150</FilterLabel>
                        <FilterCheckbox id="gt150" value="gt150" type="radio" name="hp" onChange={(e) => props.setCurrentHp(e)}></FilterCheckbox>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="lt100">LT100</FilterLabel>
                        <FilterCheckbox id="lt100" value="lt100" type="radio" name="hp" onChange={(e) => props.setCurrentHp(e)}></FilterCheckbox>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="lt150">LT150</FilterLabel>
                        <FilterCheckbox id="lt150" value="lt150" type="radio" name="hp" onChange={(e) => props.setCurrentHp(e)}></FilterCheckbox>
                    </SingleFilter>
                    <SingleFilter>
                        <FilterLabel htmlFor="all">All</FilterLabel>
                        <FilterCheckbox id="all" value="all" name="hp" type="radio" onChange={(e) => props.setCurrentHp(e)}></FilterCheckbox>
                    </SingleFilter>
                </HpDiv>
            </FiltersDiv>
    )
}

export default Filters;