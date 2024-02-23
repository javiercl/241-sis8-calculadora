import React,{useState, createContext} from 'react';
import './App.css';
import Button, { ButtonCe, ButtonEq } from './components/Button';
import Display from './components/Display';

export const UserContext = createContext(null);

function App() {
  const [value, setValue] = useState('0');
  const chars = ['/','*','7','8','9','-','4','5','6','+','1','2','3','0','00','.']

  return (
    <UserContext.Provider value={{ value: value, setValue: setValue }}>
      <div className="container">
        <div className="calculator">
          <Display />
          <ButtonCe data={{char:'CE'}} />
          {chars.map((character) => {
              return (
                  <Button data={{char:character}} />
              )
          })}
          <ButtonEq data={{char:'='}} />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
