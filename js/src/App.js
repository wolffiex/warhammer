import React, {useState} from 'react';
import Roster from './Roster';
import Profiles from './Profiles';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseLocalStorage from './UseLocalStorage';

function Name(props) {
    const [name, setName] = UseLocalStorage(props.storageKey, "Enter Name");
    const change = (event) => setName(event.target.value)
    return (
        <input className="team-name" id="teamname" name="teamname" value={name} onChange={change}/>
    );
}

function App() {
    const [profiles, setProfiles] = useState([]);
    const addProfile = p => setProfiles(profiles.concat(p));
    return (
        <div className="container">
            <header><Name storageKey="teamName" /></header>
            <Tabs>
                <TabList>
                    <Tab>Roster</Tab>
                    <Tab>Profiles</Tab>
                    <Tab>Weapons</Tab>
                </TabList>
                <TabPanel>
                    <Roster profiles={profiles} />
                </TabPanel>
                <TabPanel>
                    <Profiles profiles={profiles} addProfile={addProfile} />
                </TabPanel>
                <TabPanel> jj
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
