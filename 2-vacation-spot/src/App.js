import './App.css';
import Data from './Components/Data.js'
import Cards from './Components/Cards.js'
import Header from './Components/Header';


function App() {
  const Vacation = Data.map(trips =>{
return(
  <Cards
  key={trips.id}
  {...trips}
  />
)
  })
  return (
    <>
    <Header />
   {Vacation}
   </>
  );
}

export default App;


