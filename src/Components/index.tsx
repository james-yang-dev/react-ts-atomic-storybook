import React from 'react';
import Main from '@src/Components/pages/main';

interface PersonProps {
  name: string;
}

function App({ name }: PersonProps) {
  return <Main></Main>;
}

App.defaultProps = {
  name: '',
};

export default App;
