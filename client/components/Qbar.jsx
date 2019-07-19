import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';

function Qbar (props) {
  return (
    <Tabs>
      <Tab eventKey="all" title="All"></Tab>
      <Tab eventKey="product-information" title="Product Information"></Tab>
      <Tab eventKey="customerQAs" title="Customer Q&A's"></Tab>
      <Tab eventKey="customer-reviews" title= "Customer Reviews"></Tab>
  </Tabs>
  )
}

export default Qbar