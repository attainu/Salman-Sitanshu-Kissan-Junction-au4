import React from 'react';
import '../../Css/profile.css';
import img1 from '../../Image/service1.jpg'
import img2 from '../../Image/service2.jpg'
import PageDescription from '../Home/PageDescription';
import Blog from '../Home/Blog';
import { Image, Nav, Button } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";

export default function Content() {
  return (
    <>
      <div className="d-flex flex-column ">
        <div className="d-flex flex-fill justify-content-around flex-wrap m-5  flex-row">
          <div >
            <Image className='shadow content' src={img1} rounded />
            <div className='text-center'>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <h1 className='mb-0' style={{ 'font-weight': '500' }}>Watermelon Seeds</h1>
            <p className='pl-2'>Seller Amitabh Kumar</p>
            <table className="table table-sm table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Qunatity Available:</th>
                  <td>1500 kg</td>
                </tr>
                <tr>
                  <th scope="row">Price: </th>
                  <td>₹250 per kg</td>
                </tr>
                <tr>
                  <th scope="row">Min Order: </th>
                  <td>50 kg</td>
                </tr>
                <tr>
                  <th scope="row">Available Location: </th>
                  <td>Punjab</td>
                </tr>
                <tr>
                  <th>Quantity (kg)</th>
                  <td>
                    <Button className='mr-3' variant="secondary">
                      -
                    </Button>
                    1
                    <Button className='ml-3' variant="secondary">
                      +
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th>Total:</th>
                  <td>₹1750</td>
                </tr>
              </tbody>
            </table>
            <div className='d-flex justify-content-around'>
              <Button className='btn-2' variant="dark">
                Add To Cart
          </Button>
              <Button className='btn-2' variant="success">
                Buy Now
          </Button>
            </div>
          </div>
        </div>
      </div>
      <PageDescription />
      <Blog />
      {/* <div className="d-flex flex-column ">
        <div className="d-flex flex-fill justify-content-around flex-wrap m-5 flex-row">
          <div >
            <Image className='shadow content' src={img2} rounded fluid />
            <div className='d-flex mt-3'>
              <Button className='flex-fill mr-2' variant="dark" size="lg">
                Add To Cart
          </Button>
              <Button className='flex-fill ml-2' variant="success" size="lg">
                Rent Now
          </Button>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <h1 className='mb-0' style={{ 'font-weight': '500' }}>Picking Machine</h1>
            <p className='pl-2'>Seller Abhishek Gautam</p>
            <table className="table table-sm table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Max Rent Time:</th>
                  <td>16 Days</td>
                </tr>
                <tr>
                  <th scope="row">Price: </th>
                  <td>₹6000 per day</td>
                </tr>
                <tr>
                  <th scope="row">Usage/Application: </th>
                  <td>Picking & sorting of crops</td>
                </tr>
                <tr>
                  <th scope="row">Available Location: </th>
                  <td>Punjab</td>
                </tr>
                <tr>
                  <th>Quantity (days)</th>
                  <td>
                    <Button className='mr-3' variant="secondary">
                      -
                    </Button>
                    1
                    <Button className='ml-3' variant="secondary">
                      +
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th>Total:</th>
                  <td>₹1750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
      </div>*/}

    </>

  );

}