import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './payment.css';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import image from '/public/download.jpg';

const Paymentdetail = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showGpay, setShowGpay] = useState(false);
  const [showphonepay, setShowphonepay] = useState(false);


  const handleCheckout = () => {
    setIsSubmitted(true);
  };

  const handleGpayOpen = () => setShowGpay(true);
  const handleGpayClose = () => setShowGpay(false);

  
  const handlephonepayOpen = () => setShowphonepay(true);
  const handlephonepayClose = () => setShowphonepay(false);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        color: 'white',
        marginRight: '50%',
      }}
      className="createproduct"
    >
      {!isSubmitted ? (
        <div className="card paymentcontainer">
          <div>
            <Form>
              <div className="container">
                <Modal.Header>
                  <Modal.Title
                    className="text-info texttitle"
                    style={{ textAlign: 'center' }}
                  >
                    Payment
                  </Modal.Title>
                </Modal.Header>

                <div className="text-center mb-3">
                  <div className="d-flex justify-content-evenly ">
                    {/* Google Pay Icon */}
                    <img
                      width={30}
                      height={30}
                      style={{ cursor: 'pointer' }}
                      onClick={handleGpayOpen}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFj0lEQVR4nO2ZfWzUdBjHK6ggiSZgIndw7Q0YMxtXB27BBUa2tbtee3sRkcNFScwwhpCgAUkwGHH6B7Q3XpbxPobXjjkgU15kDAGBu2E0RIwERFQwLBttx+vGnMHtTvaYm2zs5a79rZ1uf+ybfJNL7o/7fJ8+v+f3pIdhwxrWsP4zZZdkj6F8zhxacq2iJFcJJbo2hj/Tois9pdLzFDZURZVS42mR2UGJTDMtuSCiReY2Lbk+ocvoZ7GhJLqMeY0Wmcao4H2DNNIi806aP+3xwWbHKIlZSknMA2R4qbuZnzMkJzN48D7GaRze1d2HM32ZU/9X+NSKrLGUyKgDAA9hUyLTRklMIVvOPjMwhAUwAuflHFxQ1uOCsoXg1YX2gtrRnV9TElM8UPB0Nzt9TJNTci73VHpGGma3bagfRwhyDSEo0Mv1NkHOo8rZBFpyBQcCmN3lbF+zOhm+zp8Kl+cRcHWuDc7lxbR8tSiu+vTrcbMNBcB5pSoCfJdj159tTC1dbBp+8YY5cH5BDKhua0Qrbmu7ylmKrrCxo9DhvXKuFnyn7YIMjuJ9kO7zGIavzZ0YFb5HEM56BJKwJ3ThY4uvjCIE5SpKgE5PKrwMqaVv9Qs+uzQTLs63I8E/ssWrG4AQlJX9gX/UUueAkjjkABWVKdC4chKoWegBFLc1WM/YYqPC2wtvWnBBbjYSIOxZO5chwS/8jIb7/hcgFCDhfkU83MrH+/MU1kavPq/4jMKHnbRNQArwzdHkDvhOB0+RcPe9GNSncC7KwVWTCUF+YCbAzB0f6sKv2JfeA74rxAkH3Fygf6AVt7W5Lz3AYzivfGsGPsZ7DTJ8r2jCM5ILrp54MWKAsJsKJqNMoz/6to5XecMMfNjTt2zTrf6mA7OjwocCJLQUxeq3EWe50gPeWqCMwQW5zgz85HWXIEPM1YSfW+6Eu6cTNQM0r52Ccoh9PXufVz42W/2Z2z/Srf7BqhRN+JCfhFtv2vRbiLWmdsE/7739NM4rTWbg4zbUAC2xmvD5eyho1YIPkNCyPQ6l/2t6X1pLzcCHVwmUfej7Yz3HZqj3BDrpgJt52hNI4awPVM6S3CuAfMhMAMemvbrwqyvTtFsnQMK9NUi9v7Pv9BEU2fDYLPwd0n0LNOHZMgbqT87QhG+tmgYNL0/Qm/33buQ8Nz7CzSv/aTRA0tYi3eqXHNQem6EACY0rEBY6zrIi4u1rNEDsuh+BEt2a8J7yTGjWGZv3K+IRljnLb5c8CU9GCaBcMBIgpWSlbvWPHnlJf2zm6y9xDdz47IjwD8+A2F/4+KJjuvBL9mZA8OG2GXVsbpqK0jrHMC3ZBMXVr7HprYc5uxZpwjslF/x0PEl7bB53wI35OmPTbQ2qrCVBMwBWCSNxXr6MGmDZpyLs/nIWZJUxEeEzJRd8fljnxkVc2lTOUoShyO69nkHwcjtKgAvVczsAGk5Nh437UyF3N9MFvnRvBpzVubA6xubBBGjI0YW/XZdFjEUK8O9ZkAv04BPX/wLBQM++Dvf5ndOJ0KLT7919912EsclaliDDd4Xg5bVaT4LdfAYZMmrvBxwnVc7yqsJZr2n0fgA8mLEXWnZB5XBBUSMFcG8OmIUPtZ5J6DiUtWn20Qpn/UDlLE29dp09d9hx5l4rhjdUQpAFnFdauwcg1/3abuoJ+Mni3r+lZFvHhNdjmZ2QU59lm4gNpPDCuim4IB/oHuJ89TyD1SfvwHcJ47DBEMFfpwhBuRgOsHyXr81IgDY/+TY2qKqEkbggL5lSWNv4Q9X8YL+q7yf3Y0NFBF83Nm9rtVh7nGpGPLiHwG/veh0/ZFS25/0Zf/kTvwgGHH9HqboabhsAbAQ2lAWn4u1tfkd+yE8KoQC5Peh3rArVTGPAzB8TwxrWsDAU/QNM/UmFYwXHuQAAAABJRU5ErkJggg=="
                      alt="google-pay"
                    />
                    <img
                      width={30}
                      height={30}
                      style={{ cursor: 'pointer' }}
                      onClick={handlephonepayOpen}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEklEQVR4nO3Zz0sbQRQH8P1nOhNo6c2DZ52ApEHUeikt9GRL60WhPdWLGgiYW/FQlMyYFukhPRSl/qDW1B60NWAUBBHxB0UtWtuYtNnVrPvKJsHuSkV2F3ZnynzhXZJD3md23pBMFEVGRkaG6zSgkWaCaKYR0V8EM/CjGs3PQmyW4GTUU/ME07hfTZPLCtGY+5UPunlcrXBo5Jbz1Uc0E3Tj5O+W+uAGUOQHwArOARw0TizlC6Dn4Qx8mt6G/A8Nvm4dw+O2MbEA6eQqWPPzuwr3GtLiAMIhBm+YHbGzkYeWulExAKRWrwZzNsTyl2/QdCMlDoBgBsOJrA0xmV4XC0D+gRgayIoFIJjBi/giGEYVYJwZEOv+WJkJs5qup4IFdLaPV5pym6ODEtyufx0coPvuBHjN0/tTwQHMk2Vpfs918+XyGTxqHQsOYK3IzZe25i6+r5bKlddPNJ3PIY5IAJNPwNMWMs90ay5+deB+Bghm8Lt4eg7oiL4VD5Bb2D8HrC0fwrMH76Hrzjt43rsAum7wD4g/mbvy7OcaEA4xmB3fFBdAaoj+rgzMTW3D2soh5D7vV34fnJ7oYgDIJaWpAgwx+Z8BhbwmNmA4kQVN1WF3pyAmgHgsReirRUyPXQDM+3leAGzGOQAno9wArtGIY0D1KdBY4M0j2qd4ifnngnk/7+tMIFo0t43rlZeRkZFR/MofPh9jCPaBsBoAAAAASUVORK5CYII="
                      alt="phone-pe"
                    />
                  </div>

                  <hr />
                  <p className="my-1">or pay using credit card</p>
                  <hr />
                </div>

                {/* Form Inputs */}
                <Form.Group className="mb-3">
                  <Form.Label>Card Holder Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" name="input-name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="number" placeholder="0000 0000 0000 0000" name="card-number" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Expiry Date / CVV</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control type="text" placeholder="MM/YY" name="expiry-date" />
                    </Col>
                    <Col>
                      <Form.Control type="number" placeholder="CVV" name="cvv" />
                    </Col>
                  </Row>
                </Form.Group>

                <button type="submit" className="paymentbtn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </Form>
          </div>
        </div>
      ) : (
        <div style={{ color: 'black' }}>
          <h2>Thank you for your purchase!</h2>
          <p>Your order has been successfully placed.</p>
        </div>
      )}

      {/* GPay Barcode Modal */}
      <Modal show={showGpay} onHide={handleGpayClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Scan to Pay with GPay</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src="public/gpay barcode.jpg"
            alt="GPay Barcode"
            style={{ width: '100%', maxWidth: '300px' }}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showphonepay} onHide={handlephonepayClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Scan to Pay with PhonePe</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src="public/phonepaybarcode.jpg" 
            alt="phonepe Barcode"
            style={{ width: '100%', maxWidth: '300px' }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Paymentdetail;
