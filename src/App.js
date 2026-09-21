import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
// import {FaShoppingCart} from "react-icon/fa";
import products from './data/products';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
function App() {
  return (
    <div>
      <div className="bg-light">
        <div classname='row'>
          <nav style={{ height: '100px' }}>
            <div className="container">
              <ul className="nav">
                <li className="nav-item">
                  <img
                    src='/images/logo.jpg'
                    style={{ maxHeight: '100px' }}
                  />
                </li>
                <li className="nav-item">
                  <a className="nav-link ">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div classname='row'>
          <div className='container'>
            <div className="row justify-content-center">

              <Carousel>
                <Carousel.Item>
                  <Carousel.Caption>
                    <a>Fashion image</a>
                  </Carousel.Caption>
                  <img
                    src='/images/banner3.jpg'
                    // style={{ maxHeight: '400px', maxWidth: '800px' }}
                    alt='ok'
                    className="img-fluid"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <a>Fashion image</a>
                  </Carousel.Caption>
                  <img
                    src='/images/banner2.jpg'
                    // style={{ maxHeight: '400px', maxWidth: '800px' }}
                    alt='ok'
                    className="img-fluid"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <a>Fashion image</a>
                  </Carousel.Caption>
                  <img
                    src='/images/banner1.jpg'
                    // style={{ maxHeight: '400px', maxWidth: '800px' }}
                    alt='ok'
                    className="img-fluid"
                  />
                </Carousel.Item>

              </Carousel>
            </div>
          </div>

        </div>
        <div className='row'>
          <h1 className="row justify-content-center">Products</h1>
          <div className='row g-3'>
            <div className='col-12 col-md-4'>
              <Card>
                <CardTitle>Nam1</CardTitle>
                <CardBody>
                  <CardImg src='/images/nam1.jpg' style={{ maxHeight: '400px', maxWidth: '400px' }}>
                  </CardImg>
                  <CardText>nam1</CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col-12 col-md-4'>
              <Card>
                <CardTitle>Nam2</CardTitle>
                <CardBody>
                  <CardImg src='/images/nam2.jpg' style={{ maxHeight: '400px', maxWidth: '400px' }}>
                  </CardImg>
                  <CardText>nam2</CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col-12 col-md-4'>
              <Card>
                <CardTitle>Nam3</CardTitle>
                <CardBody>
                  <CardImg src='/images/nam3.jpg' style={{ maxHeight: '400px', maxWidth: '400px' }}>
                  </CardImg>
                  <CardText>nam3</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-12 col-md-4'>
              <Card>
                <CardTitle>Nu1</CardTitle>
                <CardBody>
                  <CardImg src='/images/nu1.jpg' style={{ maxHeight: '400px', maxWidth: '400px' }}>
                  </CardImg>
                  <CardText>nu1</CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col-12 col-md-4'>
              <Card>
                <CardTitle>Nu2</CardTitle>
                <CardBody>
                  <CardImg src='/images/nu2.jpg' style={{ maxHeight: '400px', maxWidth: '400px' }}>
                  </CardImg>
                  <CardText>nu2</CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col-12 col-md-4'>
              <Card>
                <CardTitle>Nu3</CardTitle>
                <CardBody>
                  <CardImg src='/images/nu3.jpg' style={{ maxHeight: '400px', maxWidth: '400px' }}>
                  </CardImg>
                  <CardText>nu3</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
                      <h1>HE191887</h1>
                      <h1>Vũ Hoàng Linh</h1>
                      <h1>peapea4122005@gmail.com</h1>
    </div >
  );
}

export default App;
