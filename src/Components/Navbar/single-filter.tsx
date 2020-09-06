import React from 'react';
import styled from 'styled-components';
import device from '../MediaQuerySizes'
const Filter = styled.div`
    padding:8px 15px;
    align-items:center;
    
    @media ${device.mobileS}{
        padding:2px 4px;
    }
    @media ${device.tablet}{
        padding:4px 8px;
    }
    @media ${device.laptop}{
        padding:6px 12px;
    }
    @media ${device.laptopL}{
        padding:8px 15px;
    }
`
const FilterLabel = styled.label`
    display:flex;
    justify-content:space-between;
    padding:0 5px;
    font-family: 'Courgette', cursive;
    align-items:center;
    @media ${device.mobileS}{
        font-size:10px;
    }
    @media ${device.tablet}{
        font-size:12px;
    }
    @media ${device.laptop}{
        font-size:14px;
    }
    @media ${device.laptopL}{
        font-size:18px;
    }
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


