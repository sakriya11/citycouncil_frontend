import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/aboutus.css";

function aboutus() {
  return (
    <>
      <Header />

      <div class="inner-container">
        <div class="inner-content1">
          <div class="faq-box">
            {/* <h5 style={{marginTop:".2in",fontSize:"14px", color:"blue"}}>FAQ</h5> */}
            <h3 style={{ marginTop: ".5in", fontWeight: "600" }}>About Us</h3>
            <p style={{ marginTop: ".25in" }}>
              The Kathmandu City Council serves as the legislative body for our
              vibrant community, dedicated to fostering growth, prosperity, and
              quality of life for all residents. Comprised of elected
              representatives from various districts within our city, the
              council works tirelessly to enact policies, allocate resources,
              and advocate for the interests of our diverse population.
            </p>
          </div>
          <div class="faq-box2">
            <h3 style={{ fontWeight: "600" }}>Key Responsibilities</h3>
            <div className="boxes">
              <div className="smallboxes">
                <h4 style={{ marginBottom: ".5cm" }}>Policy Making</h4>
                <div
                  className="imagee"
                  style={{
                    marginBottom: "1.2cm",
                    marginLeft: "-.2cm",
                    backgroundImage:
                      "url(https://www.sweetprocess.com/wp-content/uploads/2021/05/policies-and-procedures-4.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <ul>
                  <li>Zoning and Land Use Regulations: </li>
                  <hr />
                  <li>Public Safety Policies</li>
                  <hr />
                  <li>Environmental Protection Measures</li>
                  <hr />
                </ul>

                <ul>
                  <li>Economic Development Strategies</li>
                  <hr />
                  <li>Housing Policies</li>
                  <hr />
                  <li>Social Services and Welfare</li>
                </ul>
              </div>
              <div className="smallboxes">
                <h4 style={{ marginBottom: ".5cm" }}>Budget Oversight</h4>
                <div
                  className="imagee"
                  style={{
                    marginBottom: "1.2cm",
                    backgroundImage:
                      "url(https://www.daniaaccounting.com/wp-content/uploads/2022/09/Budget.jpg?x38989)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <ul>
                  <li>Annual Budget Approval </li>
                  <hr />
                  <li> Financial Planning</li>
                  <hr />
                  <li>Revenue Generation</li>
                  <hr />
                  <li>GPerformance Monitoring.</li>
                  <hr />

                  <li> Reserve Fund Management:</li>
                  <hr />

                  <li>Audits and Financial Reporting:</li>
                </ul>
              </div>
              <div className="smallboxes">
                <h4 style={{ marginBottom: ".5cm" }}> Community Engagement</h4>
                <div
                  className="imagee"
                  style={{
                    marginBottom: "1.2cm",
                    backgroundImage:
                      "url(https://www.aluminati.net/wp-content/uploads/2022/06/FB-Admins.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <ul>
                  <li>Public Meetings and Hearings</li>
                  <hr />
                  <li>Outreach and Communication: </li>
                  <hr />
                  <li>Advisory Boards and Commissions:</li>
                  <hr />
                  <li>Neighborhood Associations and Community Groups: </li>
                  <hr />
                  <li>Online Engagement Platforms</li>
                  <hr />
                  <li>Youth and Student Involvement:</li>
                </ul>
              </div>
            </div>
            <div className="FAQQ">
              {/* <img src={nurse} className="nurse"></img> */}
              <div className="FAQQcontent">
                <h5 style={{ textAlign: "left", color: "#126fb4" }}>FAQ</h5>{" "}
                <h6
                  style={{
                    color: "#248acc",
                    fontWeight: "500",
                    marginTop: ".8cm",
                  }}
                >
                  How can I contact my city council member?
                </h6>
                <p>
                  You can easily contact your city council member by visiting
                  the "Meet Your Council Members" page on our website. There,
                  you'll find contact information for each council member,
                  including their email addresses and office phone numbers.
                </p>{" "}
                <hr />{" "}
                <h6
                  style={{
                    color: "#248acc",
                    fontWeight: "500",
                    marginTop: "0cm",
                  }}
                >
                  How can I attend a city council meeting?
                </h6>
                <p>
                  Attending a city council meeting is simple! Our council
                  meetings are open to the public and typically held on [day of
                  the week] at [time] at [location]. You can find the schedule
                  for upcoming meetings on the "Council Meetings" page of our
                  website. Additionally, you may have the option to participate
                  virtually via video conferencing platforms.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default aboutus;
