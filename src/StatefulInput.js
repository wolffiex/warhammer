import UseLocalStorage from './UseLocalStorage';
import React, {useState} from 'react';

function StatefulInput(props) {
    const [v, setV] = UseLocalStorage(props.storageKey, props.prompt);
    const change = event => setV(event.target.value)
    return (
        <input className="storageKey" id="storageKey" name="storageKey" value={v} onChange={change}/>
    );
}

export default StatefulInput
