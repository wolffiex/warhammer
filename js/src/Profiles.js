import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const attributes = [
    {'desc': "Name", 'type': 'text', key:"Name", hideKey:true, },
    {'desc': "Points", 'type': 'number', key:"P", hideKey:true, },
    {'desc': "Move", 'type': 'number', key:"M"},
    {'desc': "Weapon Skill", 'type': 'number', key:"WS"},
    {'desc': "Balistic Skill", 'type': 'number', key:"BS"},
    {'desc': "Strength", 'type': 'number', key:"S"},
    {'desc': "Toughness", 'type': 'number', key:"T"},
    {'desc': "Wounds", 'type': 'number', key:"W"},
    {'desc': "Attacks", 'type': 'number', key:"A"},
    {'desc': "Leadership", 'type': 'number', key:"Ld"},
    {'desc': "Save", 'type': 'number', key:"Sv"},
];


function Roster(props) {
    const getInputID= a => 'input-id-' + a.key;
    const addProfile = (event) => {
        const els = event.target.elements
        const vals = attributes.reduce((acc, a) => {
            return { ...acc, [a.key]: els[getInputID(a)].value};
        }, {id: uuidv4()})

        // eslint-disable-next-line
        const hasMissing = Object.values(vals).some(v => v == "");

        if (!hasMissing) {
            props.setProfiles(props.profiles.concat(vals));
            event.target.reset();
        }
        event.preventDefault();
        return false;
    }
    const headers = attributes.map( a => 
        <th key={a.key}>{a.hideKey ? a.desc : a.key}</th>);
    const formContent = attributes.map( a => {
        const id = getInputID(a);
        const labelStr = a.hideKey ? a.desc : a.desc + " ("+a.key+")";
        return (
            <div className="pure-control-group" key={id}>
                <label htmlFor={id}>{labelStr}</label>
                <input type={a.type} id={id} name={id} autoComplete="off"/>
            </div>
        );
    })
    const removeProfile = id => function (event) {
        // eslint-disable-next-line
        props.setProfiles(props.profiles.filter(p => p.id != id))
        event.preventDefault();
    }
    const profileRows = props.profiles.map(p => (
        <tr key={p.id}>{
            attributes.map(a =>
            <td key={p.id+a.key}>{p[a.key]}</td>)
        }<td><form onSubmit={removeProfile(p.id)}><button type="submit">
            <span role="img" aria-label="x">❎</span>
        </button></form></td></tr>));
    return (
        <div>
            <table>
                <thead>
                <tr>{headers}<th>Remove</th></tr>
                </thead>
                <tbody>{profileRows}</tbody>
            </table>
            <h2>Add Profile:</h2>
            <form className="pure-form pure-form-aligned" onSubmit={addProfile}>
                {formContent}
                <button type="submit" className="pure-button pure-button-primary">
                Add Profile
                </button>
                
            </form>
        </div>
    );
}

export default Roster;
