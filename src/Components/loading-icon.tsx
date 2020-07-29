import React from 'react';
import styled,{keyframes} from 'styled-components';

const skBounce = keyframes`
    0%,100%{
        transform:scale(0.0)
    } 50% {
        transform:scale(1.0)
    }

`
const Spinner = styled.div`
width:80px;
height:80px;
position:relative;
margin:200px auto;
`

const DoubleBounce = styled.div`
    width:100%;
    height:100%;
    border-radius:50%;
    background-color:#fff;
    opacity:0.6;
    position:absolute;
    top:0;
    left:0;

    animation:${skBounce} 2.0s infinite ease-in-out;
`
const DoubleBounce2 = styled(DoubleBounce)`
    animation-delay: -1.0s;
`
const LoadingIcon = () => {
    return(
        <Spinner>
            <DoubleBounce/>
            <DoubleBounce2/>
        </Spinner>
    )
}

export default LoadingIcon;