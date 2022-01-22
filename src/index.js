import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App'
//JSX element
  const fName =  "Anthony";
  const lName = "Villegas";
  const year = new Date().getFullYear();

//Advanced JSX
function images(e) {
    e.target.setAttribute('src', "https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg?auto=webp&quality=85,70");
    e.target.setAttribute('alt', 'java');

}

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
};


//JSX EXPRESSION
const myDiv = (
    //JSX Outer Elements
// There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

    <div>
        <h1 style={customStyle}>
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
        <div>
            {App}
        </div>



    </div>
);


ReactDOM.render(
  myDiv,
  document.getElementById('root')
);


