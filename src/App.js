import React, {useState} from 'react';
import Roster from './roster';
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
    return (
        <div className="container">
            <header><Name storageKey="teamName" /></header>
            <Tabs>
                <TabList>
                    <Tab>Roster</Tab>
                    <Tab>Roles</Tab>
                    <Tab>Weapons</Tab>
                </TabList>
                <TabPanel>
                    {Roster()}
                </TabPanel>
                <TabPanel>kk
                </TabPanel>
                <TabPanel> jj
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
