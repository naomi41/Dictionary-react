import React, {useState} from "react"; 
import axios from "axios";

export default function Dictionary(){
    const [keyword, setKeyword ]= useState(null);

    function handleResponse(response){
    console.log(response.data[0])
    }
    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword}`)
        let url= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(url).then(handleResponse)
    }
    function handleKeyboard(event){
        setKeyword(event.target.value);
    }
    return(
    <form onSubmit={search}>
    <input type="Search" onChange={handleKeyboard} autoFocus={true}></input>
    </form>
    );
}