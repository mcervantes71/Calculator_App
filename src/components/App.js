import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function App() {
  return (
    <div className="calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
}