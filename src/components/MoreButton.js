import React from "react";

function MoreButton({count, onMoreSushi}) {

  return <button onClick={e=>onMoreSushi(count+1)}>More sushi!</button>;
}

export default MoreButton;
