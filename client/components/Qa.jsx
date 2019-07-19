import React from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Qbar from './Qbar.jsx';

//save

export default class Qa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      askCommunity: false,
      showInfo: false,
      showReviews: false,
      showQuestions: false,
      showAsked: false,
      currentItem: '',
      items: [],
      alsoAsked: ['Is this a Daddle?', 'Anything is a daddle with the right attitude!', 'Can I use it on people AND animals?', 'Of course you can!', 'WowWowowWowOwoWOwowowOW?', 'We agree!', 'What is this?', 'Buy it and find out!']
    };
  }
  
  componentDidMount() {
    Axios.get('/everything').then((res) => this.setState({items: res.data}))
    const bc = new BroadcastChannel('product-change');
    bc.onmessage = (ev) => { this.setState({currentItem: ev.data}); }
  }

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

  showCommon() {
    return (<div>
    {this.state.showAsked.map((question, index) => (
        <p>{question}</p>
    ))}
    </div>)
  }

  //when the input field is populated we need to display askCommunity button
  askQ(e) {
    if (e.target.value) {
      this.setState({ askCommunity: true})
    } else{
      this.setState({ askCommunity: false, showQuestions: false, showInfo: false, showReviews: false, showAsked: false})
    }
    // console.log(e.target.value);
  }

  handleClick(e) {
    if (e === 'Customer Q&A') {
      this.setState({showQuestions: true, showInfo: false, showReviews: false, showAsked: false})
    }
    if (e === 'Customer Reviews') {
      this.setState({showReviews: true, showQuestions: false, showInfo: false, showAsked: false})
    }
    if (e === 'Product Info') {
      this.setState({showInfo: true, showQuestions: false, showReviews: false, showAsked: false})
    }
    if (e === 'All') {
      this.setState({showQuestions: true, showReviews: true, showInfo: true, showAsked: true})
    };
  }

  render() {
    return (
        <div>
        <hr></hr>
        <div>
          <span>Have a Question?</span>
          <div>Find answers in product info, Q&As, reviews</div>
          <input type="text" className="input" placeholder="Ask Away" onChange={this.askQ.bind(this)}/>
        </div>
        <div>
        {this.state.askCommunity ? 
          <div>
            <span>Don't see what you're looking for?</span>
            <Button>Ask Community?</Button>
            <><Qbar handleClick={this.handleClick.bind(this)}/></>
            </div>
          :
          <div></div>
        }
        </div>
          <div>
          {this.state.showInfo ?
          <div>PRODUCT INFO MOFUCKA, DO YOU HAVE IT?</div>
          : 
          <div></div>
        }
          {this.state.showQuestions ?
          <div>HUR DUR QUESTION PARTY</div>
          : 
          <div></div>
        }
          {this.state.showReviews ?
          <div>This is Review Town</div>
          : 
          <div></div>
        }
          {this.state.showAsked ?
          <div>Other Dummies Asked This Stuff</div>
          : 
          <div></div>
        }
          </div>
          <hr></hr>
        </div>
    );
  }
}