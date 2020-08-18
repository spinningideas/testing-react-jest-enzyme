import React from 'react';

const style = {
  width: '70%',
  margin: '1rem',
  borderBottom: '1px solid #ccc'
};

const Account = ({ user }) => {
  return (
    <div key={user.username} style={style}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  );
};

export default Account;
