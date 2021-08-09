import React from 'react';
import './Results.css';

export default function Results(props){
if (props.definition.length){
return(
    <div>
        <h2> {props.definition[0].word}</h2>
         <h4> {props.definition[0].phonetics[0].text}</h4>
         <h5>{props.definition[0].meanings[0].partOfSpeech}</h5>
        <p>{props.definition[0].meanings[0].definitions[0].definition}</p>

      </div>
      )}else {
return null}}

