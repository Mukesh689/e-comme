import React from 'react';
import { useParams } from 'react-router-dom';
import products from './game_cd_products.json';
import { Card, Container } from 'react-bootstrap';
import './productdetail.css';


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) return <Container><p>Product not found.</p></Container>;

  return (
    <Container fluid className='productdetail'>
      <h1>Product Detail</h1>
        <card className='container Productcard mt-5 d-flex gap-5'>
          <img src={product.image} height={300} width={500} className="productimg" />
          <Card.Body className='productbody'>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
            <Card.Text><strong>Platform:</strong> {product.platform}</Card.Text>
          </Card.Body>
        </card>

        
      <footer className="text-white mt-5 pt-4 pb-3">
        <div className="container">
          <div className="row">

            <div className="col-md-4 mb-3">
              <h5>About GameCD</h5>
              <p>Your ultimate source for classic and modern game CDs. Discover, collect, and play.</p>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/product" className="text-white text-decoration-none">Product</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <hr className="bg-secondary" />

          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} GameCD. All rights reserved.</p>
          </div>
        </div>
      </footer>
</Container>
  );
};

export default ProductDetail;
