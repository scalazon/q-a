import React from 'react';
import Axios from 'axios';

export default class Qa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      alsoAsked: ['Is this a Daddle?', 'Can I use it on people AND animals?', 'WowWowowWowOwoWOwowowOW?', 'What is this?']
    };
  }
  
  // componentDidMount() {
  //   Axios.get()
  // }

  handleChange(e) {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];

    // If the search bar isn't empty
if (e.target.value !== "") {
        // Assign the original list to currentList
  currentList = this.state.items;

        // Use .filter() to determine which items should be displayed
        // based on the search terms
  newList = currentList.filter(item => {
            // change current item to lowercase
    const lc = item.toLowerCase();
            // change search term to lowercase
    const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
    return lc.includes(filter);
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.props.items;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
}

  render() {
    return (
        <div>
          <h3>Have a Question?</h3>
          <p>Find answers in product info, Q&As, reviews</p>
          <input type="text" className="input" placeholder="Search..." />
        </div>
    );
  }
}