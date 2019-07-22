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
      currentProductInfo: '',
      currentQ:'',
      currentA:'',
      items: [],
      alsoAsked: ['Is this a Daddle?', 'Anything is a daddle with the right attitude!', 'Can I use it on people AND animals?', 'Of course you can!', 'WowWowowWowOwoWOwowowOW?', 'We agree!', 'What is this?', 'Buy it and find out!']
    };
  }
  
  componentDidMount() {
    Axios.get('http://q-a-env.brpmxghy9w.us-east-1.elasticbeanstalk.com/everything').then((res) => this.setState({items: res.data})).catch(err => console.error(err));
    const bc = new BroadcastChannel('product-change');
    bc.onmessage = (ev) => { 
      return new Promise((resolve, reject) => this.setState({currentItem: ev.data})).then(this.found())
    }
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

  found() {
    let pInfo;
    let q;
    let a;
    let list = this.state.items;
    for (let i = 0; i < list.length; i++){
      if (list[i].asin === this.state.currentItem) {
        pInfo = list[i].productInfo;
        q = list[i].question;
        a = list[i].answer;
      }
    }
    this.setState({currentProductInfo: pInfo, currentA: a, currentQ: q})
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
          <span className="bold">Have a question?</span>
          <div className="light">Find answers in product info, Q&As, reviews</div>
          <Form className="formContainer" inline>
      <FormControl type="text" placeholder=""  className="input" onChange={this.askQ.bind(this)}/></Form>
        </div>
        <div>
        {this.state.askCommunity ? 
          <div>
            <span className="grey">Don't see what you're looking for?</span>
            <Button id="community">Ask the community</Button>
            <><Qbar handleClick={this.handleClick.bind(this)} items={this.state.items}/></>
            </div>
          :
          <div></div>
        }
        </div>
          <div>
          {this.state.showInfo ?
          <div><ProductInfo prodInfo={this.state.currentProductInfo} /></div>
          : 
          <div></div>
        }
          {this.state.showQuestions ?
          <div>
            <div>Q</div>
            <div>{this.state.currentQ}</div>
            <div>A</div>
            <div>{this.state.currentA}</div>
          </div>
          : 
          <div></div>
        }
          {this.state.showReviews ?
          <div>Look Down</div>
          : 
          <div></div>
        }
          {this.state.showAsked ?
          <div>More fake Questions go here</div>
          : 
          <div></div>
        }
          </div>
        </div>
    );
  }
}