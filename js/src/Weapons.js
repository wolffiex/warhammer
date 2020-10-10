import React from 'react';

const attributes = [
    {'desc': "Ranged Type",  'options': ["Assault", "Heavy", "Rapid Fire", "Grenage", "Pistol", "Melee"], key:"T" },
    {'desc': "Num Ranged", key:"R"},
    {'desc': "Range", key:"R"},
    {'desc': "Melee", key:"R"},
    {'desc': "Strength", key:"S"},
    {'desc': "Armor Piercing", key:"AP"},
    {'desc': "Damage", key:"D"},
    {'desc': "Abilities", key:"A"},
];

const markerlight = {
    profiles : [{
        name: "Markerlight",
        "Ranged Type" : "Heavy",
        "Num Ranged" : 1,
        "Abilities" : "Markerlights"}]
};

const PulseBlaster = {
    name: "Pulse Blaster",
    profiles : [{
        "profileName" : "Close range",
        "Ranged Type" : "Assault",
        "Num Ranged" : 2,
        "Range" : "5",
        "S" : 6,
        "AP": -2,
        "D": 1},
    {
        "profileName" : "Medium range",
        "Ranged Type" : "Assault",
        "Num Ranged" : 2,
        "Range" : "10",
        "S" : 5,
        "AP": -1,
        "D": 1}]
};


const thead = <thead><tr>
    <th>Name</th>
    <th>Range</th>
    <th>Type</th>
    <th>Strength (S)</th>
    <th>Armor Piercing (AP)</th>
    <th>Damage (D)</th>
</tr></thead>
function Weapons(props) {
    return (<div>
        <table>
            {thead}
        </table>
    </div>);
}
export default Weapons;
