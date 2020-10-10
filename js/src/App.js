import React from 'react';
import Roster from './Roster';
import Profiles from './Profiles';
import Weapons from './Weapons';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseLocalStorage from './UseLocalStorage';

function App() {
    const [name, setName] = UseLocalStorage("teamName", "Team Name");
    const [roster, setRoster] = UseLocalStorage("roster", []);
    const [profiles, setProfiles] = UseLocalStorage("profiles", []);
    const [weapons, setWeapons] = UseLocalStorage("weapons", []);

    function getRoster() {
        const rosterInfo = {name, roster, profiles, weapons}
        console.log(rosterInfo)
    }

    return (
        <div className="container">
            <header>
                <form>
                <input className="team-name" value={name} 
                       onChange={e=>setName(e.target.value)} />
                <input type="button" value="Save"
                       onClick={getRoster} />
                </form>
            </header>
            <Tabs defaultIndex={2}>
                <TabList>
                    <Tab>Roster</Tab>
                    <Tab>Profiles</Tab>
                    <Tab>Weapons</Tab>
                </TabList>
                <TabPanel>
                    <Roster profiles={profiles} roster={roster} setRoster={setRoster}/>
                </TabPanel>
                <TabPanel>
                    <Profiles profiles={profiles} setProfiles={setProfiles} />
                </TabPanel>
                <TabPanel>
                    <Weapons weapons={weapons} setWeapons={setWeapons} />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
