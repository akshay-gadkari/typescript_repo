import React from 'react';
import logo from './logo.svg';
import './App.css';
document.title = 'Practice';

const arrayExample = [1, 2, 3, 4, 5];
let example2 = arrayExample.reduce((num1, num2) => num2 + num2);

let ex0: boolean | number = 35;
let ex1: boolean = true;
let ex2: number = 35;
let ex3: string = 'hello world';

console.log(ex3);

function App() {
  return (
    <div className="App">
	  <header className="App-header">
          <p>{ex3}</p>
          <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
          >
          Learn React
      </a>
	  </header>
	  </div>
  );
}

export default App;
