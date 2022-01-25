import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiList, balance, onChargeMoney, plates, onCountEmptyPlates}) {
  const [count, setCount] = useState(0)
  const sushiSet = sushiList.slice(4*count, 4*count+4)
  return (
    <div className="belt">
      {sushiSet.map(sushi=><Sushi 
                              key={sushi.id} 
                              sushi={sushi} 
                              balance={balance} 
                              onChargeMoney={onChargeMoney}
                              plates={plates} 
                              onCountEmptyPlates={onCountEmptyPlates}
                            />)}
      <MoreButton count={count} onMoreSushi={setCount}/>
    </div>
  );
}

export default SushiContainer;
