import React from 'react'
import GameCarousel from './GameCarousel';
import data from '../pages/game_cd_products.json';
import './home.css'


const Home = () => {

const pcGames = data.filter(game => game.platform.toLowerCase().includes('pc'));

const xboxGame = data.filter(game =>
  game.platform.toLowerCase().includes('xbox')
);

  const playstationGames = data.filter(game =>
    game.platform.toLowerCase().includes('ps5') ||
    game.platform.toLowerCase().includes('playstation')
  );

  return (
    <div>
      <div className="homepage" >

        {/* <video autoPlay loop muted playsInline height={800} width={1850} className='backgroundclip'>
          <source className='' src='/public/Untitled video - Made with Clipchamp.mp4' type='video/mp4' />
        </video> */}
        <img alt="" height={800} width={1850} className='backgroundclip' />

        <div style={{ padding: '20px' }} className='content'>
          <GameCarousel title="PC Games" games={pcGames} />
          <GameCarousel title="PlayStation Games" games={playstationGames}/>
          <GameCarousel title="Xbox Games" games={xboxGame}/>
        </div> 

         <footer className="">
        <div className="container">
          <div className="row d-flex justify-content-evenly">
            {/* About */}
            <div className="col-md-4 mb-4">
              <h5>About GameCD</h5>
              <p>Your ultimate source for classic and modern game CDs. Discover, collect, and play.</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className=" text-decoration-none">Home</a></li>
                <li><a href="/product" className=" text-decoration-none">Product</a></li>
                <li><a href="/contact" className=" text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-md-4 mb-3 text-dark">
              <h5>Follow Us</h5>
              <a href="#" className=" me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className=" me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className=" me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className=" me-3"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          <hr className="bg-secondary" />
          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} GameCD. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
export default Home
