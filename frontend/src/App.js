import React, { useEffect, useRef } from "react";
// import EventList from "./components/EventList"; // Import the EventList component
import axios from "axios";
import Header from "./components/Header";

  function App() {
    const fetchOnce = useRef(false); // Prevent duplicate API call
  
    useEffect(() => {
      if (fetchOnce.current) return; // Skip if already fetched
      fetchOnce.current = true;
  
      axios
      .get("http://localhost:4000/api/events")
      .then(response => {
          console.log("Fetched events:", response.data);
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
    }, []);

  return (
    <div className="App">
      {/* <h1>Welcome to the Website</h1> */}
      <div className="content">
        {/* <h2>Events</h2> */}
        {/* <Events /> */}
        {/* <EventList />  */}
        <Header />
        
      </div>
    </div>
  );
}

export default App;

