import Qa from './components/Qa.jsx';
import React from 'react';
import ReactDOM from 'react-dom';



ReactDOM.render(<Qa />, document.getElementById('q-a'));

export default function deployQa() {
  ReactDOM.render(<Qa />, document.getElementById('q-a'));
}