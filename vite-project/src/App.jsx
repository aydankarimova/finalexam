import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import image from '../src/image/bg_3.jpg'
import image from "../src/image/about_img_1.jpg";
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Aydan:12345@cluster0.g9uqeds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navBar">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <div className="eatwell">
              <a className="navbar-brand" href="#">
                EATWELL
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    OFFER
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MENU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    NEWS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    GALLERY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="image-nav">
        <img src="../src/image/bg_3.jpg" alt="" className="imgOne" />
      </div>

      <div className="card mb-3">
        <div className="row g-0 menyu">
          <div className="col-md-2">
            <img src="../src/image/about_img_1.jpg" className="imageAbout" />
          </div>
          <div className="col-md-8 textStory">
            <div className="card-body">
              <br />
              <br />
              <br />

              <p className="ourStory">OUR STORY</p>
              <h1 className="card-title">Welcome</h1>
              <p className="card-text">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. A small
                river named Duden flows by their place and supplies it with the
                necessary regelialia. It is a paradisematic country, in which
                roasted parts of sentences fly into your mouth.
              </p>
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{ borderRadius: "0px" }}
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <center>
        <div className="menu">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h5 className="ourOffers">Our OFFERS</h5>
          <h1>Our Offer This Summer</h1>
          <h5 className="away">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h5>

          <div className="card-group">
            <div className="card">
              <img
                src="../src/image/offer_1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <h5 className="card-title1">$19.50</h5>
                <h4>Beef with Sausage</h4>
                <p className="card-text1">
                  Far far away, behind the word mountains, far from the
                  countries Vocalia and Consonantia, there live the blind texts.
                </p>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    backgroundColor: "rgb(253,164,3)",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Order Now!
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="../src/image/offer_2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <h5 className="card-title1">$29.50</h5>
                <h4>Egg with Garlic</h4>
                <p className="card-text1">
                  Far far away, behind the word mountains, far from the
                  countries Vocalia and Consonantia, there live the blind texts.
                </p>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    backgroundColor: "rgb(253,164,3)",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Order Now!
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="../src/image/offer_3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <h5 className="card-title1">$11.50</h5>
                <h4>Beef Ribs</h4>
                <p className="card-text1">
                  Far far away, behind the word mountains, far from the
                  countries Vocalia and Consonantia, there live the blind texts.
                </p>
                <button
                  type="button"
                  className="btn btn-warning "
                  style={{
                    backgroundColor: "rgb(253,164,3)",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Order Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>

      <center>
        <div className="menu1">
          <h1>News</h1>
          <h5 className="away">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h5>

          <div className="card-group">
            <div className="card">
              <img
                src="../src/image/offer_1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <h4>
                  <b>We Have Dilecious Food</b>
                </h4>
                <p className="card-text1">
                  Far far away, behind the word mountains, far from the
                  countries Vocalia and Consonantia, there live the blind texts.
                </p>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    backgroundColor: "rgb(253,164,3)",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Order Now!
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="../src/image/offer_2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <h4>
                  <b>We Have Dilecious Food</b>
                </h4>
                <p className="card-text1">
                  Far far away, behind the word mountains, far from the
                  countries Vocalia and Consonantia, there live the blind texts.
                </p>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    backgroundColor: "rgb(253,164,3)",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Order Now!
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="../src/image/offer_3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body1">
                <h4>
                  <b>We Have Dilecious Food</b>
                </h4>
                <p className="card-text1">
                  Far far away, behind the word mountains, far from the
                  countries Vocalia and Consonantia, there live the blind texts.
                </p>
                <button
                  type="button"
                  className="btn btn-warning "
                  style={{
                    backgroundColor: "rgb(253,164,3)",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Order Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>

      <center>
        <div className="menu2">
          <h1>Gallery</h1>
          <h5 className="away">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h5>

          <div className="card-group">
            <div className="card">
              <img
                src="../src/image/menu_1.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="../src/image/menu_2.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="../src/image/menu_3.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div className="card-group" style={{ marginTop: "10px" }}>
            <div className="card">
              <img
                src="../src/image/menu_2.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="../src/image/menu_3.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="../src/image/menu_1.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </center>

      <div className="footer">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary navStyle"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <div className="eatwell">
              <a className="navbar-brand0">
                ABOUT US
                <p className="Aboutus">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <p>
                    Doloremque excepturi voluptas placeat. Voluptatem corrupti
                  </p>
                </p>
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link "  href="#">
                    THE RESTAURANT
                  </a>
                  <a className="nav-link "  href="#">
                    About Us
                  </a>
                  <a className="nav-link "  href="#">
                    Chefs
                  </a>
                  <a className="nav-link "  href="#">
                    Events
                  </a>
                  <a className="nav-link "  href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    USEFUL LINKS
                  </a>
                  <a className="nav-link" href="#">
                    Foods
                  </a>
                  <a className="nav-link" href="#">
                    Drinks
                  </a>
                  <a className="nav-link" href="#">
                    USEFUL LINKS
                  </a>
                  <a className="nav-link" href="#">
                    Breakfast
                  </a>
                  <a className="nav-link" href="#">
                    Brunch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    USEFUL LINKS
                  </a>
                  <a className="nav-link" href="#">
                    Foods
                  </a>
                  <a className="nav-link" href="#">
                    Drinks
                  </a>
                  <a className="nav-link" href="#">
                    Breakfast
                  </a>
                  <a className="nav-link" href="#">
                   Brunch
                  </a>
                  <a className="nav-link" href="#">
                    Dinner
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
