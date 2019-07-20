import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'

function Qbar (props) {
  return (
    <Tabs className="tabs" onSelect={props.handleClick}>
      <Tab id="tab" eventKey="All" title="All"></Tab>
      <Tab id="tab" eventKey="Product Info" title="Product Information"></Tab>
      <Tab id="tab" eventKey="Customer Q&A" title="Customer Q&A's"></Tab>
      <Tab id="tab" eventKey="Customer Reviews" title= "Customer Reviews"></Tab>
  </Tabs>
  )
}

export default Qbar