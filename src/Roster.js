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

function Roster() {
    return (
        <div className="pure-g">
            <div className="pure-u-1-2">
                <img src={sample_figure} className=".pure-img"/>
            </div>
            <div className="pure-u-1-2">
                <StatefulInput storageKey="characterName" />
                <div>
                <label htmlFor="role">
                    Role:
                </label>
                <select name="role" id="role">
                    <option value="volvo">Commando</option>
                    <option value="audi">Sniper</option>
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
