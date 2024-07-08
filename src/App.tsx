import { ChangeEvent, ReactNode, useState } from 'react';
import './App.css';
import { breakify } from './utils/breakify';

//Defaults
const defaultFirstName: ReactNode = (
  <p className="text">
    <span className="text green-txt">Br</span>
    eaking
  </p>
);

const defaultLastName: ReactNode = (
  <p className="text">
    <span className="text green-txt">Ba</span>d
  </p>
);

function App() {
  //State
  const [firstName, setFirstName] = useState<string | ReactNode>('');
  const [lastName, setLastName] = useState<string | ReactNode>('');

  //Functions
  const firstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text: string = e?.target?.value;

    setFirstName(breakify(text));
  };

  const lastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text: string = e?.target?.value;

    setLastName(breakify(text));
  };

  const setDefaultText = () => {
    setFirstName(defaultFirstName);
    setLastName(defaultLastName);
  };

  return (
    <>
      <div className="center-container">
        <div className="text-wrapper">
          {firstName}
          {lastName}
        </div>
        <div className="inputs-wrapper">
          <div className="input-wrapper">
            <label htmlFor="first-name" className="label">
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="radius gray-bg"
              onChange={firstNameHandler}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="last-name" className="label">
              Last name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="radius gray-bg"
              onChange={lastNameHandler}
            />
          </div>
        </div>
        <button
          type="button"
          className="submit-btn radius"
          onClick={setDefaultText}
        >
          Breakify
        </button>
      </div>
    </>
  );
}

export default App;
