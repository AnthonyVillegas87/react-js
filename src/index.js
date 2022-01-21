import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//JSX element
  const fName =  "Anthony";
    const lName = "Villegas";


//JSX EXPRESSION
const myDiv = (
    //JSX Outer Elements
// There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

    <div>
        <h1>
              Your To-Do List {`${fName} ${lName}`} !
        </h1>
        <ul>
            <li>Drink Coffee</li>
            <li>Learn React</li>
            <li>Learn Java</li>
            <li>Eat food</li>
            <li>Land Dream Job</li>
        </ul>
        <p>Your Lucky number for today is {Math.floor(Math.random() * 10)}</p>
    </div>
);


ReactDOM.render(
  myDiv,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
