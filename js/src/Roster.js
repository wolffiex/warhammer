import React from 'react';
import sample_figure from './figure.jpg';
import { v4 as uuidv4 } from 'uuid';

function Character(props) {
    const c = props.info;
    const name = "name" in props.info ? props.info.name : "New Character";
    const changeName = e => props.updateInfo({...c, name: e.target.value});
    const setProfile = e => props.updateInfo({...c, profile: e.target.value});
    const weapons = "weapons" in c ? c.weapons : [];
    console.log("weaps", weapons)
    const setWeapons = e => props.updateInfo(
            {...c, weapons: [...e.target.selectedOptions].map(o => o.value)});
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
                <select name="profile" value={c.profile} onChange={setProfile}>{
                    props.profiles.map(p => (
                        <option value={p.id} key={p.id}>{p.Name}</option>
                    ))}
                </select>
                </div>
                <div>
                <label htmlFor="weapons">
                    Weapons:
                </label>
                <select name="weapons" value={weapons} multiple={true}
                        onChange={setWeapons}>{
                    props.weapons.map(p => (
                        <option value={p.id} key={p.id}>{p.name}</option>
                    ))}
                </select>
                </div>
                <div>
                <button type="button" onClick={_ => props.remove(c.id)}>
                    Remove <span role="img" aria-label="x">❎</span>
                </button>
                </div>
            </div>
        </div></form>
    );
}

function Roster(props) {
    const addCharacter = e => {
        props.setRoster(props.roster.concat({id: uuidv4()}));
        e.preventDefault();
    }
    const updateInfo = info => 
        props.setRoster(props.roster.map(c => c.id === info.id ? info : c));
    const remove = id => 
        props.setRoster(props.roster.filter(c => c.id !== id));
    const weapons = [{id: 1, name: "foo"}, {id:3, name:"bar"}];

    return (<>
        <div><form onSubmit={addCharacter}>
            <button type="submit">Add</button>
        </form></div>{
        props.roster.map(c => 
            <Character info={c} key={c.id} profiles={props.profiles} weapons={weapons}
                       updateInfo={updateInfo} remove={remove}/>)
        }
    </>);
}

export default Roster;
