import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/tax.css";
import axios from "axios";
import { toast } from "react-toastify";

function Tax() {
  const [tax, setTax] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
    propertyAddress: "",
    propertyType: "commercial",
    propertyOwnershipStatus: "owner",
    propertyAssesmentValue: 0,
    taxYear: "",
    taxableIncome: 0,
    paymentMethod: "cash",
    amount: 0,
    paymentDate: "",
  });
  const handelChange = async (e) => {
    const { name, value } = e.target;
    setTax({
      ...tax,
      [name]: value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!localStorage.accessToken) {
        toast.error("Please login before submitting the tax", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      const response = await axios.post(
        "https://kathmandu-citycouncil.vercel.app//api/user/create/tax",
        // "http://127.0.0.1:3000/api/user/create/tax",
        tax
      );

      if (response.data) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error);
      }
    }
  };
  return (
    <>
      <Header />
      <div className="tax-container">
        <div className="tax-second-container">
          <div className="login-logo"></div>
          <div className="registration-title"> Kathmandu City Council</div>
          <div className="registration-discription">City council tax form</div>

          <div className="register-form">
            <div className="input-container">
              <div className="taxform">
                <div className="input">
                  <label>Name</label>
                  <input
                    type="text"
                    className="input-box"
                    name="name"
                    value={tax.name}
                    onChange={handelChange}
                  ></input>
                </div>
                <div className="input-right">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={tax.address}
                    onChange={handelChange}
                  ></input>
                </div>
              </div>
              <div className="taxform">
                <div className="input">
                  <label>Contact number</label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={tax.contactNumber}
                    onChange={handelChange}
                  ></input>
                </div>
                <div className="input-right">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={tax.email}
                    onChange={handelChange}
                  ></input>
                </div>
              </div>
              <div className="taxform">
                <div className="input">
                  <label>Property Address</label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={tax.propertyAddress}
                    onChange={handelChange}
                  ></input>
                </div>
                <div className="input-right">
                  <label>Property Type</label>
                  <select
                    id="dropdown"
                    name="propertyType"
                    value={tax.propertyType}
                    onChange={handelChange}
                  >
                    <option value="commercial">commercial</option>
                    <option value="recidental">recidental</option>
                  </select>
                </div>
              </div>
              <div className="taxform">
                <div className="input">
                  <label>Property Ownership Status</label>
                  <select
                    id="dropdown"
                    name="propertyOwnershipStatus"
                    value={tax.propertyOwnershipStatus}
                    onChange={handelChange}
                  >
                    <option value="owner">Owner</option>
                    <option value="tenant">Tenant</option>
                  </select>
                </div>
                <div className="input-value">
                  <label>Property Assesment Value</label>
                  <input
                    type="text"
                    name="propertyAssesmentValue"
                    value={tax.propertyAssesmentValue}
                    onChange={handelChange}
                  ></input>
                </div>
              </div>
              <div className="taxform">
                <div className="input">
                  <label>Tax Year</label>
                  <input
                    type="text"
                    name="taxYear"
                    value={tax.taxYear}
                    onChange={handelChange}
                  ></input>
                </div>
                <div className="input-right">
                  <label>Taxable Income</label>
                  <input
                    type="text"
                    name="taxableIncome"
                    value={tax.taxableIncome}
                    onChange={handelChange}
                  ></input>
                </div>
              </div>
              <div className="taxform">
                <div className="input-method">
                  <label>Payment Method</label>
                  <select
                    id="dropdown"
                    name="paymentMethod"
                    value={tax.paymentMethod}
                    onChange={handelChange}
                  >
                    <option value="online">Online</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div className="input-payment">
                  <label>Payment Date</label>
                  <input
                    type="text"
                    name="paymentDate"
                    value={tax.paymentDate}
                    onChange={handelChange}
                  ></input>
                </div>
                <div className="input-amount">
                  <label>Amount</label>
                  <input
                    type="text"
                    name="amount"
                    value={tax.amount}
                    onChange={handelChange}
                  ></input>
                </div>
              </div>
            </div>
            <button
              className="transparent-button"
              type="submit"
              onClick={handelSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tax;
