import React from 'react';
import Roster from './Roster';
import Profiles from './Profiles';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseLocalStorage from './UseLocalStorage';

function App() {
    const [roster, setRoster] = UseLocalStorage("roster", []);
    const [profiles, setProfiles] = UseLocalStorage("profiles", []);
    const [name, setName] = UseLocalStorage("teamName", "Team Name");
    //const storageKeys = ["profiles", "teamName", "roster"]
    return (
        <div className="container">
            <header>
                <input className="team-name" value={name} 
                       onChange={e=>setName(e.target.value)} />
            </header>
            <Tabs defaultIndex={0}>
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
                <TabPanel> jj
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
