import React from 'react';
import Filters from './filters';


// superType / Type / sub Type / HP
const Navbar = (props: { setCurrentSuperType: any; setCurrentType:any, setCurrentSubType:any, setCurrentHp:any}) => {
    return(
        
            <Filters 
                setCurrentSuperType={props.setCurrentSuperType} 
                setCurrentType={props.setCurrentType} 
                setCurrentSubType={props.setCurrentSubType} 
                setCurrentHp={props.setCurrentHp}
            />
    )
}

export default Navbar;