import React from "react";

const App = () => {
  const [inputValue, setInputValue] = React.useState("femi");

  function onChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div>
      <input placeholder="yes" onChange={onChange} /> {inputValue}
    </div>
  );
};

export default App;
