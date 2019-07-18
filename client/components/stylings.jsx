import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import EmberLt from './fonts/AmazonEmber_Lt.ttf';
import EmberBd from './fonts/AmazonEmber_Bd.ttf';
import EmberRg from './fonts/AmazonEmber_Rg.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: EmberLt;
    src: url("http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/fonts/AmazonEmber_Lt.ttf");
  }

  @font-face {
    font-family: EmberBd;
    src: url("http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/fonts/AmazonEmber_Bd.ttf");
  }

  @font-face {
    font-family: EmberRg;
    src: url("http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/fonts/AmazonEmber_Rg.ttf");
  }

  #product-main {
    font-family: EmberLt, Arial, sans-serif;
  }

  #product-main a, a:active, a:link, a:visited {
    text-decoration: none;
    color: #0066c0;
  }

  #product-main a:hover {
    color: #c45500;
    text-decoration: underline;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }
`;

export const MainDiv = styled.div`
  width: 100%;
  max-width: 1900px;
  padding: 14px 5px;
  display: flex;
  height: 800px;
  overflow: hidden;
  font-size: 13px;
  line-height: 29px;
`;

export const ActionText = styled.span`
  color: #B12704!important;
  font-size: 17px!important;
  line-height: 1.255!important;
  font-family: EmberRg, Arial, sans-serif;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function QuantitySelect(){
  return (
    <span>
      Qty:&nbsp;
      <select>
        {Array.from('12345').map(i=>(<option key={'qty_' + (i)}>{i}</option>))}
      </select>
    </span>
  )
}

export const Title = styled.h2`
  color: #222;
  font-size: 21px;
  line-height: 1.3;
  margin-bottom: 3px;
`;

export const HR = styled.hr`
  margin: 5px 0;
  color: #333;
`;