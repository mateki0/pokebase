import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Filters from './filters';


const NavLinks = styled.li`
    margin:10px 0;
`
const StyledLink = styled(Link)`
    text-decoration:none;
    color:#000;
    font-size:18px;
    font-family:'MuseoW01-900';
    text-transform:capitalize;
    &:hover{
        text-decoration:underline;
    }
    transition:all .5s;
`

// superType / Type / sub Type / HP
const Navbar = (props: { setCurrentSuperType: any; setCurrentType:any}) => {
    return(
        
            <Filters setCurrentSuperType={props.setCurrentSuperType} setCurrentType={props.setCurrentType}/>
    //    funkcja zmieniajaca zapytanie w zaleznosci od wybranych checkboxow!!
    )
}

export default Navbar;