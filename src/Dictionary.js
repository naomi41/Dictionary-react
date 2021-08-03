import React, {useState} from "react"; 

export default function Dictionary(){
    const [keyword, setKeyword ]= useState(null);
    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword}`)
    }
    function handleKeyboard(event){
        console.log(event.target.value);
        setKeyword(event.target.value);
    }
    return(
    <form onSubmit={search}>
    <input type="Search" onChange={handleKeyboard} autoFocus={true}></input>
    </form>
    );
}