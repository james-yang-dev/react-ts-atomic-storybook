import React from 'react';

interface PersonProps {
  name: string;
  age: number;
}

function App({ name, age }: PersonProps) {
  return (
    <div className="container">
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
}

App.defaultProps = {
  name: 'test',
  age: 18,
};

export default App;
