import { useState } from "react"

export default function Player({initialName,symbol,isActive, onChangeName}){

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName);


    function handleEditClick(){
            setIsEditing(editing => !editing)
            if(isEditing === true){
              onChangeName(symbol, playerName)
            }
            
    }

    
    function handleChange(event){
        return(
            setPlayerName(event.target.value)
        )
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;     //This will render when button is not clicked

    if(isEditing === true){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />              //This will render when button is clicked
    }

    return (
      <>
        <li className={isActive ? "active" : undefined}>
        <span className='player'>
          {editablePlayerName}
          <span className='player-symbol'>{symbol}</span>
        </span>
        </li>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </>
    )
 
}