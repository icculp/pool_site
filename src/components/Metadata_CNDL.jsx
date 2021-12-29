import React from "react";
import JSONPretty from 'react-json-pretty';


let metadata = {
    "name": "Candlestake", 
    "description": "It's better to light a candle than to curse the darkness",
    "ticker": "CNDL",
    "homepage": "https://www.candlestake.com",
    "6e7d1291fd140ccb8ef09366fca1acf8" : ""}

// const items = metadata.map((i) =>{
//         return ( <h1>{i.title}</h1> )
//      });


function Metadata_CNDL() {
  return (
    <div className="Metadata_CNDL">
    <JSONPretty id="json-pretty" data={metadata}></JSONPretty>

    </div>
  );
}

export default Metadata_CNDL;