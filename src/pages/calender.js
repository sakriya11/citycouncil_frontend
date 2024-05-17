import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function calender() {
  const events = [
    {
      title: "community event",
      start: "2024-04-20",
    },
    {
      title: "easter",
      start: "2024-04-10",
    },
  ];
  return (
    <>
      <Header />
      <div className="text" style={{ paddingLeft: 650, fontSize: 25 }}>
        <label>Upcomming Events</label>
      </div>
      <div style={{ padding: 55 }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          style={{ color: "black" }}
          events={events}
        />
      </div>
      <Footer />
    </>
  );
}

export default calender;
