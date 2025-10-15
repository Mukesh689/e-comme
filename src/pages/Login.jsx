import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import image from '/public/download.jpg'
import { NavLink } from 'react-router-dom';
import './create.css';

const Login = () => {
  return (

    <div style={{backgroundImage: `url(${image})` ,color:'white'}}className="create">
      <NavLink to='/'>
    <Button style={{width:'70px', marginTop:"10px", marginLeft:'90%'}}>Back</Button>
    </NavLink>
    <Container style={{ width: '500px', margin: '50px auto' }} className='Container'>
      <Form className='form'>
       <h1 style={{textAlign:"center"}}>Login</h1>
        <FloatingLabel controlId='name' label='Username' className='mb-3'>
          <Form.Control type='name' placeholder='Username'/>
        </FloatingLabel>
        <FloatingLabel
          controlId="email"
          label="Email address"
          className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="Password" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
            <Form.Check type="checkbox" label="Remember Me" className="mb-3 d-flex justify-content-center"/>
           <div className='forget mb-4'>
            <a href="" >Forget Password</a>
            </div>
            <NavLink to='/'>
        <Button type="submit" className='btn'>Login</Button>
        </NavLink>

        <h4 style={{textAlign:'center', marginTop:'10px'}}>Login with</h4>

       <div className="icon mx-auto d-flex justify-content-around mt-3">
            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACv0lEQVR4nO2UT2jTYByG48F5c4ieJ47RBE0rbZItcT2VHYQWWoebx11ksEPPehC92YA35wSvnpyDVoUetNrmYGvRKiK7bG6oW77uIqOCcyVx/eSbjWY1af70r/C98N7Kr++TPC1B4ODg4ODg6FLyeE7kKepugSTLeZLcyZNkseDxTBNdzk+JnlYluqjk6B0l5y2rOfoOzFDHrceT5GqBoqBBl0rDw4OdHg4zzKAi0Uuq5IX/NEevNIXYf/LG47WuFSmK6dR4JetlVMm7Zjj+b+fNAUhyywIAtQp4Lt7u8YDn4orkrVqMh0qOBuYAFFWzAQCBwEGZ5x59CQaPtTr86+joUSBwD9BNq/G/Abw102N2xmsAdYjPm+OjvNvxgGcCQOA+avfsAKC2DaBeBQjcFUgQh5yMLwvsLOC5qv5WrwAcKaVXBjS0ZYD5iZn3bgHsKNWoDHAB8Doz9sYUYEgEcHJuUc3RZ6tuAJopZaQMcADwI+vbvZUOVSKpGGwKgBq49g7eD8b2XAIcUKqZMsAmwPrzQPXy4zBE420BoJ66uQGvXrxeM/prtTOmDrGOavfzqsH49NNxeCEV/TPeNoDWybnFmnTGt+sGwGlV3fDvWZ8ipicODHcFoCmVYkNb3QLYfOHf1ivTMoCmVCIcX0FKdRLg5TP+U6MybQHQOjuz8AEIXKUDAJWFJ6HlZsPbAoBaFvwnAc++atd4WeDebvD+ETvj2wKAPltimMMyz4qywLWklMxz91bPjxxBN7sKoAWcY6KAZ7edP3X2mzzGXtLf6gkAilOlNGWIhvQMwIlSemX6CsBKKSNl+hLASCkzZfoWAAVpIgvsbVQzZfoawE0iGEDEb6ClRLBCCQD6/kecjMmmB4ZEWex3gHAqmjA9cPrG8sA+hMWb6AVAOBkDkWRMnHo4NdCp78fBwcHBIf67/ALECpwyy5gUBAAAAABJRU5ErkJggg==" alt="gmail-new"></img>
            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIElEQVR4nO1XMWhUQRBdRSMKCqJCQARBEARBQUFQMBAsgon5/71lW9NdK1aWsdTS0tbSVrQRBS1EC8FCEAQbtRARIWLMzcS4spe78/Qil8vX7J3Og4Ff7Oe/N29mZ75zBoPBYMgBJeO/EC43ARNCc4TZy0f/yx4RYCk3Ke0RK3HsdqQsjwnwYIBFPFbvT/YU0povdfKcAq9yE9cf8VqA89G5DSvNv25HgIsxhJF0OE5MbFHgkgBzGR2YSxwSlwanEEYSx95ClsW8FCC03IlluUvIawJ8XUcBSwrciCGMtngskmcUeN73rSXAfSmKo+1yK8tDAtz+6yLIewIc+em75J1K12+/makU+KUSpqZ2r7YSVj1HBPgswOUYwtbGR2q1zUrWBHj/Bxz42NUH5IV+enMtA/FN5+0RJyd3CnlFyHrfAgBV4HoMYU/V29JVyOITJU911PFBJW/2IeKuAIfbvxPeHxfgYZYVRchvifxCUexv9w8wruSz374HvFgkz7bOz4ewN7lSdaNwVV7uEDSfyitOT29vlNvs7MZUfkK+6zjzIdV9HBvb1GzkbY0ZRX4avKUReCvezyQhzYG6Q4CrKdJzW6T3M+nsMGy/T5U83fVb7f0JIR8N3Rov5K2FsjzwpSj2pVnU7Knh/B8Rsr6Wq1kHTch6hctNwITQHGH28lHrEebPtJojzJ9dNUeYP6PmCJeTYCuKDlg4g8FgMLgM+A5Rq7+v0UVELwAAAABJRU5ErkJggg==" alt="mail"></img>
            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg==" alt="facebook-new"></img>
          </div>

      </Form>
    </Container>
    </div>
  )
}

export default Login
