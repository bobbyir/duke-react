import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import img from './img.png';



const TopMenu = () => (
  <Navbar expand="lg" bg="light" >
    <Container fluid>
      <Nav className="navbar-nav" >
        <Nav.Link className="navbar-nav justify-content-start"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="36"
          viewBox="0 0 96 36"
          alt="SEY logo"
        >
          <path
            d="M20.63 26.49c0 5.185-3.827 9.51-10.444 9.51-3.472 0-7.18-.781-10.035-2.708v-6.055c2.821 2.856 5.917 4.285 9.984 4.285 3.124 0 5.766-1.498 5.766-4.562 0-3.748-4.792-6.07-8.71-8.41C4.015 16.65 0 14.06 0 9.332 0 3.723 4.848 0 10.915 0c2.935 0 5.75.746 8.333 2.226V7.73c-2.652-2.167-5.26-3.252-8.303-3.252-3.03 0-6.316 1.257-6.316 4.11 0 2.617 2.233 4.007 5.473 5.851 5.531 3.148 10.529 5.849 10.529 12.052zm19.636-6.339h13.556v-4.504H40.266V4.931h14.06V.453H35.235v35.094h19.57v-4.478H40.266V20.151zM89.223.453l-9.533 13.11L70.285.453h-6.074L77.193 18v17.597h5.157V18L95.33.453h-6.107z"
            fill="#000000"
          ></path>
        </svg></Nav.Link>
      </Nav>

      <Nav className="navbar-nav">
        <Nav className="navbar-nav">
          <Nav.Link>Coffee</Nav.Link>
          <Nav.Link>Subscriptions</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Cafe</Nav.Link>
          <Nav.Link>Wholesale</Nav.Link>
        </Nav>
      </Nav>
      <Nav className="navbar-nav mr-2">
        <Nav className="navbar-nav">
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Cart</Nav.Link>
        </Nav>
      </Nav>
    </Container>


  </Navbar>
)

const CenterImage = () => {
  return (
    <Container className="d-flex justify-content-center my-padding">
      <img src={img} alt="The Boardroom Kailua" className="my-image"/>
    </Container>
  );
}
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row py-4">
          <div className="col">
            <h1>STAY UPDATED</h1>
            <div>
              <strong>Get the latest news, offers, and event information</strong>
            </div>
            <br />
            <input
              type="text"
              placeholder="EMAIL ADDRESS"
              style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}
            />
            <button className="btn custom-btn" style={{color: 'black'}}>Join</button>
          </div>

          <div className="col">
            <h1>VISIT US</h1>
            <div>18 Grattan St Brooklyn, NY 11206
              Weekdays 7-5 • Weekends 8-5</div>
            <br />
            <p>CONTACT US</p>
            <div>hello@sey.coffee</div>
          </div>



          <div className="col">
            <h1>Contact US</h1>
            <br />
            <br />
            <div>© 2023 <br /> BK . NY</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Sey = () => (
  <>
  <Container/>
<TopMenu />
    <CenterImage />
    <Footer/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sey />);
