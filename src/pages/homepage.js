import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/homepage.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function homepage() {
  return (
    <>
      <Header />

      <div className="hp_container">
        <div className="img">
          <img
            src="https://www.imf.org/-/media/Images/IMF/Countries/ResRep/NPL/nepal.ashx?h=280&w=1099&la=ens"
            alt="ktm_image"
          />
          <div className="img_text">Welcome to Kathmandu City Council</div>
        </div>
        <div className="features">
          <div className="icon_first">
            <i
              className="fa-regular fa-user fa-xl"
              style={{ marginLeft: 50, color: "#1bc4da" }}
            ></i>
            <div className="topic" style={{ marginLeft: 50 }}>
              title
            </div>
            <div className="detail">this is the detail section</div>
          </div>
          <div className="icon_second">
            <i
              class="fa-brands fa-blogger-b fa-xl"
              style={{ marginLeft: 50, color: "#1bc4da" }}
            ></i>
            <div className="topic" style={{ marginLeft: 50 }}>
              title
            </div>
            <div className="detail">this is the detail section</div>
          </div>
          <div className="icon_third">
            <i
              class="fa-brands fa-blogger-b fa-xl"
              style={{ marginLeft: 50, color: "#1bc4da" }}
            ></i>
            <div className="topic" style={{ marginLeft: 50 }}>
              title
            </div>
            <div className="detail">this is the detail section</div>
          </div>
          <div className="icon_four">
            <i
              class="fa-regular fa-heart fa-xl"
              style={{ marginLeft: 50, color: "#1bc4da" }}
            ></i>
            <div className="topic" style={{ marginLeft: 50 }}>
              title
            </div>
            <div className="detail">this is the detail section</div>
          </div>
        </div>
        <div className="text">
          <label>News</label>
        </div>
        <div className="details">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media-cdn.tripadvisor.com/media/photo-c/768x250/0d/d6/96/36/photo4jpg.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media-cdn.tripadvisor.com/media/photo-c/768x250/0d/d6/96/36/photo4jpg.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media-cdn.tripadvisor.com/media/photo-c/768x250/0d/d6/96/36/photo4jpg.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="news"></div>
      </div>

      <Footer />
    </>
  );
}

export default homepage;
