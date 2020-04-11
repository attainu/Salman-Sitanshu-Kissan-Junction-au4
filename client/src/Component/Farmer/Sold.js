import React from 'react';
import { Table} from 'react-bootstrap';

export default function Buyer() {
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Product Name</th>
            <th>Qunatity</th>
            <th>Buyer Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Onion</td>
            <td>50 kg</td>
            <td>Ramprasad</td>
            <td>₹15 per kg</td>
            <td>Jan 14, 2019</td>
            <td>₹750</td>
          </tr>
          <tr>
          <td>2</td>
            <td>Onion</td>
            <td>50 kg</td>
            <td>Ramprasad</td>
            <td>₹15 per kg</td>
            <td>Jan 14, 2019</td>
            <td>₹750</td>
          </tr>
          <tr>
          <td>2</td>
            <td>Onion</td>
            <td>50 kg</td>
            <td>Ramprasad</td>
            <td>₹15 per kg</td>
            <td>Jan 14, 2019</td>
            <td>₹750</td>
          </tr>
          <tr>
            <td colSpan="5"></td>
            <th>Total Revenue:</th>
            <td>₹60000</td>
          </tr>
        </tbody>
      </Table>
    </>

  );

}