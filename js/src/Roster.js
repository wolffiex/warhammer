import React, {useState} from 'react';
import sample_figure from './figure.jpg';
import MultiSelect from "react-multi-select-component";
import { v4 as uuidv4 } from 'uuid';

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

function Character(props) {
    const c = props.info;
    const name = "name" in props.info ? props.info.name : "New Character";
    const changeName = e => props.updateInfo({...c, name: e.target.value});
    return (
        <form><div className="pure-g">
            <div className="pure-u-1-2">
                <img alt="placeholder" src={sample_figure} className=".pure-img"/>
            </div>
            <div className="pure-u-1-2">
                <input type="hidden" name="id" value={c.id} />
                <input type="text" name="name" value={name} autoComplete="off" 
                       onChange={changeName}/>
                <div>
                <label htmlFor="profile">
                    Profile:
                </label>
                <select name="profile" id="profile">{
                    props.profiles.map(p => (
                        <option value={p.Name} key={p.Name}>{p.Name}</option>
                    ))}
                </select>
                </div>
                <label>
                    Weapons:
                </label>
                <Weapons />
                <button type="button" onClick={_ => props.remove(c.id)}>
                    <span role="img" aria-label="x">❎</span>
                </button>
            </div>
        </div></form>
    );
}

function Roster(props) {
    const addCharacter = e => {
        props.setRoster(props.roster.concat({id: uuidv4()}));
        e.preventDefault();
    }
    console.log('up', props.roster[0])
    const updateInfo = info => 
        props.setRoster(props.roster.map(c => c.id === info.id ? info : c));
    const remove = id => 
        props.setRoster(props.roster.filter(c => c.id !== id));

    return (<>
        <div><form onSubmit={addCharacter}>
            <button type="submit">Add</button>
        </form></div>{
        props.roster.map(c => 
            <Character info={c} key={c.id} profiles={props.profiles}
                       updateInfo={updateInfo} remove={remove}/>)
        }
    </>);
}

export default Roster;
