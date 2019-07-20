import React from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Qbar from './Qbar.jsx';
import ProductInfo from './ProductInfo.jsx';

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
          <span className="bold">Have a Question?</span>
          <div className="light">Find answers in product info, Q&As, reviews</div>
          <Form inline>
      <FormControl type="text" placeholder="" className="input" onChange={this.askQ.bind(this)}/></Form>
        </div>
        <div>
        {this.state.askCommunity ? 
          <div>
            <span className="grey">Don't see what you're looking for?</span>
            <Button className="community">Ask the community</Button>
            <><Qbar className="input" handleClick={this.handleClick.bind(this)} items={this.state.items}/></>
            </div>
          :
          <div></div>
        }
        </div>
          <div>
          {this.state.showInfo ?
          <div><ProductInfo items={this.state.items} /></div>
          : 
          <div></div>
        }
          {this.state.showQuestions ?
          <div>question and answers</div>
          : 
          <div></div>
        }
          {this.state.showReviews ?
          <div>maybe reviews?</div>
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