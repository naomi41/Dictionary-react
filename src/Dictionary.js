import React, {useState} from "react"; 
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(){
    const [keyword, setKeyword ]= useState(null);
    const [definition, setDefinition ]= useState({});

    function handleResponse(response){
    setDefinition(response.data[0])
    console.log(response.data[0]);
    }
    function search(event){
        event.preventDefault();
        let url= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(url).then(handleResponse)
    }
    function handleKeyboard(event){
        setKeyword(event.target.value);
    }
    return(
    <div >
    <form onSubmit={search}>
    <input type="Search"  onChange={handleKeyboard} autoFocus={true}></input>
    </form>
    <Results definition={definition}/>
    </div>
    );
}