import React from 'react';
import icon1 from '../../Image/fruit.png'
import icon2 from '../../Image/india.png'
import icon3 from '../../Image/tractor1.png'
import icon4 from '../../Image/vegetables.png'
import Count from './Count';

export default function PageDescription() {
  return (
    <>

      <div class="d-flex flex-column align-item-center flex-wrap m-5">
        <div class="p-3 flex-fill text-center">
          <h1 className='display-4' style={{ 'font-weight': '800' }}>
            <span style={{ color: "#28ca2f" }}>AgriCom</span> Progress
            </h1>
        </div>
        <div class="d-flex justify-content-sm-around flex-wrap bd-highlight">
          <a className="mx-auto text-center">
            <img src={icon1} className='m-2' width='70px' />
            <h5 style={{ 'font-weight': '500' }}>Tons of fruits assembled</h5>
            <h3><Count end='400' /></h3>
          </a>
          <a className="mx-auto text-center">
            <img src={icon2} className='m-2' width='70px' />
            <h5 style={{ 'font-weight': '500' }}>Hectare of production</h5>
            <h3><Count end='4000' /></h3>
          </a>
          <a className="mx-auto text-center">
            <img src={icon3} className='m-2' width='70px' />
            <h5 style={{ 'font-weight': '500' }}>Units of equipment</h5>
            <h3><Count end='250' /></h3>
          </a>
          <a className="mx-auto text-center">
            <img src={icon4} className='m-2' width='70px' />
            <h5 style={{ 'font-weight': '500' }}>Tons of vegetables assembled</h5>
            <h3><Count end='608' /></h3>
          </a>
        </div>
      </div>
    </>

  );

}