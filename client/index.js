import Qa from './components/Qa.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';



ReactDOM.render(<Qa />, document.getElementById('q-a'));

export default function deployQa() {
  ReactDOM.render(<Qa />, document.getElementById('q-a'));
}