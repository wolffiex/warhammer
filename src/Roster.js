import React, {useState} from 'react';
import sample_figure from './figure.jpg';
import MultiSelect from "react-multi-select-component";
import StatefulInput from "./StatefulInput";

const Weapons = () => {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear" },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" },
  ];
 
  const [selected, setSelected] = useState([]);
 
  return (
    <MultiSelect
    options={options}
    value={selected}
    onChange={setSelected}
    labelledBy={"Select"}
    />
  );
}

function Roster(props) {
    return (
        <div className="pure-g">
            <div className="pure-u-1-2">
                <img src={sample_figure} className=".pure-img"/>
            </div>
            <div className="pure-u-1-2">
                <StatefulInput storageKey="characterName" />
                <div>
                <label htmlFor="profile">
                    Profile:
                </label>
                <select name="profile" id="profile">{
                    props.profiles.map(p => (
                        <option value={p.Name}>{p.Name}</option>
                    ))}
                </select>
                </div>
                <label>
                    Weapons:
                </label>
                <Weapons />
            </div>
        </div>
    );
}

export default Roster;
