import React,{useState} from 'react';
import Body from './Components/Body/body';
import Pokeball from './Components/pokeball';

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
      <div>
        <Pokeball showCards={showCards}/>
      </div>
    )
  }
}

export default App;
