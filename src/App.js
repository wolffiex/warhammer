import React from 'react';
import sample_figure from './figure.jpg';
import './App.css';

function Name(props) {
    const [name, setName] = useLocalStorage(props.storageKey, "Enter Name");
    const change = (event) => setName(event.target.value)
    return (
        <input className="team-name" id="teamname" name="teamname" value={name} onChange={change}/>
    );
}

function App() {
    return (
        <div className="container">
        <header><Name storageKey="teamName" /></header>
        <div>
        <h2>Roster</h2>
        <div className="pure-g">
            <div className="pure-u-1-2">
                <img src={sample_figure} className=".pure-img"/>
            </div>
            <div className="pure-u-1-2">
                <Name storageKey="characterName" />
                <label htmlFor="role">
                    Role:
                </label>
                <select name="role" id="role">
                    <option value="volvo">Volvo</option>
                    <option value="audi">Audi</option>
                </select>
                <label>
                    Weapons:
                </label>
            </div>
        </div>
        </div>
        </div>
    );
}

export default App;

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

