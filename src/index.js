import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//JSX element
  const fName =  "Anthony";
  const lName = "Villegas";
  const year = new Date().getFullYear();

//Advanced JSX
function images(e) {
    e.target.setAttribute('src', "https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg?auto=webp&quality=85,70");
    e.target.setAttribute('alt', 'java');

}



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
            <img onClick={images} src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" alt="react"/>
            <li>Learn Java</li>
            <li>Eat food</li>
            <li>Land Dream Job</li>
        </ul>
        <p>Your Lucky number for today is {Math.floor(Math.random() * 10)}</p>
        <p>Created by {fName} {lName} <span>&copy; {year}</span></p>


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
