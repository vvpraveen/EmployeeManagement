import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from "react-router-dom";

function Cal() {
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        
        headerToolbar={{
          start: "today prev,next", 
        
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"90vh"}
      />
      <Link to="/navi" className=" button1 btn btn-danger">Back</Link>
    </div>
  );
}

export default Cal;
