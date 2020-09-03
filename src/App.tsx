import React,{useState} from 'react';
import styled,{ createGlobalStyle } from 'styled-components'
import Body from './Components/Body/body';
import Pokeball from './Components/pokeball';

const GlobalStyle = createGlobalStyle`
  body,html{
    top:0;
    margin:0;
    height:100%;
    background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%);
  #root{
    height:100%;
    top:0;
    margin:0;
    left:0;
    right:0;
  }
  }
`
const PokeAppDiv = styled.div`
  min-height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`
function App() {
  const [isClicked, setIsClicked] = useState(false);

  const showCards = () => {
    setIsClicked(true)
  }
  if(isClicked){
  return (
    <div>
      <Body/>
    </div>
  );
  } else{
    return(
      <>
      <GlobalStyle/>
      <PokeAppDiv> 
        <Pokeball showCards={showCards}/>
      </PokeAppDiv>
      </>
    )
  }
}

export default App;
