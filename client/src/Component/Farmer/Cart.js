import React from 'react';
import '../../Css/profile.css';
import { Image, Table, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../../ActionCreater/action'

const { notify } = Action;

function Profile(props) {
  const { notify } = props;

  return (
    <>
      <div class="d-flex flex-wrap justify-content-between flex-row m-5 cart-box">
        <h1 className=' d-inline flex-fill m-3 mb-2'>Shoppin Cart</h1>
        <div className='mx-auto m-3 mb-5'>
          <Button className='ml-auto' variant="success" size="lg" onClick={() => notify({ type: 'success', msg: 'Order Placed Successfully' })}>
            Place Order
          </Button>
        </div>
        <Table borderless responsive>
          <tbody className='text-center'>
            <tr>
              <td scope="row">
                <img className="m-0 rounded-circle p-0 "
                  width="100px"
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheGtOjDugQL_DtA6EDn5no8Hn5jnJNKJOdqoYwRXQJ6E24-fW&usqp=CAU'
                  alt="user pic" />
              </td>
              <td><h4 className='m-0 p-0'>Watermelon Seed</h4><br />Seller Amitabh Kumar</td>
              <td className='cart-btn'><Button variant="secondary" onClick={() => notify({ type: 'warn', msg: 'Removed 1' })}>
                -
                    </Button>
                <span className='mr-3 ml-3'>1</span>
                <Button variant="secondary" onClick={() => notify({ type: 'warn', msg: 'Added 1' })}>
                  +
                    </Button></td>
              <td><h4><sup>₹</sup>1900</h4></td>
              <td><i class="fa fa-trash fa-2x text-danger" onClick={() => notify({ type: 'error', msg: 'Item Removed' })}></i></td>
            </tr>
            <td colSpan='5' ><hr /></td>
            <tr>
              <td scope="row">
                <img className="m-0 rounded-circle p-0 "
                  width="100px"
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheGtOjDugQL_DtA6EDn5no8Hn5jnJNKJOdqoYwRXQJ6E24-fW&usqp=CAU'
                  alt="user pic" />
              </td>
              <td><h4 className='m-0 p-0'>Watermelon Seed</h4><br />Seller Amitabh Kumar</td>
              <td className='cart-btn'><Button variant="secondary">
                -
                    </Button>
                <span className='mr-3 ml-3'>1</span>
                <Button variant="secondary">
                  +
                    </Button></td>
              <td><h4><sup>₹</sup>1900</h4></td>
              <td><i class="fa fa-trash fa-2x text-danger"></i></td>
            </tr>
            <td colSpan='5' ><hr /></td>
            <tr>
              <td scope="row">
                <img className="m-0 rounded-circle p-0 "
                  width="100px"
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheGtOjDugQL_DtA6EDn5no8Hn5jnJNKJOdqoYwRXQJ6E24-fW&usqp=CAU'
                  alt="user pic" />
              </td>
              <td><h4 className='m-0 p-0'>Watermelon Seed</h4><br />Seller Amitabh Kumar</td>
              <td className='cart-btn'><Button variant="secondary">
                -
                    </Button>
                <span className='mr-3 ml-3'>1</span>
                <Button variant="secondary">
                  +
                    </Button></td>
              <td><h4><sup>₹</sup>1900</h4></td>
              <td><i class="fa fa-trash fa-2x text-danger"></i></td>
            </tr>
            <td colSpan='5' ><hr /></td>
            <tr>
              <td scope="row">
                <img className="m-0 rounded-circle p-0 "
                  width="100px"
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheGtOjDugQL_DtA6EDn5no8Hn5jnJNKJOdqoYwRXQJ6E24-fW&usqp=CAU'
                  alt="user pic" />
              </td>
              <td><h4 className='m-0 p-0'>Watermelon Seed</h4><br />Seller Amitabh Kumar</td>
              <td className='cart-btn'><Button variant="secondary">
                -
                    </Button>
                <span className='mr-3 ml-3'>1</span>
                <Button variant="secondary">
                  +
                    </Button></td>
              <td><h4><sup>₹</sup>1900</h4></td>
              <td><i class="fa fa-trash fa-2x text-danger"></i></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>

  );

}

const take = (state) => {
  return state;
}

const change = (dispatch) => {
  return bindActionCreators({ notify }, dispatch)
}

export default connect(take, change)(Profile);