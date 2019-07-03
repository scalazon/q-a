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
        <div>
          <h3><strong>1337DadRider</strong> "{this.state.satisfied}"</h3>
          <p>
            I have two dads and I'm unsure if I'll need a saddle for each, or if I can harness them both with a single saddle?
          </p>
          <span>Verified Buyer 2010</span>
        </div>
        <div>
          <h3><strong>Karen</strong> "{this.state.unhappy}"</h3>
          <p>Do you even care about your customers? Wow, I bought this saddle for my 3 month old baby and he fell right out. What kind of company puts out such a negligent product with no safety testing? #mad #unblessed</p>
          <span>Verified Buyer 2011</span>
        </div>
      </div>
    );
  }
}