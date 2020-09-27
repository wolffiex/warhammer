import React, {useState} from 'react';
import sample_figure from './figure.jpg';
import UseLocalStorage from './UseLocalStorage';

const attributes = [
    {'desc': "Name", 'type': 'text', key:"Name"},
    {'desc': "Move", 'type': 'number', key:"M"},
    {'desc': "WeaponSkill", 'type': 'number', key:"WS"},
    {'desc': "Balistic Skill", 'type': 'number', key:"BS"},
    {'desc': "Strength", 'type': 'number', key:"S"},
    {'desc': "Toughness", 'type': 'number', key:"T"},
    {'desc': "Wounds", 'type': 'number', key:"W"},
    {'desc': "Attacks", 'type': 'number', key:"A"},
    {'desc': "Leadership", 'type': 'number', key:"Ld"},
    {'desc': "Save", 'type': 'number', key:"Sv"},
];


function Roster() {
    const getInputID= a => 'input-id-' + a.key;
    const [profiles, setProfiles] = useState([]);
    const addProfile = (event) => {
        console.log(event.target);
        const els = event.target.elements
        const vals = attributes.reduce((acc, a) => {
            return { ...acc, [a.key]: els[getInputID(a)].value};
        }, {})
        console.log(vals)
        setProfiles(profiles.push(vals));
        event.preventDefault();
        return false;
    }
    const headers = attributes.map( a => <th>{a.desc}</th>);
    const formContent = attributes.map( a => {
        const id = getInputID(a);
        return (
            <div className="pure-control-group">
                <label htmlFor={id}>{a.desc}</label>
                <input type={a.type} id={id} name={id}/>
            </div>
        );
    })
    return (
        <div>
            <table>
                <thead>
                <tr>{headers}</tr>
                </thead>
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
