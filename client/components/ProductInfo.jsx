import React from 'react';

function ProductInfo (props) {
  let asin = props.currentItem;
  return (
    <li>{props.items[asin].productInfo}</li>
  )
}




export default ProductInfo