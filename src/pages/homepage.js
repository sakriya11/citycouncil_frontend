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
            <div className="topic">Community Initiatives</div>
          </div>
          <div className="icon_second">
            <i
              class="fa-brands fa-blogger-b fa-xl"
              style={{ marginLeft: 50, color: "#1bc4da" }}
            ></i>
            <div className="topic">Transparent Governance</div>
          </div>
          <div className="icon_third">
            <i
              class="fa-brands fa-blogger-b fa-xl"
              style={{ marginLeft: 50, color: "#1bc4da" }}
            ></i>
            <div className="topic">Local Services Directory</div>
          </div>
          <div className="icon_four">
            <i
              class="fa-regular fa-heart fa-xl"
              style={{ marginLeft: 50, color: "#1bc4da" }}
            ></i>
            <div className="topic">Engage with Your Council</div>
          </div>
        </div>
        <div className="text">
          <label>News</label>
        </div>
        <div className="details">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCYqhiuLbbX8Qs6VVxlfFlsqIHY3fASSrMVWWoHh7nA&s"
            />
            <Card.Body>
              <Card.Title>
                City Launches Green Initiative to Combat Climate Change
              </Card.Title>
              <Card.Text>
                Learn about the latest efforts by the city council to reduce
                carbon emissions and promote sustainability..
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.birminghamtimes.com/wp-content/uploads/2019/01/RapidTransit-2-.jpg"
            />
            <Card.Body>
              <Card.Title>
                New Public Transportation Route Connects Neighborhoods
              </Card.Title>
              <Card.Text>
                Stay informed about the launch of a new public transportation
                route designed to improve accessibility
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://s3-rd-prod.crainsdetroit.com/s3fs-public/styles/1024x512/public/muskegon-dog-park-main_i.jpg"
            />
            <Card.Body>
              <Card.Title>
                Community Partnership Spurs Revitalization of Local Parks
              </Card.Title>
              <Card.Text>
                Read about a collaborative effort between the city council and
                community organizations .
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
