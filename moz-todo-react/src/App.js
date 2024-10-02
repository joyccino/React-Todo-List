import React from "react";
import logo from './logo.svg';

function App(props) {
  const subject = props.subject;

  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>"Hello, {subject}!"</p>
      </header>
    </div>
  );
}

export default App;