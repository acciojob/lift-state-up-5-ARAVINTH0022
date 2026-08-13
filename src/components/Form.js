import React from 'react';

const Form = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <p>You are logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input type="text" />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
