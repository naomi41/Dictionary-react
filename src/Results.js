import React from 'react';
export default function Results(props){

if (props.definition.length){
return(
    <div>
        <h2>{props.definition.word}</h2>
        <p>{props.definition.phonetics[0].text}</p>
      </div>
      )}else {
return null}}