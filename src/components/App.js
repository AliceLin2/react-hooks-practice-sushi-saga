import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [balance, setBalance] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(data=>setSushiList(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer 
        sushiList={sushiList} 
        balance={balance} 
        onChargeMoney={setBalance} 
        plates={plates} 
        onCountEmptyPlates={setPlates}
      />
      <Table balance={balance} plates={plates}/>
    </div>
  );
}

export default App;
