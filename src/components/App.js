import React, { useState } from "react";
import Form from "./Form";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <Form isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default App;
