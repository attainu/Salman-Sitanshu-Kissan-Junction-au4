import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import icon1 from '../../Image/service1.jpg'
import icon2 from '../../Image/service2.jpg'
import icon3 from '../../Image/work2.jpg'

export default function YourProduct() {
  return (
    <>
      <CardDeck className='m-4 d-flex flex-wrap justify-content-center flex-row'>
        <Card className='box4 m-3 shadow'>
          <Card.Img variant="top" src={icon1} />
          <Card.Body>
            <Card.Title>Spices</Card.Title>
            <Card.Text>
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Price:</th>
                    <td>₹40 per kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Quantiy: </th>
                    <td>1200 kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Min Order: </th>
                    <td>50kg</td>
                  </tr>
                </tbody>
              </table>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex flex-row justify-content-around'>
            <Button className='btn-1' variant="secondary" size="sm">
              Edit
          </Button>

            <Button className='btn-1' variant="danger" size="sm">
              Delete
          </Button>
          </Card.Footer>
        </Card>
        <Card className='box4 m-3 shadow'>
          <Card.Img variant="top" src={icon2} />
          <Card.Body>
            <Card.Title>Tamato</Card.Title>
            <Card.Text>
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Price:</th>
                    <td>₹40 per kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Quantiy: </th>
                    <td>1200 kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Min Order: </th>
                    <td>50kg</td>
                  </tr>
                </tbody>
              </table>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex flex-row justify-content-around'>
            <Button className='btn-1' variant="secondary" size="sm">
              Edit
          </Button>

            <Button className='btn-1' variant="danger" size="sm">
              Delete
          </Button>
          </Card.Footer>
        </Card><Card className='box4 m-3 shadow'>
          <Card.Img variant="top" src={icon1} />
          <Card.Body>
            <Card.Title>Onion</Card.Title>
            <Card.Text>
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Price:</th>
                    <td>₹40 per kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Quantiy: </th>
                    <td>1200 kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Min Order: </th>
                    <td>50kg</td>
                  </tr>
                </tbody>
              </table>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex flex-row justify-content-around'>
            <Button className='btn-1' variant="secondary" size="sm">
              Edit
          </Button>

            <Button className='btn-1' variant="danger" size="sm">
              Delete
          </Button>
          </Card.Footer>
        </Card><Card className='box4 m-3 shadow'>
          <Card.Img variant="top" src={icon2} />
          <Card.Body>
            <Card.Title>Cucumber</Card.Title>
            <Card.Text>
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Price:</th>
                    <td>₹40 per kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Quantiy: </th>
                    <td>1200 kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Min Order: </th>
                    <td>50kg</td>
                  </tr>
                </tbody>
              </table>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex flex-row justify-content-around'>
            <Button className='btn-1' variant="secondary" size="sm">
              Edit
          </Button>

            <Button className='btn-1' variant="danger" size="sm">
              Delete
          </Button>
          </Card.Footer>
        </Card><Card className='box4 m-3 shadow'>
          <Card.Img variant="top" src={icon1} />
          <Card.Body>
            <Card.Title>Tomato</Card.Title>
            <Card.Text>
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Price:</th>
                    <td>₹40 per kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Quantiy: </th>
                    <td>1200 kg</td>
                  </tr>
                  <tr>
                    <th scope="row">Min Order: </th>
                    <td>50kg</td>
                  </tr>
                </tbody>
              </table>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='d-flex flex-row justify-content-around'>
            <Button className='btn-1' variant="secondary" size="sm">
              Edit
          </Button>

            <Button className='btn-1' variant="danger" size="sm">
              Delete
          </Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </>

  );

}