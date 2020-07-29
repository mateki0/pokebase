import React from 'react';
import styled from 'styled-components';

const Filter = styled.div`
    
    padding:8px 15px;
    align-items:center;
    

`
const FilterLabel = styled.label`
display:flex;
justify-content:space-between;
    padding:0 5px;
   font-size:18px;
   font-family:'MuseoW01-900';
`
const HpLabel = styled(FilterLabel)`
    text-transform:uppercase;
`
const FilterCheckbox = styled.input`
    
`
export const SuperTypeFilter = ({...props}) => {
    
    return(
        <Filter>
            <FilterLabel>{props.value}
            <FilterCheckbox value={props.value} type='checkbox'  onChange={(e) => props.setCurrentSuperType(e)}/>
            </FilterLabel>
        </Filter>
    )
}
export const TypeFilter = ({...props}) => {
    
    return(
        <Filter>
            <FilterLabel>{props.value}
            <FilterCheckbox value={props.value} type='checkbox' onChange={(e) => props.setCurrentType(e)}/>
            </FilterLabel>
        </Filter>
    )
}
export const SubTypeFilter = ({...props}) => {
    
    return(
        <Filter>
            <FilterLabel>{props.value}
            <FilterCheckbox value={props.value} type='checkbox' onChange={(e) => props.setCurrentSubType(e)}/>
            </FilterLabel>
        </Filter>
    )
}
export const HpFilter = ({...props}) => {
    
    return(
        <Filter>
            <HpLabel>{props.value}
            <FilterCheckbox value={props.value} type='radio' name="hp" onChange={(e) => props.setCurrentHp(e)}/>
            </HpLabel>
        </Filter>
    )
}


