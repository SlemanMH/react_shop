import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
  <footer className="footer animation">
  <div className="container">
    <div className="row">
      <div className="footer-start col-md-4 col-sm-6 d-flex flex-column gap-2">
        <h2 href="#" className="footer-logo d-flex gap-1 fs-5">
         NFT Marketplace
        </h2>
        <p>NFT marketplace UI created with Anima for Figma.</p>
        <div className="footer-social d-flex flex-column gap-1">
          <p className="m-0">Join our community</p>
          
        </div>
      </div>
      <div className="footer-middle col-md-3 col-sm-6 offset-md-1">
        <h2 className="fs-5">Explore</h2>
        <nav className="d-flex flex-column gap-3">
          <a href="#">Marketplace</a>
          <a href="Rankings.html">Rankings</a>
          <a href="Connectawallet.html">Connect a wallet</a>
        </nav>
      </div>
      <div className="footer-end col-md-4 col-sm-12 d-flex flex-column gap-1 pt-md-0 pt-sm-2">
        <h2 className="fs-5">Join our weekly digest</h2>
        <p>Get exclusive promotions &amp; updates straight to your inbox.</p>
        <form className="position-relative">
          <input type="email" placeholder="Enter your email here" className="position-absolute" />
          <button className="position-absolute">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</footer>


  )
}
