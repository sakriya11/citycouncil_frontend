// Notification.js
import React from "react";
import { toast } from "react-toastify";

const Notification = ({ message, type, options }) => {
  const showToast = () => {
    toast[type](message, options);
  };

  return <div>{showToast()}</div>;
};

export default Notification;
