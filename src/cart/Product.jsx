import React, { useState } from 'react';
import productsData from '../pages/game_cd_products.json';
import { Card, Button, Container, Row, Col, Pagination } from 'react-bootstrap';
import './Product.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Product = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;


  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
       <Container fluid className="product">
      <h1 className="my-4 text-center text-light">Game Products</h1>
      <input
        type="text"
        placeholder="Search by title..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}/>

     <Row> 
  {currentProducts.map((product) => (
    <Col xs={12} sm={4} md={3} key={product.id} className="mb-4">
      <Card className='cardborder' style={{height:"550px"}}>
        <Card.Img
          variant="top"
          src={product.image}
          className="img-fluid mx-auto d-block p-3 product-image" style={{height:"300px"}}/>
        <Card.Body>
          <div className="mb-2">
            <Link to={`/product/${product.id}`}>
              <Card.Title className='name'>{product.name}</Card.Title>
            </Link>
          </div>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><strong>${product.price}</strong></Card.Text>
          <Card.Text>Platform: {product.platform}</Card.Text>
          <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
  {currentProducts.length === 0 && (
    <p className="text-light text-center">No products found.</p>
  )}
</Row>
      {/* Pagination */}
      <Pagination className="justify-content-center">
        {[...Array(totalPages).keys()].map(number => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>

       <footer className="text-white mt-5 pt-4 pb-3">
        <div className="container">
          <div className="row">

            {/* About */}
            <div className="col-md-4 mb-3">
              <h5>About GameCD</h5>
              <p>Your ultimate source for classic and modern game CDs. Discover, collect, and play.</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/product" className="text-white text-decoration-none">Product</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
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

export default Product;
