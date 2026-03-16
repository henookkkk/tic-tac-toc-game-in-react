import { useState } from "react";


export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false);
    function handleClick(){
        setIsEditing(true);
    }
    let playerName = <span className="player-name">{name}</span>;
    let buttonType = "Edit";
    if(isEditing){
        playerName = <input type="text" />
        buttonType = "save";
    }
    return(
        <li>
          <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleClick}>{buttonType}</button>
        </li>
    );
}