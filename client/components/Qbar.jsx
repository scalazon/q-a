import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';

function Qbar (props) {
  return (
    <Tabs onSelect={props.handleClick}>
      <Tab eventKey="All" title="All"></Tab>
      <Tab eventKey="Product Info" title="Product Information"></Tab>
      <Tab eventKey="Customer Q&A" title="Customer Q&A's"></Tab>
      <Tab eventKey="Customer Reviews" title= "Customer Reviews"></Tab>
  </Tabs>
  )
}

export default Qbar