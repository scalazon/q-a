import React from 'react';

export default class Qa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      satisfied: 'Can I use it on multiple daddies?',
      unhappy: 'Can I speak to your manager?'
    };
  }

  render() {
    return (
        <div>
          <h3>Have a Question?</h3>
          <p>Find answers in product info, Q&As, reviews</p>
        </div>
    );
  }
}