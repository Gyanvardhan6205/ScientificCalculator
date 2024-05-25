import React from "react";
import Calculator from "./components/Calculator";

const App = ()=>
  {
    return(
      <div className="App">
        {/* <h1>Scientfic Calculator</h1> */}
        <Calculator />

          <p className="developer">Developed by <span>Gyan</span></p>
      </div>
    )
  }
  export default App