import React, { useState, useEffect } from 'react';
import Account from './Account';

function App() {
  const [appState, setAppState] = useState({
    isLoading: true,
    users: [],
    error: null
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) =>
        setAppState({
          users: data,
          isLoading: false,
          error: null
        })
      )
      .catch((error) => setAppState({ users: [], error, isLoading: false }));
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <img src="./logo.png" className="App-logo" alt="logo" />
      </header>
      <div className="app-content">
        <h1>Display Users Account Details</h1>
        {appState.error ? <p>{appState.error.message}</p> : null}
        {!appState.isLoading ? (
          appState.users.map((user) => {
            return <Account key={user.username} user={user} />;
          })
        ) : (
          <h3>Fetching Users...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
