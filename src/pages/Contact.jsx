import React from 'react'
import { Container, Form, FloatingLabel, Button } from 'react-bootstrap'
import './create.css'
import { NavLink } from 'react-router-dom';
import image from '/public/download.jpg'


const Contact = () => {
  return (
    <>
    
    <div style={{ backgroundImage: `url(${image})`, color: 'black' }} className="createcontact">
     <div>
     <NavLink to='/'>
    <Button style={{width:'70px', marginTop:"10px", marginLeft:'85%'}}>Back</Button>
    </NavLink>
     </div>
      <Container fluid className='Container' style={{ margin: '50px auto', width: '500px' }}  >

        <Form className='form ' >
       <h1 style={{textAlign:"center"}}>Contact Us</h1>

          <FloatingLabel controlId='name' label='Username' className='mb-3'>
            <Form.Control type='name' placeholder='Username' />
          </FloatingLabel>

          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>


          <FloatingLabel className="form-label">Message</FloatingLabel>
          <textarea className="form-control" placeholder="Enter message" required></textarea>
          <div className="invalid-feedback ">
            Please enter a message in the textarea.
          </div>
          <Button type="submit" className='btn ' style={{ marginTop: "20px" }}>Submit</Button>

        </Form>
      </Container>



    </div>
    </>
  )
}

export default Contact