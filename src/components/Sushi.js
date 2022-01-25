import React, {useState} from "react";

function Sushi({sushi, balance, onChargeMoney, plates, onCountEmptyPlates}) {
  const [isAte, setIsAte] = useState(false)
  const {name, img_url, price} = sushi

  function handleEat(){
    if(isAte===false){
      if(balance>=price){
        setIsAte(true)
        onChargeMoney((balance)=>balance-price)
        const emptyPlates=[...plates, 1]
        onCountEmptyPlates(emptyPlates)
      }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {/* Tell me if this sushi has been eaten! */}
        {isAte ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
