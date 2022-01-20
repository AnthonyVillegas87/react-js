import Coffee from "./components/Coffee";
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
//JSX element
const h1 = <h1>Hello World</h1>
<p>Hola!</p>

//JSX EXPRESSION
const myDiv = (
    <div>
        <h1>
            Hello world.
        </h1>
    </div>
);


//JSX Outer Elements
// There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
        <h1>
            Welcome to Dan's Blog!
        </h1>
        <article>
            Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
        </article>
    </div>

);
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
function App() {
  return (
    <div className="App">
      <Coffee name={'espresso'}/>

    </div>
  );
}

export default App;
