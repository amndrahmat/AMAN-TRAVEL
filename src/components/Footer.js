import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Us and Start a Back Pack Story
        </p>
        <p className="footer-subscription-text">
          Send Your Email And We Will Invite You to The Back Pack Story.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">SEND</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Category</h2>
            <Link to="/profile">Profil</Link>
            <Link to="/travel">Travel</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/events">Events</Link>
            <Link to="/tips">Tips</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items" style={{ width: "400px" }}>
            <h2>COPYRIGHT</h2>
            <p>
              All articles and photos on this travel blog are the property of
              AMAN BACKPACK STORY, unless otherwise stated in the article. It is
              prohibited to use all AMAN BACKPACK STORY properties, whether
              written or photographed in any form without the permission of the
              owner of this travel blog.
            </p>
            <p>
              If you want to use the property on AMAN BACKPACK STORY, please
              contact via contact. I'm happy to help.
            </p>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img className="logo" src="./images/logo.png"></img>
            </Link>
          </div>
          <small class="website-rights">Amanda Rahmat Hidayat © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
