import React from 'react';
import CharacterCard from './ChracterCard';

export default function WordCard(props){
    return(
        <div>
            {
                Array.from(props.value).map((c,i) => <CharacterCard value={c} key={i}/>)
            }
        </div>
    )
}