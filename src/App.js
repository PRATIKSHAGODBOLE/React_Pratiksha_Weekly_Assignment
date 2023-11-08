
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Fetchapi from './Second Assignment/Fetchapi';
// import Counter from './First Assignment/Counter';
// import { useState, useEffect } from 'react';



function App() {
  // const [count, setcount] = useState(1)

  // useEffect(() => {
  //   console.log("Count" + count)
  // }, [count])
  
  return (
    <div className="App">
      {/* <Counter count={count} setcount={setcount}/> */}

      {/* ----------------------------- */}
      <Fetchapi/>
      {/* ------------------------------ */}
    </div>
  );
}

export default App;
